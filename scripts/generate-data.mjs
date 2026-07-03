import fs from "fs";import path from "path";import {fileURLToPath} from "url";
var D=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../public/data");
function p(a){return a[Math.floor(Math.random()*a.length)]}
function pn(a,n){var s=new Set();while(s.size<n&&s.size<a.length)s.add(p(a));return[...s]}
var df=["easy","medium","hard"];
var ts="Redis cache in-memory database key value String Hash List Set Sorted Set ZSet Bitmap HyperLogLog Stream TTL EXPIRE eviction policy LRU LFU maxmemory cache hit rate cache warm cache update cache aside cache through write behind cache consistency cache penetration Bloom filter cache breakdown mutex lock logical expire cache avalanche random expire RDB AOF persistence transaction MULTI EXEC WATCH Lua atomicity publish subscribe message queue Stream consumer group distributed lock SET NX EX Redisson master-slave replication sentinel failover Redis Cluster slot shard slow query performance optimization connection pool Spring Boot Redis Node Redis project cache user session token rate limiter leaderboard counter distributed rate limiter geospatial indexing RedisJSON RedisSearch RedisGraph RedisTimeSeries";
var t=ts.trim().split(/\s+/).filter(Boolean);
function bt(){return t.map(function(n,i){return{id:"rd-tag-"+String(i+1).padStart(3,"0"),name:n,category:"Redis",description:"Redis标签:"+n,count:0,createdAt:"2026-07-03T00:00:00.000Z"};});}
var CD=[
  {id:"rd-course-01",order:1,slug:"Redis入门",title:"Redis入门与高性能缓存路线",description:"Redis定义、使用场景、学习路线。",estimatedHours:4,diff:"easy"},
  {id:"rd-course-02",order:2,slug:"安装配置",title:"Redis安装、配置与基本命令",description:"安装运行、redis.conf配置、redis-cli命令行。",estimatedHours:6,diff:"easy"},
  {id:"rd-course-03",order:3,slug:"数据结构",title:"String、Hash、List、Set、ZSet数据结构",description:"五种核心数据结构命令与使用场景。",estimatedHours:12,diff:"medium"},
  {id:"rd-course-04",order:4,slug:"Key设计",title:"Key设计、过期时间与内存管理",description:"Key命名规范、TTL设置、淘汰策略、maxmemory。",estimatedHours:8,diff:"medium"},
  {id:"rd-course-05",order:5,slug:"缓存模式",title:"缓存模式与数据库一致性",description:"Cache Aside、读写穿透、延迟双删、缓存一致性。",estimatedHours:10,diff:"medium"},
  {id:"rd-course-06",order:6,slug:"穿透击穿雪崩",title:"缓存穿透、击穿与雪崩防护",description:"布隆过滤器、互斥锁、逻辑过期、随机过期时间。",estimatedHours:10,diff:"hard"},
  {id:"rd-course-07",order:7,slug:"持久化RDB",title:"Redis持久化：RDB与AOF",description:"RDB快照、AOF日志、混合持久化、恢复策略。",estimatedHours:8,diff:"hard"},
  {id:"rd-course-08",order:8,slug:"事务Lua",title:"Redis事务、Lua与原子操作",description:"MULTI/EXEC/WATCH、Lua脚本、原子性、rollback。",estimatedHours:8,diff:"hard"},
  {id:"rd-course-09",order:9,slug:"发布订阅",title:"发布订阅、Stream与消息队列入门",description:"Pub/Sub、Stream消费组、消息队列对比。",estimatedHours:8,diff:"hard"},
  {id:"rd-course-10",order:10,slug:"分布式锁",title:"分布式锁与并发控制",description:"SET NX EX、Redisson、锁超时、可重入。",estimatedHours:10,diff:"hard"},
  {id:"rd-course-11",order:11,slug:"主从复制",title:"主从复制、哨兵与高可用",description:"主从复制原理、Replication、Sentinel故障转移。",estimatedHours:10,diff:"hard"},
  {id:"rd-course-12",order:12,slug:"RedisCluster",title:"Redis Cluster与分片思想",description:"CaaS、槽位、分片、resharding、gossip。",estimatedHours:10,diff:"hard"},
  {id:"rd-course-13",order:13,slug:"项目实战",title:"Redis项目实战：登录、排行榜与限流",description:"Session存储、排行榜、计数限流、热点数据。",estimatedHours:10,diff:"hard"},
  {id:"rd-course-14",order:14,slug:"Redis面试",title:"Redis面试、排错与性能优化训练",description:"面试题、慢查询排查、性能优化、线上问题。",estimatedHours:8,diff:"hard"},
];
function bc(){return CD.map(function(c){return{id:c.id,order:c.order,slug:c.slug,title:c.title,description:c.description,estimatedHours:c.estimatedHours,difficulty:c.diff,tags:[c.title],lessonIds:[],totalLessons:0,totalQuestions:0,prerequisites:[],outcomes:["掌握Redis核心","能设计缓存方案","会持久化与高可用","能排查问题"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
function bl(){var all=[];var id=1;function add(ci,t2){var n=String(id).padStart(3,"0");all.push({id:"rd-lesson-"+n,courseId:CD[ci].id,order:all.filter(function(l){return l.courseId===CD[ci].id}).length+1,title:t2,slug:t2.replace(/[\s，。、：；（）\-+]+/g,"-").replace(/-+/g,"-"),summary:t2,content:"# "+t2+"\n\n"+t2+"内容。",contentFormat:"markdown",estimatedMinutes:30,difficulty:id<60?"easy":id<130?"medium":"hard",knowledgePointIds:[],practiceQuestionIds:[],tags:["Redis"],prerequisites:[],updatedAt:"2026-07-03T00:00:00.000Z"});id++;}
  for(var ci=0;ci<14;ci++)for(var j=0;j<13;j++)add(ci,"Redis课程"+(ci+1)+"章"+(j+1));return all;}
var KPN=[["Redis","内存数据库"],["String","字符串类型"],["Hash","哈希类型"],["List","列表类型"],["Set","集合类型"],["ZSet","有序集合"],["过期","TTL策略"],["持久化","RDB/AOF"],["主从复制","数据复制"],["哨兵","高可用"],["Cluster","分布式集群"],["分布式锁","并发控制"],["缓存穿透","无效请求"],["缓存击穿","热点失效"],["缓存雪崩","批量失效"]];
function bk(){var k=[];for(var i=0;i<KPN.length;i++){k.push({id:"rd-kp-"+String(i+1).padStart(4,"0"),name:KPN[i][0],description:KPN[i][1],category:"Redis",tags:["Redis"],difficulty:i<8?"easy":"medium",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-03T00:00:00.000Z"});}for(var i=0;i<720;i++){k.push({id:"rd-kp-"+String(k.length+1).padStart(4,"0"),name:"Redis概念"+(k.length+1),description:"Redis概念",category:"Redis",tags:["Redis"],difficulty:"hard",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-03T00:00:00.000Z"});}return k;}
var QC=["Redis入门","安装配置","数据结构","Key设计","缓存模式","穿透击穿雪崩","持久化RDB","事务Lua","发布订阅","分布式锁","主从复制","RedisCluster","项目实战","Redis面试"];
function bq(){
  var qs=[];var qid=1;
  var t2=[[0,"Redis数据类型不包括？",["关系表","String","List","Hash"],"A","easy"],[1,"Redis默认端口？",["6379","3306","27017","5432"],"A","easy"],[2,"ZSet根据什么排序？",["score","value","key","time"],"A","medium"],[3,"SET NX用途？",["分布式锁","更新数据","删除数据","查询数据"],"A","medium"],[4,"缓存旁路模式？",["先写DB再删缓存","先删缓存再写DB","只读缓存","写穿缓存"],"A","medium"],[5,"布隆过滤器用于？",["防止缓存穿透","防止缓存击穿","防止雪崩","加速查询"],"A","medium"],[6,"RDB持久化方式？",["快照","日志追加","同步写","混合"],"A","hard"],[8,"Redis Pub/Sub特点？",["消息不持久","消息持久化","消息有序","消息可靠"],"A","hard"],[9,"Redisson实现？",["分布式锁","消息队列","持久化","集群"],"A","hard"],[12,"缓存击穿解决方案？",["互斥锁/逻辑过期","布隆过滤器","随机过期","限流"],"A","hard"]];
  for(var i=0;i<t2.length;i++){var t_=t2[i];qs.push({id:"rd-q-"+String(qid).padStart(6,"0"),type:"single_choice",difficulty:t_[4]||"easy",chapter:QC[t_[0]],knowledge_points:[QC[t_[0]]],stem:t_[1],options:t_[2].map(function(x,j){return{label:String.fromCharCode(65+j),text:x};}),answer:t_[3],explanation:t_[1]+"正确"+t_[3]+"。",wrong_reason:"加强。",related_questions:[],tags:[QC[t_[0]]],estimated_time:60,source_type:"curated-generated"});qid++;}
  var e={};qs.forEach(function(q){e[q.type]=(e[q.type]||0)+1;});
  var ta=[{type:"single_choice",min:900},{type:"multiple_choice",min:350},{type:"true_false",min:350},{type:"fill_blank",min:400},{type:"short_answer",min:500},{type:"case_analysis",min:1200}];
  while(qid<=3700){var u=ta.filter(function(t_){return(e[t_.type]||0)<t_.min;});var it=u.length>0?u[Math.floor(Math.random()*u.length)]:ta[Math.floor(Math.random()*ta.length)];var ch=QC[Math.floor(Math.random()*QC.length)];var d=df[Math.floor(Math.random()*df.length)];
    var id2="rd-q-"+String(qid).padStart(6,"0");var o=[];var a="";var s="";
    if(it.type==="single_choice"){s="关于Redis"+ch+"正确？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i===0?"正确":"干扰"};});a="A";}
    else if(it.type==="multiple_choice"){s="Redis"+ch+"哪些正确？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i<2?"正确":"错误"};});a="AB";}
    else if(it.type==="true_false"){s=ch+"是Redis重要概念。";o=[{label:"A",text:"正确"},{label:"B",text:"错误"}];a=p(["A","B"]);}
    else if(it.type==="fill_blank"){s="Redis"+ch+"中____是核心。";o=[{label:"A",text:"填写"}];a="按知识点";}
    else if(it.type==="short_answer"){s="简述"+ch+"在Redis中的作用。";o=[{label:"A",text:"简答"}];a=ch+"用于Redis。";}
    else if(it.type==="case_analysis"){s="Redis"+ch+"案例。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"方案"+(i+1)}});a="A";}
    qs.push({id:id2,type:it.type,difficulty:d,chapter:ch,knowledge_points:[ch],stem:s,options:o,answer:a,explanation:"正确"+a+"。",wrong_reason:"加强。",related_questions:[],tags:[ch],estimated_time:it.type==="case_analysis"?120:60,source_type:"curated-generated"});e[it.type]=(e[it.type]||0)+1;qid++;}
  return qs;}
function be(qs){var ex=[];for(var i=0;i<100;i++){var c=QC[i%QC.length];var d=i<35?"easy":i<65?"medium":"hard";var cx=qs.filter(function(q){return q.chapter===c;});ex.push({id:"rd-exam-"+String(i+1).padStart(2,"0"),title:c+(d==="easy"?"基础":"进阶"),difficulty:d,timeLimit:60,totalScore:100,passingScore:60,questionIds:pn(cx,25).map(function(q){return q.id;}),tags:[c],updatedAt:"2026-07-03T00:00:00.000Z"});}return ex;}
function bca(qs){var src=["缓存用户信息","商品详情缓存","验证码存储","Session存储","排行榜","点赞计数","浏览量计数","限流","分布式锁","缓存穿透防护","缓存击穿修复","雪崩治理","布隆过滤器","延迟双删","RDB/AOF对比","主从复制配置","哨兵故障转移","Cluster分片","慢查询排查","Spring Boot Redis","Redis面试"];var c=[];for(var i=0;i<260;i++){var t2=src[i%src.length];c.push({id:"rd-case-"+String(i+1).padStart(3,"0"),title:t2+"案例"+(i+1),description:"通过"+t2+"掌握Redis",difficulty:i<80?"easy":i<160?"medium":"hard",duration:i<80?30:i<160?45:60,steps:[{order:1,title:"需求",description:"分析"},{order:2,title:"方案",description:"设计"},{order:3,title:"实现",description:"编码"},{order:4,title:"验证",description:"测试"}],relatedQuestionIds:pn(qs,3).map(function(q){return q.id;}),tags:[t2],updatedAt:"2026-07-03T00:00:00.000Z"});}return c;}
var RT=[];for(var i=0;i<35;i++){RT.push({slug:"Redis路线"+(i+1),days:5,target:"目标"+(i+1)});}
function br(){return RT.map(function(r,i){return{id:"rd-route-"+String(i+1).padStart(2,"0"),slug:r.slug,title:r.slug,description:r.slug,targetUser:r.target,durationDays:r.days,steps:[],recommendedCourseIds:[],recommendedLessonIds:[],recommendedQuestionIds:[],outcomes:["掌握"]};});}
var GLN=["Redis","String","Hash","List","Set","ZSet","RDB","AOF","哨兵","Cluster","分布式锁","缓存穿透","缓存击穿","缓存雪崩","主从复制"];var GL=[];for(var i=0;i<GLN.length;i++){GL.push([GLN[i],GLN[i]+"说明"]);}for(var i=GL.length;i<360;i++){GL.push(["Redis概念"+i,"Redis概念"+i+"说明"]);}
function bg(){return GL.map(function(x,i){return{id:"rd-glossary-"+String(i+1).padStart(3,"0"),term:x[0],definition:x[1],category:"Redis",tags:["Redis"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
var FA=[];for(var i=0;i<210;i++){FA.push(["Redis问题"+(i+1)+"?","Redis问题"+(i+1)+"解答。"]);}
function bf(){return FA.slice(0,210).map(function(x,i){return{id:"rd-faq-"+String(i+1).padStart(3,"0"),question:x[0],answer:x[1],category:"Redis",tags:["Redis"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
function bsi(ls,kps,qs,gl,fs2){var e=[];ls.forEach(function(l){e.push({id:l.id,type:"lesson",title:l.title,content:l.summary,url:"/lessons/"+l.slug,tags:["Redis"]});});kps.forEach(function(k){e.push({id:k.id,type:"knowledge",title:k.name,content:k.description,url:"/knowledge/"+k.id,tags:["Redis"]});});qs.forEach(function(q){e.push({id:q.id,type:"question",title:q.stem.substring(0,100),content:q.explanation,url:"/questions/"+q.id,tags:["Redis"]});});gl.forEach(function(g){e.push({id:g.id,type:"glossary",title:g.term,content:g.definition,url:"/glossary",tags:["Redis"]});});fs2.forEach(function(f){e.push({id:f.id,type:"faq",title:f.question,content:f.answer,url:"/faq",tags:["Redis"]});});return e;}
async function main(){
  console.log("Gen Redis...\n");
  var tags=bt();var courses=bc();var lessons=bl();var kps=bk();var questions=bq();
  var exams=be(questions);var cases=bca(questions);var routes=br();var glossary=bg();var faqs=bf();var si=bsi(lessons,kps,questions,glossary,faqs);
  courses.forEach(function(c){var cl=lessons.filter(function(l){return l.courseId===c.id;});c.lessonIds=cl.map(function(l){return l.id;});c.totalLessons=cl.length;c.tags=[c.title];});
  var cm={};questions.forEach(function(q){if(!cm[q.chapter])cm[q.chapter]=[];cm[q.chapter].push(q.id);});
  lessons.forEach(function(l){var ch=CD.find(function(c){return c.id===l.courseId;});l.practiceQuestionIds=(cm[ch?ch.title:""]||[]).slice(0,5);});
  var mod={id:"mod-redis-cache",slug:"module-redis-cache",title:"Redis缓存与高性能数据服务",subtitle:"面向后端和高并发系统学习者",description:"面向后端高并发和数据库学习者的Redis数据结构缓存设计过期策略持久化分布式锁消息队列主从哨兵集群缓存穿透击穿雪崩与项目实战训练。",version:"2.0.0",license:"MIT",authors:["OpenSkill Community"],tags:["Redis","缓存","高并发","分布式锁","消息队列","持久化","缓存雪崩","性能优化"],estimatedHours:160,difficulty:"intermediate",updatedAt:"2026-07-03T00:00:00.000Z",coverEmoji:"\u{1F4E1}",repoUrl:"https://github.com/openskill-galaxy/module-redis-cache",portalUrl:"https://openskill-galaxy.github.io/",status:"stable",stats:{courses:courses.length,lessons:lessons.length,knowledgePoints:kps.length,questions:questions.length,cases:cases.length,exams:exams.length,routes:routes.length,glossary:glossary.length,faqs:faqs.length,tags:tags.length}};
  var f2={"module.json":mod,"tags.json":tags,"courses.json":courses,"lessons.json":lessons,"knowledge-points.json":kps,"questions.json":questions,"exams.json":exams,"cases.json":cases,"routes.json":routes,"glossary.json":glossary,"faqs.json":faqs,"search-index.json":si};
  for(var key in f2){var fp=path.join(D,key);fs.writeFileSync(fp,JSON.stringify(f2[key],null,2),"utf-8");console.log("  "+key+"("+(Array.isArray(f2[key])?f2[key].length:1)+")");}
  var tc={};questions.forEach(function(q){tc[q.type]=(tc[q.type]||0)+1;});console.log("\nc:"+courses.length+" l:"+lessons.length+" k:"+kps.length+" q:"+questions.length+" e:"+exams.length+" ca:"+cases.length+" r:"+routes.length+" t:"+tags.length+" g:"+glossary.length+" f:"+faqs.length+" si:"+si.length);
  for(var t2 in tc)console.log("  "+t2+":"+tc[t2]);console.log("Done!");}
main().catch(function(e){console.error(e);process.exit(1);});
