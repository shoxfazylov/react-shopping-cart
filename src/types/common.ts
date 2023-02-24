import { FileWithPath } from 'react-dropzone'

export interface ImageFile extends FileWithPath {
  preview: string | ArrayBuffer | null
  webkitRelativePath: string
}
