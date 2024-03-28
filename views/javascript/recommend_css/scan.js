coco_names = [
  '-', 'Blouse_black-white', 'Blouse_deep', 'Blouse_pastel', 'Cardigan_black-white', 'Cardigan_deep', 'Cardigan_pastel', 
  'Cardigan_pastel', 'Cardigan_pattern', 'Cardigan_vivid', 'Denim-pants_black-white', 'Denim-pants_deep', 'Denim-pants_pastel', 
  'Denim-pants_pattern', 'Denim-pants_vivid', 'Hoodie_black-white', 'Hoodie_deep', 'Hoodie_pastel', 'Hoodie_vivid', 
  'Long-skirt_black-white', 'Long-skirt_deep', 'Long-sleeves_black-white', 'Long-sleeves_deep', 'Long-sleeves_pastel', 
  'Long-sleeves_pattern', 'Long-sleeves_vivid', 'Midi-skirts_black-white', 'Midi-skirts_deep', 'Midi-skirts_pastel',
   'Midi-skirts_vivid', 'Mini-skirts_deep', 'One-piece_black-white', 'One-piece_deep', 'One-piece_pastel', 'Pk-shirts_black-white', 
   'Pk-shirts_deep', 'Pk-shirts_pastel', 'Pk-shirts_pattern', 'Pk-shirts_vivid', 'Shirts-pastel', 'Shirts_black-white', 
   'Shirts_deep', 'Shirts_pastel', 'Shirts_pattern', 'Shirts_vivid', 'Short-skirt_black-white', 'Short-skirt_deep', 
   'Short-skirt_pattern', 'Short-sleeves_black-white', 'Short-sleeves_deep', 'Short-sleeves_pastel', 'Short-sleeves_pattern', 
   'Short-sleeves_vivid', 'Shorts_black-white', 'Shorts_deep', 'Shorts_pastel', 'Shorts_pattern', 'Shorts_vivid',
    'Slacks_black-white', 'Slacks_deep', 'Slacks_pastel', 'Slacks_pattern', 'Slacks_vivid', 'Sleeveless_black-white', 
    'Sleeveless_deep', 'Sleeveless_pastel', 'Sleeveless_pattern', 'Slim-pants_black-white', 'Slim-pants_deep', 
    'Slim-pants_pastel', 'Slim-pants_pattern', 'Slim-pants_vivid', 'Straight-pants_black-white', 'Straight-pants_deep', 
    'Straight-pants_pastel', 'Straight-pants_vivid', 'Sweatpants_black-white', 'Sweatshirt_black-white', 'Sweatshirt_deep',
     'Sweatshirt_pastel', 'Sweatshirt_pattern', 'Sweatshirt_vivid', 'T-shirts_black-white', 'Training-pants_black-white', 
     'Training-pants_deep', 'Training-pants_pastel', 'Training-pants_pattern', 'Training-pants_vivid']


colors = [
  '#D8A7B3', '#5E9C6F', '#F2C94C', '#B5A4E3', '#7F8C8D', '#C0392B', '#6C7A89', '#F7DC6F', '#F0E68C', '#F5B041',
'#2E4053', '#D35400', '#8E44AD', '#27AE60', '#A569BD', '#F4D03F', '#138D75', '#D68910', '#5499C7', '#58D68D',
'#5D6D7E', '#A6ACAF', '#1ABC9C', '#E74C3C', '#F39C12', '#3498DB', '#E67E22', '#8D6E63', '#2ECC71', '#D2B4DE',
'#154360', '#2980B9', '#C0392B', '#A3E4D7', '#9B59B6', '#45B39D', '#F0E68C', '#34495E', '#6E2C00', '#1A5276',
'#641E16', '#D5DBDB', '#239B56', '#F1948A', '#7FB3D5', '#C39BD3', '#85C1E9', '#EAF2F8', '#F7DC6F', '#F5CBA7',
'#F8C471', '#BB8FCE', '#7D6608', '#1B4F72', '#641E16', '#F0E68C', '#922B21', '#7D3C98', '#16A085', '#F1948A',
'#F39C12', '#85C1E9', '#F7DC6F', '#E74C3C', '#F5B041', '#58D68D', '#7FB3D5', '#D35400', '#8E44AD', '#C0392B',
'#D68910', '#3498DB', '#F0E68C', '#E67E22', '#F1948A', '#F39C12', '#85C1E9', '#F7DC6F', '#E74C3C', '#F5B041',
'#FF5733', '#33FF57', '#5733FF', '#FF3357', '#33FF33', '#3357FF', '#FF5733', '#FF3333', 
]

const detect_top = [  '-',   'Blouse_black-white',   'Blouse_deep',   'Blouse_pastel',   'Cardigan_black-white',   'Cardigan_deep',   'Cardigan_pastel',   'Cardigan_pastel',   'Cardigan_pattern',   'Cardigan_vivid',   'Hoodie_black-white',   'Hoodie_deep',   'Hoodie_pastel',   'Hoodie_vivid',   'Long-sleeves_black-white',   'Long-sleeves_deep',   'Long-sleeves_pastel',   'Long-sleeves_pattern',   'Long-sleeves_vivid',   'One-piece_black-white',   'One-piece_deep',   'One-piece_pastel',   'Pk-shirts_black-white',   'Pk-shirts_deep',   'Pk-shirts_pastel',   'Pk-shirts_pattern',   'Pk-shirts_vivid',   'Shirts-pastel',   'Shirts_black-white',   'Shirts_deep',   'Shirts_pastel',   'Shirts_pattern',   'Shirts_vivid',   'Short-sleeves_black-white',   'Short-sleeves_deep',   'Short-sleeves_pastel',   'Short-sleeves_pattern',   'Short-sleeves_vivid',   'Sleeveless_black-white',   'Sleeveless_deep',   'Sleeveless_pastel',   'Sleeveless_pattern',   'Sweatshirt_black-white',   'Sweatshirt_deep',   'Sweatshirt_pastel',   'Sweatshirt_pattern',   'Sweatshirt_vivid',   'T-shirts_black-white']


const detect_bottom = [  'Denim-pants_black-white',   'Denim-pants_deep',   'Denim-pants_pastel',   'Denim-pants_pattern',   'Denim-pants_vivid',   'Long-skirt_black-white',   'Long-skirt_deep',   'Midi-skirts_black-white',   'Midi-skirts_deep',   'Midi-skirts_pastel',   'Midi-skirts_vivid',   'Mini-skirts_deep',   'Short-skirt_black-white',   'Short-skirt_deep',   'Short-skirt_pattern',   'Shorts_black-white',   'Shorts_deep',   'Shorts_pastel',   'Shorts_pattern',   'Shorts_vivid',   'Slacks_black-white',   'Slacks_deep',   'Slacks_pastel',   'Slacks_pattern',   'Slacks_vivid',   'Slim-pants_black-white',   'Slim-pants_deep',   'Slim-pants_pastel',   'Slim-pants_pattern',   'Slim-pants_vivid',   'Straight-pants_black-white',   'Straight-pants_deep',   'Straight-pants_pastel',   'Straight-pants_vivid',   'Sweatpants_black-white',   'Training-pants_black-white',   'Training-pants_deep',   'Training-pants_pastel',   'Training-pants_pattern',   'Training-pants_vivid']


function isiOS() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function isAndroid() {
  return /Android/i.test(navigator.userAgent);
}

function isMobile() {
  return isAndroid() || isiOS();
}

async function captureImage() {
  const canvas = document.getElementById('canvas-wrapper');
  const image = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = image;
  link.download = 'outfit.png';

  link.click();
}

async function runObjectDetection() {
  let detect_res = null;
  let [modelWidth, modelHeight] = detector.inputs[0].shape.slice(1, 3);
  const input = tf.tidy(() => {
    return tf.image.resizeBilinear(tf.browser.fromPixels(camera.video), [modelWidth, modelHeight])
      .div(255.0).expandDims(0);
  });

  // Detector can be null if initialization failed (for example when loading
  // from a URL that does not exist).
  if (detector != null) {
    // Detectors can throw errors, for example when using custom URLs that
    // contain a model that doesn't provide the expected output.
    try {
      detect_res = await detector.executeAsync(input);
    } catch (error) {
      detector.dispose();
      detector = null;
      alert(error);
    }
  }

  camera.drawCtx();
  camera.drawResult(detect_res);

  tf.dispose(input);
}

class Camera {
  constructor() {
    this.video = document.getElementById('video');
    this.canvas = document.getElementById('output');
    this.ctx = this.canvas.getContext('2d');

    this.tex = document.getElementById('text');
    this.tx = this.tex.getContext('2d');



  }

  /**
   * Initiate a Camera instance and wait for the camera stream to be ready.
   */
  static async setupCamera() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error(
        'Browser API navigator.mediaDevices.getUserMedia not available');
    }

    const $size = { width: 700, height: 1600 };
    const $m_size = { width: 360, height: 270 };
    const videoConfig = {
      'audio': false,
      'video': {
        facingMode: 'user',
        // Only setting the video to a specified size for large screen, on
        // // mobile devices accept the default size.
        width: isMobile() ? $m_size.width : $size.width,
        height: isMobile() ? $m_size.height : $size.height,
      }
    };

    const stream = await navigator.mediaDevices.getUserMedia(videoConfig);

    const camera = new Camera();
    camera.video.srcObject = stream;

    await new Promise((resolve) => {
      camera.video.onloadedmetadata = () => {
        resolve(video);
      };
    });

    camera.video.play();

    const videoWidth = camera.video.videoWidth;
    const videoHeight = camera.video.videoHeight;
    // Must set below two lines, otherwise video element doesn't show.
    camera.video.width = videoWidth;
    camera.video.height = videoHeight;

    camera.canvas.width = videoWidth;
    camera.canvas.height = videoHeight;
    camera.tex.width = videoWidth;
    camera.tex.height = videoHeight;
    const canvasContainer = document.querySelector('.canvas-wrapper');
    canvasContainer.style = 'width: 100vw; height: 75vh;';

    // Because the image from camera is mirrored, need to flip horizontally.
    camera.ctx.translate(camera.video.videoWidth, 0);
    camera.ctx.scale(-1, 1);
    return camera;
  }

  drawCtx() {
    this.ctx.drawImage(
      this.video, 0, 0, this.video.videoWidth, this.video.videoHeight);

    this.tx.clearRect(0, 0, this.video.videoWidth, this.video.videoHeight);
  }

  clearCtx() {
    this.ctx.clearRect(0, 0, this.video.videoWidth, this.video.videoHeight);
  }

  drawResult(res) {
    const font = "24px sans-serif";
    this.ctx.font = font;
    this.ctx.textBaseline = "top";
    this.tx.font = font;
    this.tx.textBaseline = "top";

    const [boxes, scores, classes, valid_detections] = res;
    const boxes_data = boxes.dataSync();
    const scores_data = scores.dataSync();
    const classes_data = classes.dataSync();
    const valid_detections_data = valid_detections.dataSync()[0];

    tf.dispose(res);

    var i;
    for (i = 0; i < valid_detections_data; ++i) {
      let [x1, y1, x2, y2] = boxes_data.slice(i * 4, (i + 1) * 4);
      x1 *= this.canvas.width;
      x2 *= this.canvas.width;
      y1 *= this.canvas.height;
      y2 *= this.canvas.height;
      const width = x2 - x1;
      const height = y2 - y1;
      const klass = coco_names[classes_data[i]];
      const score = scores_data[i].toFixed(2);

      // Get the color for the current class.
      const color = colors[classes_data[i]];

      // Draw the bounding box.
      this.ctx.strokeStyle = color;
      this.ctx.lineWidth = 4;
      this.ctx.strokeRect(x1, y1, width, height);

      // Draw the label background.
      this.ctx.fillStyle = color;

      // Draw the label background.
      this.tx.fillStyle = '#000000';
      const textWidth = this.tx.measureText(klass + ":" + score).width;
      const textHeight = parseInt(font, 10); // base 10
      this.tx.fillRect(this.video.width - x2, y1, textWidth + 5, textHeight + 5);


    }
    for (i = 0; i < valid_detections_data; ++i) {
      let [x1, y1, x2, y2] = boxes_data.slice(i * 4, (i + 1) * 4);
      x1 *= this.canvas.width;
      y1 *= this.canvas.height;
      x2 *= this.canvas.width;
      y2 *= this.canvas.height;
      const klass = coco_names[classes_data[i]];
      const score = scores_data[i].toFixed(2);
      const textWidth = this.tx.measureText(klass).width;
      // Draw the text last to ensure it's on top.
      this.tx.fillStyle = "#ffffff";
      this.tx.fillText(klass + ":" + score, this.video.width - x2, y1);

      const color = colors[classes_data[i]];

      //text 띄우기
      if (detect_top.includes(klass)) {
        document.getElementById('text2').style.color = color;
        document.getElementById('text2').innerText = klass + ":" + score;
      }
      if (detect_bottom.includes(klass)) {
        document.getElementById('text3').style.color = color;
        document.getElementById('text3').innerText = klass + ":" + score;
      }
    }

  }
}

let detector, camera, stats;
let startInferenceTime, numInferences = 0;
let inferenceTimeSum = 0, lastPanelUpdate = 0;
let rafId;

const yolov5n_weight = "https://raw.githubusercontent.com/jiangbow5808/yolov5/main/model.json"

async function createDetector() {
  return tf.loadGraphModel(yolov5n_weight);
}

async function renderResult() {
  if (camera.video.readyState < 2) {
    await new Promise((resolve) => {
      camera.video.onloadeddata = () => {
        resolve(video);
      };
    });
  }

  let detect_res = null;
  //const webcam = await tf.data.webcam(camera.video, { resizeWidth: 640, resizeHeight: 640 });
  //const img = await webcam.capture();
  let [modelWidth, modelHeight] = detector.inputs[0].shape.slice(1, 3);
  const input = tf.tidy(() => {
    return tf.image.resizeBilinear(tf.browser.fromPixels(camera.video), [modelWidth, modelHeight])
      .div(255.0).expandDims(0);
  });
  // Detector can be null if initialization failed (for example when loading
  // from a URL that does not exist).
  if (detector != null) {

    // Detectors can throw errors, for example when using custom URLs that
    // contain a model that doesn't provide the expected output.
    try {
      detect_res = await detector.executeAsync(
        input,
      );
    } catch (error) {
      detector.dispose();
      detector = null;
      alert(error);
    }
  }
  camera.drawCtx();
  camera.drawResult(detect_res);
  tf.dispose(input);

}

async function renderPrediction() {
  await renderResult();

  rafId = requestAnimationFrame(renderPrediction);
};

async function app() {
  camera = await Camera.setupCamera();
  detector = await createDetector();

  // Capture image after 5 seconds
  // setTimeout(captureImage, 7000);

  renderPrediction();

  // Run object detection
  await runObjectDetection();
}

app();
