// pages/output.tsx
import React from 'react';
import { useRouter } from 'next/router';
import styles from '../style/output.module.css'; // นำเข้า CSS Module

const Output: React.FC = () => {
    const router = useRouter();
    const { data } = router.query;

    // ฟังก์ชันเพื่อกลับไปหน้าแรก
    const handleGoHome = () => {
        router.push('/');
    };

    return (
        <div className={styles.container}>
            <h1>Output Page</h1>
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: decodeURIComponent(data as string) }} />
            <button className={styles.button} onClick={handleGoHome}>
                Go Back to Home
            </button>
        </div>
    );
};

export default Output;
