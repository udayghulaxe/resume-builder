import React from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
class ImageResizeCrop extends React.Component {
    state = {
        src: null,
        crop: {
            unit: '%',
            width: 50,
            height: 50,
            aspect: 16 / 9,
        },
    };
    onFileChange = e => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () => this.setState({ src: reader.result }));
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    // If you setState the crop in here you should return false.
    onImageLoaded = image => {
        console.log('image', image);
        this.imageRef = image.target;
    };
    onCropComplete = crop => {
        this.makeClientCrop(crop);
    };
    onCropChange = (crop, percentCrop) => {
        // You could also use percentCrop:
        this.setState({ crop: percentCrop });
        this.setState({ crop });
    };
    async makeClientCrop(crop) {
        console.log('coming here', crop);
        console.log('ref', this.imageRef);
        if (this.imageRef && crop.width && crop.height) {
            const croppedImageUrl = await this.getCroppedImg(this.imageRef, crop, 'newFile.jpeg');
            this.setState({ croppedImageUrl });
        }
    }
    getCroppedImg(image, crop, fileName) {
        const canvas = document.createElement('canvas');
        const pixelRatio = window.devicePixelRatio;
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        const ctx = canvas.getContext('2d');
        canvas.width = crop.width * pixelRatio * scaleX;
        canvas.height = crop.height * pixelRatio * scaleY;
        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width * scaleX,
            crop.height * scaleY
        );
        return canvas.toDataURL('image/jpeg');
    }
    render() {
        const { crop, croppedImageUrl, src } = this.state;
        return (
            <div className='App'>
                <div>
                    <input type='file' accept='image/*' onChange={this.onFileChange} />
                </div>
                {src && (
                    <ReactCrop crop={crop} ruleOfThirds onComplete={this.onCropComplete} onChange={this.onCropChange}>
                        <img src={src} onLoad={this.onImageLoaded} alt='' width={'100%'} height={'100%'} />
                    </ReactCrop>
                )}
                {croppedImageUrl && (
                    <img alt='Crop' style={{ width: '200px', height: '200px' }} src={croppedImageUrl} />
                )}
            </div>
        );
    }
}
export default ImageResizeCrop;
