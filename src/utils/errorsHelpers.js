export const manageErrorText = (error) => {
  if (error['isAxiosError']) return 'Something was wrong on our server, retry in a few minutes'
  return 'other error'
}

