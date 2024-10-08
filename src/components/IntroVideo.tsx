// src/components/IntroVideo.tsx

const IntroVideo = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <video
        src="src/assets/images/vid3 copy.mp4"
        controls
        autoPlay
        muted
        loop
        style={{ width: '100%', height: 'auto' }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default IntroVideo;
