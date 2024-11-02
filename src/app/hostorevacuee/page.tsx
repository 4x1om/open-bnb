"use client"

import styles from './page.module.css';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

let width = screen.width;

export default function hostOrEvacuee() {

    
    return (
        <div>
            <h1 style={{marginLeft: width / 36.902 + 'em', marginTop: width / 116.385 + 'em', marginBottom: width / 378.25 + 'em'}}>
                Are you a host or evacuee?
            </h1>
            <Link href="/host" className={styles.mainButton} style={{marginLeft: width / 38.795 + 'em', marginRight: width / 532.236 + 'em'}}><button>I'm a host</button></Link>
            <Link href="/evacuee" className={styles.mainButton} style={{marginLeft: width / 704.333 +'em'}}><button>I'm an evacuee</button></Link>
        </div>
    );
}