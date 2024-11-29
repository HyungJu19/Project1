import React from 'react'
import Navbar from '../components/Navbar'

import Tabs1 from '../components/Tabs1'
import BasicFileUploadButton from '../components/UploadButton/BasicFileUploadButton';
import IconFileUploadButton from '../components/UploadButton/IconFileUploadButton';
import RoundedFileUploadButton from '../components/UploadButton/RoundedFileUploadButton';
import TransparentFileUploadButton from '../components/UploadButton/TransparentFileUploadButton';
import AnimatedFileUploadButton from '../components/UploadButton/AnimatedFileUploadButton';
import MultipleFileUploadButton from '../components/UploadButton/MultipleFileUploadButton';
import FileUploadWithPreview from '../components/UploadButton/FileUploadWithPreview';
import CardStyleUploadButton from '../components/UploadButton/CardStyleUploadButton';
import ImageUploadButton from '../components/UploadButton/ImageUploadButton';
import CircularUploadButton from '../components/UploadButton/CircularUploadButton';
import TextAndFileUploadButton from '../components/UploadButton/TextAndFileUploadButton';
import GradientUploadButton from '../components/UploadButton/GradientUploadButton';
import SmallIconButton from '../components/UploadButton/SmallIconButton';

function LoadingButton() {
    return <>
    <Navbar />

 
    <Tabs1 />

    <p>BasicFileUploadButton</p>
    <BasicFileUploadButton />
    <p>IconFileUploadButton</p>
    <IconFileUploadButton />
    <p>RoundedFileUploadButton</p>
    <RoundedFileUploadButton />
    <p>TransparentFileUploadButton</p>
    <TransparentFileUploadButton />
    <p>AnimatedFileUploadButton</p>
    <AnimatedFileUploadButton />
    <p>MultipleFileUploadButton</p>
    <MultipleFileUploadButton />
    <p>FileUploadWithPreview</p>
    <FileUploadWithPreview />
    <p>CardStyleUploadButton</p>
    <CardStyleUploadButton />
    <p>ImageUploadButton</p>
    <ImageUploadButton />
    <p>CircularUploadButton</p>
    <CircularUploadButton />
    <p>TextAndFileUploadButton</p>
    <TextAndFileUploadButton />
    <p>GradientUploadButton</p>
    <GradientUploadButton />
    <p>SmallIconButton</p>
    <SmallIconButton />
    </>

}

export default LoadingButton;
