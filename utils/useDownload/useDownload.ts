//@ts-nocheck
import { useRef, useEffect } from 'react';

import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';

import { getAudioFileExtension, createUrlAndDownloadFile } from './utils';

export const useDownload = () => {
  const ffmpegRef = useRef(new FFmpeg());

  const loadFFmpegWasm = async () => {
    const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.10/dist/esm';
    const ffmpeg = ffmpegRef.current;

    ffmpeg.on('log', ({ message }) => {
      if (import.meta.env.DEV) {
        console.log(message);
      }
    });

    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
    });
  };

  useEffect(() => {
    loadFFmpegWasm();
  }, []);

  const downloadRecord = async (recording: Blob) => {
    if (recording.size === 0) {
      console.error("The record can't be downloaded because it's empty and have sounds!");

      return;
    }

    const fileExtension = getAudioFileExtension(recording.type);

    if (!fileExtension) {
      console.error("Record doesn't have file extension");

      return;
    }

    const ffmpeg = ffmpegRef.current;

    let fileData;
    try {
      await ffmpeg.load();
      await ffmpeg.writeFile(`input.${fileExtension}`, await fetchFile(recording));
      await ffmpeg.exec(['-i', `input.${fileExtension}`, 'output.mp3']);
      fileData = await ffmpeg.readFile('output.mp3');
    } catch (error) {
      console.error(error);
    }

    if (!fileData) {
      createUrlAndDownloadFile(recording, fileExtension);

      return;
    }

    const data = new Uint8Array(fileData as ArrayBuffer);
    const fileToDownload = new Blob([data.buffer], { type: 'audio/mpeg' });
    createUrlAndDownloadFile(fileToDownload);
  };

  return { downloadRecord };
};
