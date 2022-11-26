import './index.css';
import { test } from '../scripts/utils/constants';
import photo from '../images/photo.jpg';
// eslint-disable-next-line import/extensions
import '../partJS/header.js';

// eslint-disable-next-line no-undef
const testPhoto = document.querySelector('.test_img');
testPhoto.src = photo;
testPhoto.alt = test;
