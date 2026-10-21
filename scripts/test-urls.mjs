import http from 'http';

const urls = [
  '/',
  '/business',
  '/business/ai-automation',
  '/business/ai-chatbots',
  '/business/web-development',
  '/business/seo',
  '/learn-ai',
  '/learn-ai/ai-ml',
  '/learn-ai/full-stack',
  '/learn-ai/robotics',
  '/learn-ai/digital-marketing',
  '/images/brand/creatikai-logo.png',
  '/images/hero/hero-ai-automation.png',
  '/images/services/service-ai-automation.png',
  '/images/services/service-ai-chatbots.png',
  '/images/services/service-web-development.png',
  '/images/services/service-seo.png',
  '/images/courses/course-ai-ml.png',
  '/images/courses/course-full-stack.png',
  '/images/courses/course-robotics.png',
  '/images/courses/course-digital-marketing.svg',
  '/images/lab/jaipur-tech-lab.svg'
];

async function run() {
  for (const path of urls) {
    await new Promise((resolve) => {
      http.get('http://localhost:3000' + path, (res) => {
        console.log(`[${res.statusCode}] ${path} (${res.headers['content-type']})`);
        resolve();
      }).on('error', (err) => {
        console.error(`[FAIL] ${path}: ${err.message}`);
        resolve();
      });
    });
  }
}

run();
