import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
// import '../style/Editor.css'; 
import styles from '../style/Editor.module.css';

interface EditorProps {
    value: string;
    onChange: (event: any, data: string) => void;
}

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
    return (
        <div className={styles['editor-container']}>
            <div className={`editor-toolbar ${styles['editor-toolbar']}`}></div> 
            <CKEditor
                editor={DecoupledEditor}
                data={value}
                onChange={onChange}
                onReady={(editor) => {
                    if (editor.ui.view.toolbar.element) {
                        const toolbarContainer = document.querySelector(`.editor-toolbar`);
                        toolbarContainer?.appendChild(editor.ui.view.toolbar.element);
                    }
                }}
                config={{
                    toolbar: {
                        items: [
                            'undo',
                            'redo',
                            '|',
                            'showBlocks',
                            '|',
                            'heading',
                            '|',
                            'fontFamily',
                            'fontColor',
                            'fontBackgroundColor',
                            '|',
                            'bold',
                            'italic',
                            'underline',
                            '|',
                            'link',
                            'highlight',
                            '|',
                            'alignment',
                            '|',
                            'indent',
                            'outdent'
                        ],
                        shouldNotGroupWhenFull: true
                    },
                    placeholder: 'Type your content here...',
                }}
            />
        </div>
    );
};

export default Editor;
