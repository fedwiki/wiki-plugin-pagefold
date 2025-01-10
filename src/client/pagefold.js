/*
 * Federated Wiki : Pagefold Plugin
 *
 * Licensed under the MIT license.
 * https://github.com/fedwiki/wiki-plugin-pagefold/blob/master/LICENSE.txt
 */

// http://stackoverflow.com/questions/5214127/css-technique-for-a-horizontal-line-with-words-in-the-middle

const emit = ($item, item) => {
  $item.append(`
		<div style="height: 10px; border-top: 2px solid lightgray; margin-top: 24px; text-align: center; position: relative; clear: both;">
			<span style="position: relative; top: -.8em; background: white; display: inline-block; color: gray; ">
				&nbsp; ${item.text} &nbsp;
			</span>
		</div>
	`)
}

const bind = ($item, item) => {
  $item.on('dblclick', () => wiki.textEditor($item, item))
}

if (typeof window !== 'undefined') {
  window.plugins.pagefold = { emit, bind }
}
