import React, {useState} from 'react'
import {Editor} from 'react-draft-wysiwyg'
import {EditorState} from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import {ContentState} from 'draft-js'
import styles from './TextEditor.module.scss'
import classNames from 'classnames/bind'
import { textEditorConfig } from './textEditorConfig'
const cnb = classNames.bind(styles)

interface Props {}
const TextEditor: React.FC<Props> = () => {
	const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty())
	return (
		<>
			<Editor
				editorState={editorState}
				toolbarClassName={cnb('toolbarClassName')}
				wrapperClassName={cnb('wrapperClassName')}
				editorClassName={cnb('editorClassName')}
				onEditorStateChange={setEditorState}
				toolbar={textEditorConfig}
			/>
		</>
	)
}
export default TextEditor
