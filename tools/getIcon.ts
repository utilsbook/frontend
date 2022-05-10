const iconName = 'SASS';

const svg = `<svg t="1652202923687" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7138" width="200" height="200"><path d="M512 64c247.3 0 447.8 200.5 447.8 447.8S759.3 959.6 512 959.6 64.2 759.1 64.2 511.8 264.7 64 512 64z m-89 597c6.5 24.1 5.8 46.6-0.9 66.9l-2.4 6.7c-0.9 2.3-1.9 4.5-2.9 6.6-5.2 10.8-12.2 20.9-20.7 30.2-26 28.3-62.4 39.1-78 30-16.8-9.8-8.4-49.8 21.8-81.7 32.5-34.3 79.1-56.3 79.1-56.3v-0.1l4-2.3z m369.8-405.3c-20.2-79.6-152.1-105.8-277-61.4-74.2 26.4-154.6 67.8-212.4 121.9-68.8 64.2-79.7 120.2-75.2 143.6 15.9 82.5 129 136.5 175.5 176.5v0.2c-13.7 6.7-114 57.1-137.5 109.2-25.2 54.9 3.9 94.1 22.9 99.1 58.8 16.3 119.2-13.4 151.7-61.5 31.3-47.1 28.6-107.5 15.1-137.2 18.5-5 40.3-7.3 68.3-3.9 78.4 9 94.1 58.2 90.7 78.4-3.4 20.1-19.5 31.9-25.2 35.2-5.6 3.4-7.3 4.5-6.8 6.8 0.6 3.4 3.4 3.4 7.8 2.8 6.2-1.1 40.9-16.8 42.6-54.9 1.7-48.1-44.3-101.8-125.9-100.8-33.6 0.6-54.9 3.4-70 9.6-1-1.6-2.4-2.9-3.9-3.9-50.4-54.3-143.9-92.4-139.9-164.6 1.1-26.3 10.6-95.7 179.1-179.6 138.3-68.9 248.6-49.8 267.6-7.8 27.4 59.9-58.8 171.3-202.7 187.5-54.9 6.2-83.4-15.1-90.7-22.9-7.8-8.4-8.9-9-11.7-7.2-4.5 2.2-1.7 9.5 0 14 4.5 11.2 21.8 30.8 52.1 40.9 26.3 8.4 90.7 13.4 167.9-16.8C742 425 809.7 331.5 790.1 253.2l2.7 2.5z" fill="#CF649A" p-id="7139"></path></svg>`;

console.log(`
const ${iconName}Svg = (props?: any) => (
  ${svg}
)

export const ${iconName}Icon = () => <Icon component={${iconName}Svg} />;
`);