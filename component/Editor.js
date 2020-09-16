import React, { useState, useEffect } from 'react'
import { DraftailEditor, BLOCK_TYPE, INLINE_STYLE } from "draftail"

const initialData = {
  blocks: [
    {
      key: '16d0k',
      text: 'Ingrese text.',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [{ offset: 0, length: 23, style: 'BOLD' }],
      entityRanges: [],
      data: {},
    }
  ],
  entityMap: {},
}


const onSave = (content) => {
  console.log("saving", content)
  sessionStorage.setItem("draftail:content", JSON.stringify(content))
}

const Editor = () => {


  let showData = initialData
  let name = "content"

  useEffect(() => {
    console.log("useEffect")
    let initial = JSON.parse(sessionStorage.getItem(`draftail:${name}`));
    console.log("inicial", initial)

    if (initial != null) {
      console.log('initial cambiar valor', initial);
      showData = initialData;
    }
  }, [])

  return (
    <div>
      {
        JSON.stringify(showData)
      }
      <DraftailEditor
        rawContentState={showData || null}
        onSave={onSave}
        blockTypes={[
          { type: BLOCK_TYPE.HEADER_THREE },
          { type: BLOCK_TYPE.UNORDERED_LIST_ITEM },
        ]}
        inlineStyles={[{ type: INLINE_STYLE.BOLD }, { type: INLINE_STYLE.ITALIC }]}
      />
    </div>
  )
}

export default Editor
