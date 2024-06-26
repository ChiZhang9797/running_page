// const
const MAPBOX_TOKEN =
  'pk.eyJ1IjoiY2hpY2hhbmciLCJhIjoiY2w2djZrb3E0MjVnNzNrbGV0YWwyNXljYyJ9.D0YhVBrAPol_D9ccvZ6F3w';
const MUNICIPALITY_CITIES_ARR = [
  '北京市',
  '上海市',
  '天津市',
  '重庆市',
  '香港特别行政区',
  '澳门特别行政区',
];

// styling: set to `true` if you want dash-line route
const USE_DASH_LINE = true;
// styling: route line opacity: [0, 1]
const LINE_OPACITY = 0.4;

// IF you outside China please make sure IS_CHINESE = false
const IS_CHINESE = false;
const USE_ANIMATION_FOR_GRID = false;
const CHINESE_INFO_MESSAGE = (yearLength, year) => {
  // const yearStr = year === 'Total' ? '所有' : ` ${year} `;
  // return `我用 App 记录自己跑步 ${yearLength} 年了，下面列表展示的是${yearStr}的数据`;
}
const ENGLISH_INFO_MESSAGE = (yearLength, year) => ``;

// not support English for now
const CHINESE_LOCATION_INFO_MESSAGE_FIRST = '';
const CHINESE_LOCATION_INFO_MESSAGE_SECOND = '';

const INFO_MESSAGE = IS_CHINESE ? CHINESE_INFO_MESSAGE : ENGLISH_INFO_MESSAGE;
const FULL_MARATHON_RUN_TITLE = IS_CHINESE ? '全程马拉松' : 'Full Marathon';
const HALF_MARATHON_RUN_TITLE = IS_CHINESE ? '半程马拉松' : 'Half Marathon';
const MORNING_RUN_TITLE = IS_CHINESE ? '清晨跑步' : 'Morning Run';
const MIDDAY_RUN_TITLE = IS_CHINESE ? '午间跑步' : 'Lunch Run';
const AFTERNOON_RUN_TITLE = IS_CHINESE ? '午后跑步' : 'Afternoon Run';
const EVENING_RUN_TITLE = IS_CHINESE ? '傍晚跑步' : 'Evening Run';
const NIGHT_RUN_TITLE = IS_CHINESE ? '夜晚跑步' : 'Night Run';

const RUN_TITLES = {
  FULL_MARATHON_RUN_TITLE,
  HALF_MARATHON_RUN_TITLE,
  MORNING_RUN_TITLE,
  MIDDAY_RUN_TITLE,
  AFTERNOON_RUN_TITLE,
  EVENING_RUN_TITLE,
  NIGHT_RUN_TITLE,
};

const RIDE_TITLES = {
  MORNING_RIDE_TITLE: 'Morning Ride',
  MIDDAY_RIDE_TITLE: 'Lunch Ride',
  AFTERNOON_RIDE_TITLE: 'Afternoon Ride',
  EVENING_RIDE_TITLE: 'Evening Ride',
  NIGHT_RIDE_TITLE: 'Night Ride',
};

export {
  CHINESE_LOCATION_INFO_MESSAGE_FIRST,
  CHINESE_LOCATION_INFO_MESSAGE_SECOND,
  MAPBOX_TOKEN,
  MUNICIPALITY_CITIES_ARR,
  IS_CHINESE,
  INFO_MESSAGE,
  RUN_TITLES,
  RIDE_TITLES,
  USE_ANIMATION_FOR_GRID,
  USE_DASH_LINE,
  LINE_OPACITY,
};

const run = 'rgb(160,0,30)'; // if you want change the main color change here src/styles/variables.scss
const cycle = 'rgb(0,30,230)'; // if you want change the main color change here src/styles/variables.scss

// If your map has an offset please change this line
// issues #92 and #198
export const NEED_FIX_MAP = false;
export const MAIN_COLOR = run;
export const SUB_COLOR = cycle;
export const PROVINCE_FILL_COLOR = '#47b8e0';
