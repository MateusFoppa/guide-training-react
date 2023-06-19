interface HeadProps {
  title: string
}


export function Head({ title }: HeadProps) {
  document.title = `Guide Training | ${title}`
  // document.querySelector('[name=description]')?.setAttribute('content', description)

  return null
}
