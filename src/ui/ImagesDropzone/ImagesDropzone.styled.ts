import styled from '@emotion/styled'

export const ImagesDropzone = styled.div`
  display: flex;
`

export const ImagePreviewList = styled.ul`
  display: flex;
  grid-gap: 10px;
  margin-right: 10px;

  li {
    position: relative;
    width: 70px;
    height: 70px;
    border-radius: 6px;
    overflow: hidden;
  }
`

export const ImagePreview = styled.div`
  width: 100%;
  height: 100%;

  img {
    position: absolute;
    max-width: 100%;
    top: 0;
    left: 0;
  }
`

export const RemoveImageButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 20px;
  height: 20px;
  background: #ffffff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`

export const UploadZone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border: 1px dashed #dedee2;
  background: #fff;
  border-radius: 8px;
  cursor: pointer;
  box-sizing: border-box;
`
