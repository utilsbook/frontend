const iconName = 'VsCode';

let svg = `<svg t="1652288033275" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7108" width="200" height="200"><path d="M746.222933 102.239573l-359.799466 330.820267L185.347413 281.4976 102.2464 329.864533l198.20544 182.132054-198.20544 182.132053 83.101013 48.510293 201.076054-151.558826 359.799466 330.676906 175.527254-85.251413V187.4944z m0 217.57952v384.341334l-255.040853-192.177494z" fill="#2196F3" p-id="7109"></path></svg>`;

svg = svg.replace(/t="\d+" class="icon" /, '');

svg = svg.replace(/version="1.1" xmlns="http:\/\/www.w3.org\/2000\/svg"/, '');

svg = svg.replace(/>/, ' {...props} >');

svg = svg.replace(/p-id="\d+"/g, '');

console.log(`
const ${iconName}Svg = (props?: any) => (
  ${svg}
)

export const ${iconName}Icon = () => <Icon component={${iconName}Svg} />;
`);
