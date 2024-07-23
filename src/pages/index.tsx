// pages/home.tsx
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import styles from '../style/home.module.css';
import { useRouter } from 'next/router'; // useRouter
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

const Editor = dynamic(() => import('../components/Editor'), { ssr: false });

const Home: React.FC = () => {
    const [editorData, setEditorData] = useState('');
    const router = useRouter(); // router

    const handleEditorChange = (event: Event, editor: any) => {
        const data = editor.getData();
        setEditorData(data);
    };

    // ฟังก์ชันปุ่ม
    const handleButtonClick = () => {
        router.push({
            pathname: '/output',
            query: { data: encodeURIComponent(editorData) },
        });
    };

    return (
        <div className={styles.home}>
            <h1>CKEditor</h1>
            <div className={styles['main-container']} >
                <Editor value={editorData} onChange={handleEditorChange} />
            </div>
            <div>
                <button className={styles.button} onClick={handleButtonClick}>
                    Save
                </button>
            </div>
        </div>
        
    );
};

export default Home;
