const createMedia = (maxWidth: number) => {
  return `@media (max-width: ${maxWidth}px)`
}

const createMediaMin = (maxWidth: number) => {
  return `@media (min-width: ${maxWidth}px)`
}

export const media = {
  createMedia,
  laptop: createMedia(1200),
  tablet: createMedia(760),
  mobile: createMedia(470),
  createMediaMin,
  laptopMin: createMediaMin(1200),
  tabletMin: createMediaMin(760),
  mobileMin: createMediaMin(620)
}
