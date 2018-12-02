const twLinkElm = document.querySelector('a[href*="//twitter.com/"]')

if (twLinkElm !== null) {
  const screenName = twLinkElm.innerText
  const avatarUrl = `https://avatars.io/twitter/${screenName}/small`

  const avatarElm = document.createElement('img')
  avatarElm.src = avatarUrl
  avatarElm.referrerPolicy = 'no-referrer'
  Object.assign(avatarElm.style, {
    width: '20px',
    height: '20px',
    marginRight: '5px',
    borderRadius: '50%'
  })

  twLinkElm.insertAdjacentElement('afterbegin', avatarElm)
}
