/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import WebFont from 'webfontloader'

export const onClientEntry = () => {
  WebFont.load({
      google: {
        families: ['Advent Pro', 'Barlow:100,400:latin-ext']
      }
    })
}
