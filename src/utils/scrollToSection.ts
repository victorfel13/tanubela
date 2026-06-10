export async function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId)
  if (!el) return

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  el.scrollIntoView({
    behavior: reducedMotion ? 'auto' : 'smooth',
    block: 'start',
  })

  if (!reducedMotion) {
    await new Promise<void>((resolve) => {
      let finished = false
      const finish = () => {
        if (finished) return
        finished = true
        window.removeEventListener('scrollend', onScrollEnd)
        clearTimeout(fallback)
        resolve()
      }

      const onScrollEnd = () => finish()
      window.addEventListener('scrollend', onScrollEnd, { once: true })
      const fallback = window.setTimeout(finish, 900)
    })
  }

  window.dispatchEvent(
    new CustomEvent('reveal-section', { detail: { id: sectionId } }),
  )
}
