import { MP3_FILE_EXTENSION, DOWNLOAD_FILE_NAME, audioRegExp } from './constants';

/**
 * @param mimeType - should be a string with audio type: "audio/(webm | mp4);codecs=opus"
 */
export const getAudioFileExtension = (mimeType: string) => {
  if (!mimeType) return '';

  const audioMimeType = mimeType.match(audioRegExp);

  if (!audioMimeType) return '';

  const fileExtension = audioMimeType[0].split('/')[1];

  if (!fileExtension) return '';

  return fileExtension;
};

export const createUrlAndDownloadFile = (
  file: Blob,
  fileExtension: string = MP3_FILE_EXTENSION
) => {
  const url = URL.createObjectURL(file);

  const anchor = document.createElement('a');
  anchor.setAttribute('download', `${DOWNLOAD_FILE_NAME}.${fileExtension}`);
  anchor.setAttribute('href', url);

  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
};
