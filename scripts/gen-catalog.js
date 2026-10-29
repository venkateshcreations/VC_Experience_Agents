const fs=require('fs');
const root='C:/Users/venka/Desktop/VC_Experience_Agents';
const list=JSON.parse(fs.readFileSync(root+'/_skills_list.json','utf8'));
const skills=list.map(s=>{
  const content=fs.readFileSync(root+'/skills/'+s.dir+'/'+s.name+'/SKILL.md','utf8');
  const m=content.match(/description: "(.*)"/);
  return {id:s.name,name:s.name,group:s.group,path:'skills/'+s.dir+'/'+s.name+'/SKILL.md',description:m?m[1]:'',license:'MIT',source:'original'};
});
fs.writeFileSync(root+'/resources/skill-catalog.json', JSON.stringify({version:'0.1.0',skills},null,2));
console.log(skills.length);
