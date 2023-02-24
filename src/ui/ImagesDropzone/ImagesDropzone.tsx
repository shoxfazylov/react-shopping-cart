import { ReactNode } from 'react'
import { useDropzone } from 'react-dropzone'

import { ImageFile } from 'types/common'

import * as S from './ImagesDropzone.styled'

import CrossIcon from 'public/icons/cross.svg'
import PlusIcon from 'public/icons/plus-1.svg'

interface ImagesDropzoneProps {
  images: ImageFile[]
  maxFiles?: number
  onChange: (images: ImageFile[]) => void
}

export const ImagesDropzone = ({ images = [], maxFiles, onChange }: ImagesDropzoneProps) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: '.jpg,.png',
    multiple: false,
    maxFiles: maxFiles,
    onDrop: (files: File[]) => {
      files.forEach((file) => {
        const isDuplicate = images.some((img) => img.name === file.name)

        if (isDuplicate) return

        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.addEventListener('load', () => {
          const imageWithPreview = Object.assign(file, {
            preview: reader.result
          })

          onChange([...images, imageWithPreview])
        })
      })
    }
  })

  const removeImageFromList = (images: ImageFile[], name: string) => {
    const withRemoved = images.filter((image) => image.name !== name)
    onChange(withRemoved)
  }

  const renderImagePreviewItems = (files: ImageFile[]): ReactNode => {
    return files.map(({ preview, name }) => {
      if (!preview) return null

      return (
        <li key={preview as string}>
          <S.ImagePreview>
            <img src={preview as string} alt={name} />
          </S.ImagePreview>

          <S.RemoveImageButton
            onClick={() => {
              removeImageFromList(images, name)
            }}
          >
            <CrossIcon />
          </S.RemoveImageButton>
        </li>
      )
    })
  }

  return (
    <S.ImagesDropzone>
      {images.length ? (
        <S.ImagePreviewList>{renderImagePreviewItems(images)}</S.ImagePreviewList>
      ) : null}

      {maxFiles !== images.length ? (
        <S.UploadZone {...getRootProps()}>
          <input {...getInputProps()} />

          <PlusIcon />
        </S.UploadZone>
      ) : null}
    </S.ImagesDropzone>
  )
}
