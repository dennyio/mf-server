import * as express from 'express';
import { Application } from 'express';
import serverless from 'serverless-http';
import { getAllCourses, getCourseById } from './get-courses.route';
import { searchLessons } from './search-lessons.route';
import { saveCourse } from './save-course.route';
import { loginUser } from './login.route';

const bodyParser = require('body-parser');

const app: Application = express();
const router = express.Router();

app.use(bodyParser.json());

const cors = require('cors');

app.use(cors({ origin: true }));

router.get('/courses', getAllCourses);
router.get('/courses/:id', getCourseById);
router.get('/lessons', searchLessons);
router.get('/courses/:id', saveCourse);
router.get('/login', loginUser);

//app.use('/.netlify/functions/api', router);
app.use('/api', router);

export const handler = serverless(app);
