(this["webpackJsonprcv-webapp"]=this["webpackJsonprcv-webapp"]||[]).push([[0],{143:function(e,a,t){e.exports={primary:"#c08c33","maj-color":"#4b9460","min-color":"#4b3f72","primary-emph":"#dcb97d"}},217:function(e,a,t){e.exports=t(350)},222:function(e,a,t){e.exports={primary:"#c08c33","maj-color":"#4b9460","min-color":"#4b3f72","primary-emph":"#dcb97d"}},350:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(61),l=t.n(i),o=(t(222),t(107)),c=t(17),s=t(367),d=t(370),m=t(22),u=t(18),p=t(365),h=t(360),f=t(190),b=t(374),v=t(358),g=t(359);var y=function(e){var a=e.onClick;return r.a.createElement(v.a,{onClick:a,variant:"light",className:"btn mr-0 ml-1 mt-2 d-flex justify-content-center align-items-center"},r.a.createElement(g.a,{size:18,className:"mr-1"}),"Reset")};var E=function(e){e.dataid;var a=e.fullWidth,t=e.handleChange,n=e.helperText,i=e.label,l=e.max,o=(e.maxVariable,e.min),c=e.padding,s=void 0===c||c,d=e.step,m=void 0===d?1:d,u=e.value,p=a?" col-12 ":" col-sm-6 ",h=s?" pr-2 pl-2 ":"p-0";return r.a.createElement("div",{className:"".concat(h," ").concat(p)},r.a.createElement("label",{className:"input-label"},i),r.a.createElement("input",{type:"number",onChange:function(e){return t(e.target.value)},value:u,step:m,min:o,max:l}),r.a.createElement("span",{className:"d-block input-helper-text"},n))};t(143);var j=function(e){var a=e.dataid,t=e.fullWidth,n=e.handleChange,i=(e.id,e.label),l=e.options,o=e.padding,c=void 0===o||o,s=(e.type,e.value),d=t?" col-12 ":" col-sm-6 ",m=c?" pr-2 pl-2 ":"p-0";return r.a.createElement("div",{className:"".concat(m," ").concat(d)},r.a.createElement("div",{className:"input-label pb-1"},i),l.map((function(e){return r.a.createElement("div",{key:e.id,className:"pb-1"},r.a.createElement("input",{type:"radio",id:e.id,name:a,onChange:function(e){return n(e.target.value)},value:e.value,checked:e.value===parseInt(s),className:"d-inline"}),r.a.createElement("label",{htmlFor:e.id,className:"radio-option-text"},e.label))})))},x=t(369);var k=function(e){var a=e.dataid,t=e.fullWidth,n=e.handleChange,i=(e.id,e.label),l=e.options,o=e.padding,c=void 0===o||o,s=e.value,d=t?" col-12 ":" col-sm-6 ",m=c?" pr-2 pl-2 ":"p-0";return r.a.createElement("div",{className:"".concat(m," ").concat(d)},r.a.createElement("div",{className:"input-label pb-1"},i),l.map((function(e){return r.a.createElement("div",{key:e.id,className:"pb-1"},r.a.createElement(x.a.Check,{custom:!0,type:"checkbox",id:e.id,name:a,onChange:function(e){return n(e.target.value)},value:e.value,checked:s.includes(e.value),className:"d-inline"}),r.a.createElement("label",{htmlFor:e.id,className:"checkbox-option-text"},e.label))})))},M=t(70),C=t(38),w=t.n(C);function N(e){var a=e.minColorFirst,t=e.value,n=e.min,i=e.max,l=e.step,o=e.onChange,c=e.labelFormat;return r.a.createElement(M.Range,{onChange:function(e){return o(e[0])},values:[t],min:n,max:i,step:l,renderTrack:function(e){var l=e.props,o=e.children;return r.a.createElement("div",Object.assign({},l,{className:"slider-track",style:Object(m.a)(Object(m.a)({},l.style),{},{background:Object(M.getTrackBackground)({values:[t],colors:a?[w.a["min-color"],w.a["maj-color"]]:[w.a["maj-color"],w.a["min-color"]],min:n,max:i})})}),o)},renderThumb:function(e){var a=e.props,t=e.isDragged;return r.a.createElement("div",Object.assign({},a,{className:"slider-thumb"}),t&&r.a.createElement("div",{className:"slider-tooltip"},c()))}})}var S=function(e){e.className;var a=e.minColorFirst,t=e.fullWidth,n=e.handleChange,i=(e.id,e.label),l=e.leftLabel,o=e.rightLabel,c=e.max,s=e.min,d=e.padding,m=void 0===d||d,u=e.step,p=void 0===u?1:u,h=e.value,f=t?" col-12 ":" col-sm-6 ",b=m?" pr-2 pl-2 ":"p-0";return r.a.createElement("div",{className:"".concat(b," ").concat(f)},r.a.createElement("label",{className:"input-label w-75"},i),r.a.createElement("div",{className:"d-flex align-items-center justify-content-between"},r.a.createElement("input",{className:"input-value",onChange:function(e){return n(e.target.value)},type:"number",value:h,min:s,max:c,step:p}),r.a.createElement("span",{className:"pl-3 pr-3 w-100"},r.a.createElement(N,{minColorFirst:a,value:Number(h),min:s,max:c,step:p,labelFormat:function(){return"".concat(Number(h),"% - ").concat(c-Number(h),"%")},onChange:function(e){return n(e)}})),r.a.createElement("input",{className:"input-value text-right",onChange:function(e){return n(c-e.target.value)},type:"number",value:c-h,min:s,max:c,step:p})),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",{className:"text-left"},r.a.createElement("label",{className:"d-block input-helper-text mr-1 mb-0"},l)),r.a.createElement("div",{className:"text-right"},r.a.createElement("label",{className:"d-block input-helper-text ml-1  mb-0"},o))))},A=t(20),O=t.n(A);var T=function(e){e.dataid;var a=e.fullWidth,t=e.handleChange,n=(e.helperText,e.id,e.label),i=e.max,l=e.maxLabel,o=e.min,c=e.minLabel,s=e.padding,d=void 0===s||s,u=e.step,p=void 0===u?1:u,h=e.value,f=O.a.range(o,i+p,p),b=a?" col-12 ":" col-sm-6 ",v=d?" pr-2 pl-2 ":"p-0";return r.a.createElement("div",{className:"".concat(v," ").concat(b)},r.a.createElement("label",{className:"input-label"},n),r.a.createElement("div",{className:"d-flex mb-2 justify-content-between"},r.a.createElement("span",{className:"input-helper-text align-self-center mr-1 text-left"},c),r.a.createElement("span",{className:"input-helper-text align-self-center ml-1 text-right"},l)),r.a.createElement(M.Range,{onChange:function(e){return t(e[0])},values:[h],min:o,max:i,step:p,marks:f,renderTrack:function(e){var a=e.props,t=e.children;return r.a.createElement("div",Object.assign({},a,{className:"slider-track",style:Object(m.a)(Object(m.a)({},a.style),{},{background:Object(M.getTrackBackground)({values:[h],colors:[w.a.primary,"#ccc"],min:o,max:i})})}),t)},renderThumb:function(e){var a=e.props;return r.a.createElement("div",Object.assign({},a,{className:"slider-thumb"}))},renderMark:function(e){var a=e.props;return r.a.createElement("div",Object.assign({},a,{className:"ticked_mark"}))}}))};var D=function(e){var a=e.param,t=e.formData,n=e.setFormData,i=(e.formInputs,function(e){return function(a){var r=e.updateTransform||function(e){return e},i=Object(m.a)({},t);i[e.dataid]=r(a,e.dataid,i),n(i)}});switch(a.type){case"number":return r.a.createElement(E,Object.assign({},a,{max:a.maxVariable?t[a.maxVariable]:a.max,handleChange:i(a),value:t[a.dataid]}));case"split-slider":return r.a.createElement(S,Object.assign({},a,{handleChange:i(a),value:t[a.dataid]}));case"ticked-slider":return r.a.createElement(T,Object.assign({},a,{handleChange:i(a),value:t[a.dataid]}));case"radio":return r.a.createElement(j,Object.assign({},a,{handleChange:i(a),value:t[a.dataid],formData:t}));case"checkbox":return r.a.createElement(k,Object.assign({},a,{handleChange:i(a),value:t[a.dataid],formData:t}));default:return console.warn("Seeing a new kind of parameter type: ".concat(a.type)),null}},F="Green",L="Purple",V=[{id:"popMajParty",dataid:"popMajParty",initialValue:70},{id:"percentageMajCohesion",dataid:"percentageMajCohesion",initialValue:70},{id:"percentageMinCohesion",dataid:"percentageMinCohesion",initialValue:70}],R=[{id:"popMajParty",dataid:"popMajParty",type:"split-slider",fullWidth:!0,step:1,min:0,max:100,leftLabel:"Percent ".concat(F),rightLabel:"Percent ".concat(L),label:"Percentage of population that is ".concat(F," vs ").concat(L),info:"Assuming all members of the population vote for either ".concat(F,"\n    or ").concat(L,", which percentage votes for ").concat(F,"\n    ")},{id:"percentageMajCohesion",dataid:"percentageMajCohesion",type:"split-slider",fullWidth:!0,step:1,min:0,max:100,leftLabel:"".concat(F," cohesion"),rightLabel:"".concat(F," crossover"),label:"".concat(F," voter cohesion and crossover"),helperText:"Max 100%"},{id:"percentageMinCohesion",dataid:"percentageMinCohesion",type:"split-slider",minColorFirst:!0,fullWidth:!0,step:1,min:0,max:100,leftLabel:"".concat(L," cohesion"),rightLabel:"".concat(L," crossover"),label:"".concat(L," voters cohesion and crossover"),helperText:"Max 100%"}];var B=r.a.memo((function(e){var a=e.formData,t=e.setFormData,n=e.resetData;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-flex"},r.a.createElement("h1",null,"Voter Behaviors"),r.a.createElement(y,{onClick:n})),r.a.createElement(b.a,{className:"parameter-container flex-grow-1"},r.a.createElement(h.a,{as:b.a.Body,noGutters:!0,className:"align-content-start"},R.map((function(e){return r.a.createElement(D,{key:e.id,param:e,formData:a,setFormData:t})})))))})),U=[{id:"ballots",dataid:"ballots",initialValue:1e3},{id:"seatsOpen",dataid:"seatsOpen",initialValue:5},{id:"majCandidates",dataid:"majCandidates",initialValue:6},{id:"minCandidates",dataid:"minCandidates",initialValue:6}],P=[{id:"ballots",dataid:"ballots",type:"number",step:10,min:0,max:1e4,label:"Ballots cast",helperText:"Max 10,000",info:"The number of voters in each election simulation"},{id:"seatsOpen",dataid:"seatsOpen",type:"number",step:1,min:0,max:20,label:"Seats open for election",helperText:"Max 20",info:"The number of open seats open for election in each simulation"},{id:"majCandidates",dataid:"majCandidates",type:"number",step:1,min:0,max:15,helperText:"Max 15",label:"".concat(F," candidates"),info:"The number of ".concat(F," candidates running for election in each simulation")},{id:"minCandidates",dataid:"minCandidates",type:"number",step:1,min:0,max:15,helperText:"Max 15",label:"".concat(L," candidates"),info:"The number of ".concat(L," candidates running for election in each simulation")}];function W(e){return parseInt(e.seatsOpen)}var I=r.a.memo((function(e){var a=e.formData,t=e.setFormData,n=e.resetData;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-flex"},r.a.createElement("h1",null,"Election Details"),r.a.createElement(y,{onClick:n})),r.a.createElement(b.a,{className:"parameter-container flex-grow-1"},r.a.createElement(h.a,{as:b.a.Body,noGutters:!0,className:"align-content-start"},P.map((function(e){return r.a.createElement(D,{key:e.id,param:e,formData:a,setFormData:t})})))))})),G=[{id:"plackettLuce",dataid:"plackettLuce",display:"Plackett-Luce",apiEndpoint:"plackettLuce"},{id:"bradleyTerry",dataid:"bradleyTerry",display:"Bradley-Terry",apiEndpoint:"bradleyTerry"},{id:"alternatingCrossover",dataid:"alternatingCrossover",display:"Alternating Crossover",apiEndpoint:"alternatingCrossover"},{id:"cambridgeSampler",dataid:"cambridgeSampler",display:"Cambridge Sampler",apiEndpoint:"cambridgeSampler"}],z=[{id:"majMajAffinity",modelsUsed:["bradleyTerry","plackettLuce"],dataid:"majMajAffinity",initialValue:0},{id:"majMinAffinity",modelsUsed:["bradleyTerry","plackettLuce"],dataid:"majMinAffinity",initialValue:0},{id:"minMinAffinity",modelsUsed:["bradleyTerry","plackettLuce"],dataid:"minMinAffinity",initialValue:0},{id:"minMajAffinity",modelsUsed:["bradleyTerry","plackettLuce"],dataid:"minMajAffinity",initialValue:0},{id:"majMajCandidateAgreement",modelsUsed:["alternatingCrossover","cambridgeSampler"],dataid:"majMajCandidateAgreement",initialValue:1},{id:"majMinCandidateAgreement",modelsUsed:["alternatingCrossover","cambridgeSampler"],dataid:"majMinCandidateAgreement",initialValue:1},{id:"minMinCandidateAgreement",modelsUsed:["alternatingCrossover","cambridgeSampler"],dataid:"minMinCandidateAgreement",initialValue:1},{id:"minMajCandidateAgreement",modelsUsed:["alternatingCrossover","cambridgeSampler"],dataid:"minMajCandidateAgreement",initialValue:1}],H=[{id:"majMajAffinity",modelsUsed:["bradleyTerry","plackettLuce"],dataid:"majMajAffinity",type:"ticked-slider",fullWidth:!0,step:.5,min:-1,max:1,label:"Among ".concat(F," voters, support for ").concat(F," candidates is..."),minLabel:"Split evenly",maxLabel:"Leaning towards one candidate"},{id:"majMinAffinity",modelsUsed:["bradleyTerry","plackettLuce"],dataid:"majMinAffinity",type:"ticked-slider",fullWidth:!0,step:.5,min:-1,max:1,label:"Among ".concat(F," voters, support for ").concat(L," candidates is..."),minLabel:"Split evenly",maxLabel:"Leaning towards one candidate"},{id:"minMinAffinity",modelsUsed:["bradleyTerry","plackettLuce"],dataid:"minMinAffinity",type:"ticked-slider",fullWidth:!0,step:.5,min:-1,max:1,label:"Among ".concat(L," voters, support for ").concat(L," candidates is..."),minLabel:"Split evenly",maxLabel:"Leaning towards one candidate"},{id:"minMajAffinity",modelsUsed:["bradleyTerry","plackettLuce"],dataid:"minMajAffinity",type:"ticked-slider",fullWidth:!0,step:.5,min:-1,max:1,label:"Among ".concat(L," voters, support for ").concat(F," candidates is..."),minLabel:"Split evenly",maxLabel:"Leaning towards one candidate"},{id:"majMajCandidateAgreement",modelsUsed:["alternatingCrossover","cambridgeSampler"],dataid:"majMajCandidateAgreement",type:"radio",label:"Among ".concat(F," voters, does everyone rank ").concat(F," candidates the same way?"),options:[{id:"uniform-majMajCandidateAgreement",value:1,label:"Yes, ".concat(F," voters rank ").concat(F," candidates the same way")},{id:"random-majMajCandidateAgreement",value:0,label:"No, ".concat(F," voters rank ").concat(F," candidates randomly")}]},{id:"majMinCandidateAgreement",modelsUsed:["alternatingCrossover","cambridgeSampler"],dataid:"majMinCandidateAgreement",type:"radio",label:"Among ".concat(F," voters, does everyone rank ").concat(L," candidates the same way?"),options:[{id:"uniform-majMinCandidateAgreement",value:1,label:"Yes, ".concat(F," voters rank ").concat(L," candidates the same way")},{id:"random-majMinCandidateAgreement",value:0,label:"No, ".concat(F," voters rank ").concat(L," candidates randomly")}]},{id:"minMajCandidateAgreement",modelsUsed:["alternatingCrossover","cambridgeSampler"],dataid:"minMajCandidateAgreement",type:"radio",label:"Among ".concat(L," voters, does everyone rank ").concat(F," candidates the same way?"),options:[{id:"uniform-minMajCandidateAgreement",value:1,label:"Yes, ".concat(L," voters rank ").concat(F," candidates the same way")},{id:"random-minMajCandidateAgreement",value:0,label:"No, ".concat(L," voters rank ").concat(F," candidates randomly")}]},{id:"minMinCandidateAgreement",modelsUsed:["alternatingCrossover","cambridgeSampler"],dataid:"minMinCandidateAgreement",type:"radio",label:"Among ".concat(L," voters, does everyone rank ").concat(L," candidates the same way?"),options:[{id:"uniform-minMinCandidateAgreement",value:1,label:"Yes, ".concat(L," voters rank ").concat(L," candidates the same way")},{id:"random-minMinCandidateAgreement",value:0,label:"No, ".concat(L," voters rank ").concat(L," candidates randomly")}]}];function J(e){return G.find((function(a){return a.display===e}))}var Y=r.a.memo((function(e){var a=e.formData,t=e.resetData,n=e.selectedModel,i=e.setFormData,l=e.setSelectedModel;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-flex"},r.a.createElement("h1",null,"Model Settings"),r.a.createElement(y,{onClick:t})),r.a.createElement(b.a,{className:"parameter-container flex-grow-1"},r.a.createElement(b.a.Header,null,r.a.createElement(d.a,{variant:"tabs",defaultActiveKey:n,onSelect:function(e){l(e)}},G.map((function(e){return r.a.createElement(d.a.Item,{key:e.id},r.a.createElement(d.a.Link,{eventKey:e.display},e.display))})))),r.a.createElement(h.a,{as:b.a.Body,noGutters:!0,className:"align-content-start"},function(e,a){var t=J(a).dataid;return e.filter((function(e){return e.modelsUsed.includes(t)}))}(H,n).map((function(e){return r.a.createElement(D,{key:e.id,param:e,formData:a,setFormData:i})})))))})),_=t(71),q=t.n(_),K=t(191),$=t(192),Q=t.n($);var X=function(){return r.a.createElement("div",{className:"d-flex justify-content-center align-items-center w-100 h-100"},r.a.createElement("div",{className:"spinner-border",style:{height:75,width:75,marginTop:-75},role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))},Z=t(193),ee=t(194),ae=t(212),te=t(211),ne=t(361),re=t(59);var ie=function(){return r.a.createElement("p",null,"Nothing to display here")};function le(e){var a=e.kv,t=void 0===a?{}:a;return 0===Object.keys(t).length?r.a.createElement(ie,null):r.a.createElement(ne.a,{striped:!0,borderless:!0,hover:!0,className:"kv-table"},r.a.createElement("tbody",null,Object.entries(t).map((function(e){var a=Object(u.a)(e,2),t=a[0],n=a[1];return r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"table-key"},t),r.a.createElement("td",{className:"table-value"},n))}))))}var oe=r.a.memo((function(e){var a=e.data,t=void 0===a?[]:a,n=e.maxSeats,i=void 0===n?1:n,l=!O.a.isEmpty(t)&&{Min:Object(re.min)(t),Max:Object(re.max)(t),Mode:Object(re.modeFast)(t),Mean:Object(re.mean)(t).toFixed(2),"Standard Deviation":Object(re.standardDeviation)(t).toFixed(2)},o=!O.a.isEmpty(l)&&{Min:(l.Min/i).toFixed(2),Max:(l.Max/i).toFixed(2),Mode:(l.Mode/i).toFixed(2),Mean:(l.Mean/i).toFixed(2),"Standard Deviation":(l["Standard Deviation"]/i).toFixed(2)},c=!O.a.isEmpty(o)&&{Min:"".concat((100*o.Min).toFixed(2),"% (").concat(l.Min," / ").concat(i,")"),Max:"".concat((100*o.Max).toFixed(2),"% (").concat(l.Max," / ").concat(i,")"),Mode:"".concat((100*o.Mode).toFixed(2),"% (").concat(l.Mode," / ").concat(i,")"),Mean:"".concat((100*o.Mean).toFixed(2),"% (").concat(l.Mean," / ").concat(i,")"),"Standard Deviation":"".concat(100*o["Standard Deviation"],"% (").concat(l["Standard Deviation"]," / ").concat(i,")")};return r.a.createElement(h.a,{className:"m-0"},r.a.createElement(f.a,{sm:12,className:"pr-1 pl-1"},r.a.createElement("h5",{className:"stats-table-title"},r.a.createElement("span",{className:"literal-title"},"Statistics")),r.a.createElement(le,{kv:c})))})),ce=t(372),se=t(377),de=t(375),me=t(366),ue=t(380),pe=t(373),he=t(378);var fe=function(e){var a=e.displayMajResults,t=e.maxSeats,n=void 0===t?0:t,i=e.selectedModel,l=e.data,o=(l||[]).map((function(e){return{x:e}})),c=O.a.range(0,n+2,1),s=a?w.a["maj-color"]:w.a["min-color"],d=a?F:L,m=O.a.isEmpty(l)?void 0:Object(re.mean)(l);return r.a.createElement(ce.a,{style:{parent:{fontSize:12}},containerComponent:r.a.createElement(se.a,{className:"pt-2 pb-4",style:{height:350,maxWidth:450,margin:"auto",maxHeight:"600"}})},r.a.createElement(de.a,{text:O.a.isEmpty(l)?"No Data":"".concat(d," Candidates Elected \n Across ").concat(l.length," ").concat(i," Simulation(s) "),x:225,y:18,textAnchor:"middle"}),r.a.createElement(me.a,{style:{labels:{fill:"black"},data:{fill:s}},cornerRadius:0,data:o,bins:c,labelComponent:r.a.createElement(ue.a,{constrainToVisibleArea:!0}),labels:function(e){var a=e.datum;return"# Elections with ".concat(a.x-.5,"\n ").concat(d," candidate(s) elected:\n").concat(a.y)}}),m>=0&&r.a.createElement(pe.a,{style:{data:{stroke:w.a["primary-emph"],strokeDasharray:"5"}},x:function(){return m+.01}}),r.a.createElement(he.a,{label:"Frequency of outcome",textAnchor:"middle",axisLabelComponent:r.a.createElement(de.a,{dy:-12}),dependentAxis:!0}),r.a.createElement(he.a,{label:"Number of ".concat(d," candidates elected\n (mean represented as dashed line)"),tickLabelComponent:r.a.createElement(de.a,{dy:-5}),tickValues:c.slice(0,c.length)}))},be=function(e){Object(ae.a)(t,e);var a=Object(te.a)(t);function t(e){var n;return Object(Z.a)(this,t),(n=a.call(this,e)).toggleMajResults=function(){n.setState({displayMajResults:!n.state.displayMajResults})},n.state={displayMajResults:!1},n}return Object(ee.a)(t,[{key:"shouldComponentUpdate",value:function(e,a){return e.simulationResults!==this.props.simulationResults||a.displayMajResults!==this.state.displayMajResults}},{key:"render",value:function(){var e=this.props,a=e.selectedModel,t=void 0===a?"":a,n=e.simulationParams,i=void 0===n?{}:n,l=e.simulationResults,o=void 0===l?{}:l,c=o.poc_elected_rcv,s=o.seats_open,d=this.state.displayMajResults?c.map((function(e){return s-e})):c,m=this.state.displayMajResults?L:F;return r.a.createElement(r.a.Fragment,null,!O.a.isEmpty(o)&&r.a.createElement(x.a.Check,{type:"switch",id:"custom-switch",className:"results-demographic-flip mt-0",value:this.state.displayMajResults,onChange:this.toggleMajResults,label:"View ".concat(m," results")}),r.a.createElement(fe,{maxSeats:s,displayMajResults:this.state.displayMajResults,data:d,selectedModel:t}),r.a.createElement(oe,{data:d,maxSeats:s,simulationParams:i}))}}]),t}(r.a.Component),ve=t(362),ge=t(207);var ye=function(e){var a=e.refToSave;return r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement(v.a,{onClick:function(){Object(ge.exportComponentAsPNG)(a)},className:"d-flex justify-content-center align-items-center",size:"sm"},r.a.createElement(ve.a,{size:16,className:"mr-1"}),"Save"))},Ee=t(363);var je=function(e){var a=e.onClick;return r.a.createElement(v.a,{onClick:a,className:"d-flex ml-1 justify-content-center align-items-center",size:"sm"},r.a.createElement(Ee.a,{size:16,className:"mr-1"}),"Run")},xe=t(364);var ke=function(){return r.a.createElement(v.a,{className:"d-flex ml-1 justify-content-center align-items-center",size:"sm",disabled:!0},r.a.createElement(xe.a,{size:16,className:"mr-1"}),"Loading...")},Me=function(e){var a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=Object(n.useState)("idle"),r=Object(u.a)(t,2),i=r[0],l=r[1],o=Object(n.useState)(null),c=Object(u.a)(o,2),s=c[0],d=c[1],m=Object(n.useState)(null),p=Object(u.a)(m,2),h=p[0],f=p[1],b=Object(n.useCallback)((function(){return l("pending"),d(null),f(null),e().then((function(e){d(e),l("success")})).catch((function(e){f(e),l("error")}))}),[e]);return Object(n.useEffect)((function(){a&&b()}),[b,a]),{execute:b,status:i,value:s,error:h}};var Ce=r.a.memo((function(e){var a=e.combineFormData,t=e.formData,i=e.formInputs,l=e.setFormData,o=e.selectedModel,c="https://rcv-api.herokuapp.com/api/v1/"+function(e){return e?J(e).apiEndpoint:"ensemble"}(o),s=function(e,a){if(!a)return e;var t=J(a).dataid;return O.a.pick(e,Object.keys(e).filter((function(e){var a=e.split("-"),n=Boolean(a[1]);return!n||n&&a[1]===t})))}(a(),o||void 0),d=Me(function(){var e=Object(K.a)(q.a.mark((function e(){var a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.a.get(c,{params:s});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),!1),m=d.execute,u=d.status,p=d.value,f=d.error,v=Object(n.useRef)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("h1",null,"Simulations")),r.a.createElement(b.a,{className:"parameter-container flex-grow-1"},r.a.createElement(b.a.Body,null,r.a.createElement(h.a,{noGutters:!0,className:"align-content-start"},i.map((function(e){return r.a.createElement(D,{key:e.id,param:e,formData:t,setFormData:l})}))),r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("h4",null,"Election Results"),r.a.createElement("div",{className:"d-flex"},"success"===u&&r.a.createElement(ye,{refToSave:v}),"pending"!==u?r.a.createElement(je,{onClick:m}):r.a.createElement(ke,null))),"error"===u&&r.a.createElement("p",null,"There was an error processing those simulations.",console.error(f)),"pending"===u&&r.a.createElement("div",{className:"d-flex flex-column w-100"},r.a.createElement("div",{style:{height:"300px"}},r.a.createElement(X,null))),"idle"===u&&r.a.createElement(be,null),"success"===u&&r.a.createElement(be,{ref:v,simulationResults:p,simulationParams:s,selectedModel:o})))))})),we=[{id:"numElectionsEachSimulation",dataid:"numElectionsEachSimulation",initialValue:1}],Ne=[{id:"numElectionsEachSimulation",dataid:"numElectionsEachSimulation",type:"number",min:1,max:15,fullWidth:!0,padding:!1,label:"Elections to Simulate",helperText:"Max 15",info:"The number of elections to simulate with these parameters"}];var Se=function(e,a){var t=Object(n.useState)((function(){try{var t=window.localStorage.getItem(e);if(O.a.isNull(t))return a;var n=JSON.parse(t),r=Object.keys(a),i=Object.keys(n);return O.a.isEqual(i,r)?n:(window.localStorage.removeItem(e),a)}catch(l){return console.log(l),a}})),r=Object(u.a)(t,2),i=r[0],l=r[1];return[i,function(a){try{var t=a instanceof Function?a(i):a;l(t),window.localStorage.setItem(e,JSON.stringify(t))}catch(n){console.log(n)}}]};var Ae=function(){var e=U.reduce((function(e,a){return e[a.dataid]=a.initialValue,e}),{}),a=Se("electionState",e),t=Object(u.a)(a,2),n=t[0],i=t[1],l=V.reduce((function(e,a){return e[a.dataid]=a.initialValue,e}),{}),o=Se("voterState",l),c=Object(u.a)(o,2),s=c[0],d=c[1],b=z.reduce((function(e,a){return e[a.dataid]=a.initialValue,e}),{}),v=Se("modelState",b),g=Object(u.a)(v,2),y=g[0],E=g[1],j=we.reduce((function(e,a){return e[a.dataid]=a.initialValue,e}),{}),x=Se("simulationState",j),k=Object(u.a)(x,2),M=k[0],C=k[1],w=Se("selectedModel",G[0].display),N=Object(u.a)(w,2),S=N[0],A=N[1];return r.a.createElement(p.a,{fluid:!0},r.a.createElement(h.a,null,r.a.createElement(f.a,{md:7,className:"pb-2 d-flex flex-column"},r.a.createElement(I,{formData:n,setFormData:i,resetData:function(){return i(e)}}),r.a.createElement(B,{formData:s,setFormData:d,resetData:function(){return d(l)}}),r.a.createElement(Y,{models:G,selectedModel:S,setSelectedModel:A,formData:y,setFormData:E,resetData:function(){return E(b)}})),r.a.createElement(f.a,{md:5,className:"pb-2 d-flex flex-column"},r.a.createElement(Ce,{combineFormData:function(){return Object(m.a)(Object(m.a)(Object(m.a)(Object(m.a)({},n),s),y),M)},formData:M,formInputs:Ne,getSeats:function(){return W(n)},setFormData:C,selectedModel:S}))))},Oe=Object.freeze({pl:0,bt:1,ac:2,cs:3}),Te=[{id:"numElectionsEachSimulation",dataid:"numElectionsEachSimulation",initialValue:1},{id:"modelsToSimulate",dataid:"modelsToSimulate",initialValue:Object.values(Oe)}],De=[{id:"numElectionsEachSimulation",dataid:"numElectionsEachSimulation",type:"number",min:1,max:15,label:"Elections to Simulate",helperText:"Max 15",info:"The number of elections to simulate with these parameters"},{id:"modelsToSimulate",dataid:"modelsToSimulate",type:"checkbox",label:"RCV Models to Use",updateTransform:function(e,a,t){var n=parseInt(e),r=t[a];return r.includes(n)?r.filter((function(e){return e!==n})):(r.push(n),r)},options:[{id:"pl",value:Oe.pl,label:"Plackett-Luce"},{id:"bt",value:Oe.bt,label:"Bradley-Terry"},{id:"ac",value:Oe.ac,label:"Alternating Crossover"},{id:"cs",value:Oe.cs,label:"Cambridge Sampler"}]}];var Fe=[{path:"/about",display:"About",component:function(){return r.a.createElement(p.a,null,r.a.createElement("h1",{className:"text-center"},"About This Project"),r.a.createElement("div",null,r.a.createElement("h3",null,"Modelling voting behavior"),r.a.createElement("p",null,"Voting is an incredibly complex process, and any attempt to model it is bound to oversimplify the way people vote, especially in ranked elections, where a voter has so many more ways to make their voice heard. With this in mind, this app uses multiple models of ranking, some classical and some new. They all take the same basic input."),r.a.createElement("h3",null,"Basic inputs to the models"),r.a.createElement("p",null,"All the models take some basic inputs, namely the support from each group for each class of candidate (minority- or majority-preferred), which should be numbers between 0 and 1. These values can be estimated by analyzing single-winner elections, inferred from survey results, or set to hypothetical values. Each model interprets these support values slightly differently, as detailed below."),r.a.createElement("h3",null,"How the model works: Plackett-Luce"),r.a.createElement("p",null,"The Plackett-Luce model is a classical model of statistical ranking which has already been applied to study ranked choice voting in Ireland [1]. Let's suppose the support for Candidate A from a voting group is twice the support for Candidate B. Under the Plackett-Luce model, we take this to mean that a voter is twice as likely to put Candidate A first as to put Candidate B first. In fact, the model assumes that this trend goes ",r.a.createElement("em",null,"all the way down the ballot"),". That is, if a voter has not ranked either A or B yet on their ballot, then they are still twice as likely to write down Candidate A's name than Candidate B when they get to the next rank. See [2] for mathematical details. It is unrealistic to expect the support for each class of candidates to be completely uniform, so to divide up the total support among candidates of a given class, we sample from a symmetric Dirichlet distribution. The Dirichlet distribution has one parameter (called concentration) which can be used to choose between mostly even division of support (concentration >> 1), and support concentrated on just a few candidates (concentration << 1). The default concentration value of 1.0 makes every division of the support equally likely, roughly speaking. We therefore refer to this parameter as",r.a.createElement("em",null,"evenness of support")," in the Model input tab."),r.a.createElement("h3",null,"How the model works: Bradley-Terry"),r.a.createElement("p",null,"The paired comparison model is based on the idea that what matters in a ranking is who is preferred over whom. Suppose the support by a voting group for Candidate A is ",r.a.createElement("em",null,"a")," and the support for Candidate B is ",r.a.createElement("em",null," b"),". This the model sets the probability that a voter in the group ranks Candidate A above Candidate B at"," ",r.a.createElement("em",null,"a/(a+b)"),". The probability of a full ranking is just the product of the probabilities associated with the order of each pair of candidates, with a normalizing constant so that everything sums to one. See [2] for mathematical details. As with the Plackett-Luce model, we use a Dirichlet sampler to divide up the support among the candidates."),r.a.createElement("h3",null,"How the model works: Alternating crossover"),r.a.createElement("p",null,"This model posits that there are two kinds of voters in each group: block voters and crossover voters. Block voters always vote for ingroup candidates first and then outgroup candidates. Crossover voters alternate between the two classes of candidates, starting with an outgroup candidate (hence the name). This only tells you the type of candidate at each position in a ballot, however, so further choices are necessary to determine the exact order. For each group of voters and group of candidates, we allow two choices: random ordering by each voter, or consistent ordering by each voter. This model has been used in previous analyses of ranked voting by the MGGG at Tufts University (see [3,4] below)."),r.a.createElement("h3",null,"How the model works: Cambridge sampler"),r.a.createElement("p",null,"Each voter's first choice under this model is the same as under alternating crossover, i.e. an ingroup candidate for block voters and an outgroup candidate for crossover voters. However, instead of allowing only a block ballot or alternating ballot, the types of candidates in the rest of the ballot are determined by sampling from the ballots in a decade's worth of Cambridge MA ranked choice city council elections. Once the type of candidate (ingroup or outgroup) at each rank has been chosen, random ordering or consistent ordering is applied to fill in the ballot with candidate names just as with the alternating crossover model."),r.a.createElement("h3",null,"References"),"[1] Gormley, I.S, and Murphy, T.B."," ",r.a.createElement("em",null,"Exploring voting blocs within the Irish electorate: A mixture modeling approach.")," ","Journal of the American Statistical Association 103.483 (2008): 1014-1027.",r.a.createElement("br",null),"[2] Critchlow, D.E., Fligner, M.A. and Verducci, J.S., 1991."," ",r.a.createElement("em",null,"Probability models on rankings"),". Journal of mathematical psychology, 35(3), pp.294-318.",r.a.createElement("br",null),"[3] MGGG, ",r.a.createElement("em",null,"Election Reform in Lowell MA, ")," ",r.a.createElement("a",{href:"https://mggg.org/lowell"},"https://mggg.org/lowell"),r.a.createElement("br",null),"[4] MGGG,"," ",r.a.createElement("em",null,"Analysis of county commission elections in Yakima County WA,"," ")," ",r.a.createElement("a",{href:"https://mggg.org/uploads/yakima.pdf"},"https://mggg.org/uploads/yakima.pdf")))}},{path:"/ensemble",display:"Ensemble",component:function(){var e=U.reduce((function(e,a){return e[a.dataid]=a.initialValue,e}),{}),a=Se("electionState",e),t=Object(u.a)(a,2),n=t[0],i=t[1],l=V.reduce((function(e,a){return e[a.dataid]=a.initialValue,e}),{}),o=Se("voterState",l),c=Object(u.a)(o,2),s=c[0],d=c[1],b=Te.reduce((function(e,a){return e[a.dataid]=a.initialValue,e}),{}),v=Se("simulationState",b),g=Object(u.a)(v,2),y=g[0],E=g[1];return r.a.createElement(p.a,{fluid:!0},r.a.createElement(h.a,null,r.a.createElement(f.a,{md:7,className:"pb-2 d-flex flex-column"},r.a.createElement(I,{formData:n,setFormData:i,resetData:function(){return i(e)}}),r.a.createElement(B,{formData:s,setFormData:d,resetData:function(){return d(l)}})),r.a.createElement(f.a,{md:5,className:"pb-2 d-flex flex-column"},r.a.createElement(Ce,{combineFormData:function(){return Object(m.a)(Object(m.a)(Object(m.a)({},n),s),y)},formData:y,formInputs:De,getSeats:function(){return W(n)},setFormData:E}))))}},{path:"/",isHome:"true",display:"Home",component:Ae}];function Le(e){return e.find((function(e){return e.isHome})).path}var Ve=function(e){return r.a.createElement(s.a,{className:"nav-header",variant:"dark",expand:"md"},r.a.createElement(s.a.Brand,{href:Le(e.routes)},"Modeling Representation ",r.a.createElement("br",{className:"d-xs-block d-sm-none"})," with Ranked Choice Voting"),r.a.createElement(s.a.Toggle,null),r.a.createElement(s.a.Collapse,{className:"justify-content-end"},r.a.createElement(d.a,{className:"justify-content-end"},e.routes.reverse().map((function(e,a){return r.a.createElement(d.a.Item,{className:"text-right",key:e.display},r.a.createElement(d.a.Link,{as:o.b,to:e.path,key:a,href:e.path},e.display))})))))};var Re=function(){return r.a.createElement(o.a,{basename:"/rcv-webapp"},r.a.createElement(Ve,{routes:Fe}),r.a.createElement(c.c,null,Fe.map((function(e,a){return r.a.createElement(c.a,{path:e.path,key:a},r.a.createElement(e.component,null))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},38:function(e,a,t){e.exports={primary:"#c08c33","maj-color":"#4b9460","min-color":"#4b3f72","primary-emph":"#dcb97d"}}},[[217,1,2]]]);
//# sourceMappingURL=main.ef9cd099.chunk.js.map