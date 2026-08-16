var plantPets = {"sprout":"🐰","cactus":"🐪","flower":"🐝","orchid":"🦚","sakura":"🦊","fern":"🦌","bamboo":"🐼","rose":"🦋","maple":"🐿️","mushroom":"🐸"};

var plantData = {
  "sprout": {
    desc: "Fresh green sprouts fix vital nitrogen directly into your farming soil beds. This feeds friendly ground bugs and kicks off local biome health.",
    kaomojis: ["(🌱•ᴗ•🌱)", "(っˆڡˆς)🌱", "✧sprout✧", "🥬(•‿•)", "(*•▿•*)🌱", "🌱(˘▽˘)🌿", "(๑˃̵ᴗ˂̵)🌱"],
    fonts: [ {name:"Gothic Outline", key:"gothic"}, {name:"Spaced Retro", key:"wide"}, {name:"Bold Fraktur", key:"boldGothic"}, {name:"Blackboard", key:"double"}, {name:"Bubble Text", key:"bubble"} ]
  },
  "cactus": {
    desc: "Desert cacti store vast amounts of internal rainwater safely in dry arid regions. They serve as life-saving nectar oases for travelling camels and small finches.",
    kaomojis: ["🌵(•‿•)🌵", "(>_<)凸", "✧prickly✧", "⊂(🌵_🌵)⊃", "(•̀⤙•́)🌵", "🌵(⚔️_⚔️)🌵", "(•̪●)🌵"],
    fonts: [ {name:"Sans Bold", key:"sansBold"}, {name:"Gothic Text", key:"gothic"}, {name:"Small Caps", key:"smallCaps"}, {name:"Monospace Wide", key:"wide"}, {name:"Parenthesized", key:"parentheses"} ]
  },
  "flower": {
    desc: "Sunflowers filter harmful chemical residues out of open wild meadows. Their sweet bright petals attract busy bumblebees to optimize region pollination loops.",
    kaomojis: ["(🌸◠‿◠)", "(*✿‿✿)", "✧sunny✧", "🌻(❛‿❛✿)", "╰(✿´⌣`✿)╯", "🌻(◕‿◕✿)", "(*^‿^*)🌻"],
    fonts: [ {name:"Sweet Cursive", key:"script"}, {name:"Light Monospace", key:"wide"}, {name:"Bubble Gloss", key:"bubble"}, {name:"Script Bold", key:"scriptBold"}, {name:"Blackboard Double", key:"double"} ]
  },
  "orchid": {
    desc: "Exotic night orchids grow cleanly along rainforest trunk walls. They anchor moisture layers and supply shade safe spaces for colorful micro tree frogs.",
    kaomojis: ["(｡♥‿♥｡)🔮", "(◕‿◕✿)", "✧exotic✧", "🔮(☯‿☯)", "(*✨▽✨*)", "🔮(👁️_👁️)🔮", "(✿◠‿◠)🔮"],
    fonts: [ {name:"Mystic Calligraphy", key:"script"}, {name:"Gothic Void", key:"gothic"}, {name:"Italic Serif", key:"serifItalic"}, {name:"Bold Fraktur", key:"boldGothic"}, {name:"Bubble Space", key:"bubble"} ]
  },
  "sakura": {
    desc: "Sakura trees anchor riverside clay soils to completely stop heavy rain washouts. Their falling organic leaves supply organic nutrients to local forest rivers.",
    kaomojis: ["(💮◡💮)", "(｡✿‿✿｡)", "✧bonsai✧", "🌸(◕‿◕)", "💮(๑ᵕ̳ᵕ̳)💮", "(🌸˘◡˘)", "💮(*^.^*)"],
    fonts: [ {name:"Imperial Cursive", key:"script"}, {name:"Spaced Text", key:"wide"}, {name:"Small Caps Harmony", key:"smallCaps"}, {name:"Blackboard Royal", key:"double"}, {name:"Script Bold", key:"scriptBold"} ]
  },
  "fern": {
    desc: "Cozy ground ferns blanket dark damp woods to regulate air moisture. They create soft, insulated nesting pockets for woodland fawns and small mice.",
    kaomojis: ["🌿(ᵕ‿ᵕ)🌿", "(๑˃̵ᴗ˂̵)🍃", "✧cozy✧", "🍃(•ᴗ•)🍃", "🌿(๑'ᴗ')🌿", "(🍃◡🍃)", "🌿(◕‿◕✿)"],
    fonts: [ {name:"Dense Gothic", key:"gothic"}, {name:"Clean Wide", key:"wide"}, {name:"Sans Bold", key:"sansBold"}, {name:"Small Caps Wood", key:"smallCaps"}, {name:"Blackboard Stem", key:"double"} ]
  },
  "bamboo": {
    desc: "Lucky bamboo holds a fast growth speed that scrubs clean CO2 carbon from the atmosphere. They build durable shelter barriers for pandas and nesting jungle birds.",
    kaomojis: ["🎍(•_•)🎍", "(ᵔᴥᵔ)🐼", "✧lucky✧", "🐼(￣▽￣)", "🎍(◕‿◕)🎍", "🎍(🕶️_🕶️)🎍", "🐼(•⤙•)"],
    fonts: [ {name:"Straight Block Bold", key:"wide"}, {name:"Gothic Roots", key:"gothic"}, {name:"Sans Bold Stack", key:"sansBold"}, {name:"Fraktur Dense", key:"boldGothic"}, {name:"Parentheses Nodes", key:"parentheses"} ]
  },
  "rose": {
    desc: "Crimson roses display dense defensive thorns that shield songbirds from predators. Their sweet buds support vital butterflies and insects all summer long.",
    kaomojis: ["🌹(♨_♨)", "(✿ ♥‿♥)", "✧crimson✧", "🌹(•_•✿)", "⊂(✿﹏✿)⊃", "🌹(◕‿◕)", "(♥ω♥*)🌹"],
    fonts: [ {name:"Romantic Script", key:"script"}, {name:"Gothic Drama", key:"gothic"}, {name:"Script Bold Rose", key:"scriptBold"}, {name:"Italic Thorns", key:"serifItalic"}, {name:"Bubble Petal", key:"bubble"} ]
  },
  "maple": {
    desc: "Mini maple trees sap sugars to feed dynamic soil fungi nets. Their wide leaf umbrellas catch storms to stop dangerous mud movement.",
    kaomojis: ["🍁(👁️_👁️)", "ﾍ(￣▽￣*)🍁", "✧autumn✧", "🍁(◠‿◠)", "(🍁'⌣')", "🍁(˘▽˘)", "🍁(*^▽^*)"],
    fonts: [ {name:"Spaced Autumn", key:"wide"}, {name:"Script Outline", key:"script"}, {name:"Blackboard Timber", key:"double"}, {name:"Small Caps Canopy", key:"smallCaps"}, {name:"Sans Bold Root", key:"sansBold"} ]
  },
  "mushroom": {
    desc: "Shroom patches break down old rotting fallen wood logs into clean rich soil compost. This returns crucial core vitamins back into the forest loops.",
    kaomojis: ["🍄(𖦹_𖦹)🍄", "(•͈ᴗ•͈)🍄", "✧shroom✧", "🍄(❛‿❛)", "(🍄•‿•🍄)", "🍄(⊙_⊙)🍄", "(◍•ᴗ•◍)🍄"],
    fonts: [ {name:"Gothic Fungi", key:"gothic"}, {name:"Round Wide Text", key:"wide"}, {name:"Bubble Spore", key:"bubble"}, {name:"Fraktur Decay", key:"boldGothic"}, {name:"Small Caps Compost", key:"smallCaps"} ]
  }
};

var maps = {
  gothic: { a:'𝔞',b:'𝔟',c:'𝔠',d:'𝔡',e:'𝔢',f:'𝔣',g:'𝔤',h:'𝔥',i:'𝔦',j:'𝔧',k:'𝔨',l:'𝔩',m:'𝔪',n:'𝔫',o:'𝔬',p:'𝔭',q:'𝔮',r:'𝔯',s:'𝔰',t:'𝔱',u:'𝔲',v:'𝔳',w:'𝔴',x:'𝔵',y:'𝔶',z:'𝔷',A:'𝔄',B:'𝔅',C:'ℭ',D:'𝔇',E:'𝔈',F:'𝔉',G:'𝔊',H:'ℌ',I:'ℑ',J:'𝔍',K:'𝔎',L:'𝔏',M:'𝔐',N:'𝔑',O:'𝔒',P:'𝔓',Q:'𝔔',R:'ℜ',S:'𝔖',T:'𝔗',U:'𝔘',V:'𝔙',W:'𝔴',X:'𝔵',Y:'𝔶',Z:'𝔷' },
  script: { a:'𝓪',b:'𝓫',c:'𝓬',d:'𝓭',e:'𝓮',f:'𝓯',g:'𝓰',h:'𝓱',i:'𝓲',j:'𝓳',k:'𝓴',l:'𝓵',m:'𝓶',n:'𝓷',o:'𝓸',p:'𝓹',q:'𝓺',r:'𝓻',s:'𝓼',t:'𝓽',u:'𝓾',v:'𝓿',w:'𝔀',x:'𝔁',y:'𝔂',z:'𝔃',A:'𝓐',B:'𝓑',C:'𝓒',D:'𝓓',E:'𝓔',F:'𝓕',G:'𝓖',H:'𝓗',I:'𝓘',J:'𝓙',K:'𝓚',L:'𝓛',M:'𝓜',N:'𝓝',O:'𝓞',P:'𝓟',Q:'𝓠',R:'𝓡',S:'𝓢',T:'𝓣',U:'𝓤',V:'𝓥',W:'𝓦',X:'𝓧',Y:'𝓨',Z:'𝓩' },
  wide: { a:'ａ',b:'ｂ',c:'ｃ',d:'ｄ',e:'ｅ',f:'ｆ',g:'ｇ',h:'ｈ',i:'ｉ',j:'ｊ',k:'ｋ',l:'ｌ',m:'ｍ',n:'ｎ',o:'ｏ',p:'ｐ',q:'ｑ',r:'ｒ',s:'ｓ',t:'ｔ',u:'ｕ',v:'ｖ',w:'ｗ',x:'ｘ',y:'ｙ',z:'ｚ',A:'Ａ',B:'Ｂ',C:'Ｃ',D:'Ｄ',E:'Ｅ',F:'Ｆ',G:'Ｇ',H:'Ｈ',I:'Ｉ',J:'Ｊ',K:'Ｋ',L:'Ｌ',M:'Ｍ',N:'Ｎ',O:'Ｏ',P:'Ｐ',Q:'Ｑ',R:'Ｒ',S:'Ｓ',T:'Ｔ',U:'Ｕ',V:'Ｖ',W:'Ｗ',X:'Ｘ',Y:'Ｙ',Z:'Ｚ' },
  double: { a:'𝕒',b:'𝕓',c:'𝕔',d:'𝕕',e:'𝕖',f:'𝕗',g:'𝕘',h:'𝕙',i:'𝕚',j:'𝕛',k:'𝕜',l:'𝕝',m:'𝕞',n:'𝕟',o:'𝕠',p:'𝕡',q:'𝕢',r:'𝕣',s:'𝕤',t:'𝕥',u:'𝕦',v:'𝕧',w:'𝕨',x:'𝕩',y:'𝕪',z:'𝕫',A:'𝔸',B:'𝔹',C:'ℂ',D:'𝔻',E:'𝔼',F:'𝔽',G:'𝔾',H:'ℍ',I:'𝕀',J:'𝕁',K:'𝕂',L:'𝕃',M:'𝕄',N:'ℕ',O:'𝕆',P:'ℙ',Q:'ℚ',R:'ℝ',S:'𝕊',T:'𝕋',U:'𝕌',V:'𝕍',W:'𝕎',X:'𝕏',Y:'𝕐',Z:'ℤ' },
  bubble: { a:'ⓐ',b:'ⓑ',c:'ⓒ',d:'ⓓ',e:'ⓔ',f:'ⓕ',g:'ⓖ',h:'ⓗ',i:'ⓘ',j:'ⓙ',k:'ⓚ',l:'ⓛ',m:'ⓜ',n:'ⓝ',o:'ⓞ',p:'ⓟ',q:'ⓠ',r:'ⓡ',s:'ⓢ',t:'ⓣ',u:'ⓤ',v:'ⓥ',w:'ⓦ',x:'ⓧ',y:'ⓨ',z:'ⓩ',A:'Ⓐ',B:'Ⓑ',C:'Ⓒ',D:'Ⓓ',E:'Ⓔ',F:'Ⓕ',G:'Ⓖ',H:'Ⓗ',I:'Ⓘ',J:'Ⓙ',K:'Ⓚ',L:'Ⓛ',M:'Ⓜ',N:'Ⓝ',O:'Ⓞ',P:'Ⓟ',Q:'Ⓠ',R:'Ⓡ',S:'Ⓢ',T:'Ⓣ',U:'Ⓤ',V:'Ⓥ',W:'Ⓦ',X:'Ⓧ',Y:'Ⓨ',Z:'Ⓩ' },
  sansBold: { a:'𝗮',b:'𝗯',c:'𝗰',d:'𝗱',e:'𝗲',f:'𝗳',g:'𝗴',h:'𝗵',i:'𝗶',j:'𝗷',k:'𝗸',l:'𝗹',m:'𝗺',n:'𝗻',o:'𝗼',p:'𝗽',q:'𝗾',r:'𝗿',s:'𝘀',t:'𝘁',u:'𝘂',v:'𝘃',w:'𝘄',x:'𝘅',y:'𝘆',z:'𝘇',A:'𝗔',B:'𝗕',C:'𝗖',D:'𝗗',E:'𝗘',F:'𝗙',G:'𝗚',H:'𝗛',I:'𝗜',J:'𝗝',K:'𝗞',L:'𝗟',M:'𝗠',N:'𝗡',O:'𝗢',P:'𝗣',Q:'𝗤',R:'𝗥',S:'𝗦',T:'𝗧',U:'𝗨',V:'𝗩',W:'𝗪',X:'𝗫',Y:'𝗬',Z:'𝗫' },
  boldGothic: { a:'𝖇',b:'𝖈',c:'𝖉',d:'𝖛',e:'𝖋',f:'𝖌',g:'𝖍',h:'𝖏',i:'𝖐',j:'𝖑',k:'𝖒',l:'𝖓',m:'𝖔',n:'𝖕',o:'𝖖',p:'𝖗',q:'𝖘',r:'𝖙',s:'𝖚',t:'𝖛',u:'𝖜',v:'𝖝',w:'𝖞',x:'𝖟',y:'𝕬',z:'𝕭',A:'𝕮',B:'𝕯',C:'𝕰',D:'𝕱',E:'𝕲',F:'𝕳',G:'𝕴',H:'𝕵',I:'𝕶',J:'𝕷',K:'𝕸',L:'𝕹',M:'𝕺',N:'𝕻',O:'𝕼',P:'𝕽',Q:'𝕾',R:'𝕿',S:'𝖀',T:'𝖁',U:'𝖂',V:'𝖃',W:'𝖄',X:'𝖅',Y:'𝖄',Z:'𝖅' },
  scriptBold: { a:'𝓪',b:'𝓫',c:'𝓬',d:'𝓭',e:'𝓮',f:'𝓯',g:'𝓰',h:'𝓱',i:'𝓲',j:'𝓳',k:'𝓴',l:'𝓵',m:'𝓶',n:'𝓷',o:'𝓸',p:'𝓹',q:'𝓺',r:'𝓻',s:'𝓼',t:'𝓽',u:'𝓾',v:'𝓿',w:'𝔀',x:'𝔁',y:'𝔂',z:'𝔃',A:'𝓐',B:'𝓑',C:'𝓒',D:'𝓓',E:'𝓔',F:'𝓕',G:'𝓖',H:'𝓗',I:'𝓘',J:'𝓙',K:'𝓚',L:'𝓛',M:'𝓜',N:'𝓝',O:'𝓞',P:'𝓟',Q:'𝓠',R:'𝓡',S:'𝓢',T:'𝓣',U:'𝓤',V:'𝓥',W:'𝓦',X:'𝓧',Y:'𝓨',Z:'𝓩' },
  smallCaps: { a:'ᴀ',b:'ʙ',c:'ᴄ',d:'ᴅ',e:'ᴇ',f:'ғ',g:'ɢ',h:'ʜ',i:'ɪ',j:'ᴊ',k:'ᴋ',l:'ʟ',m:'ᴍ',n:'ɴ',o:'ᴏ',p:'ᴘ',q:'ǫ',r:'ʀ',s:'s',t:'ᴛ',u:'ᴜ',v:'ᴠ',w:'ᴡ',x:'x',y:'ʏ',z:'ᴢ',A:'ᴀ',B:'ʙ',C:'ᴄ',D:'ᴅ',E:'ᴇ',F:'ғ',G:'ɢ',H:'ʜ',I:'ɪ',J:'ᴊ',K:'ᴋ',L:'ʟ',M:'ᴍ',N:'ɴ',O:'ᴏ',P:'ᴘ',Q:'ǫ',R:'ʀ',S:'s',T:'ᴛ',U:'ᴜ',V:'ᴠ',W:'ᴡ',X:'x',Y:'ʏ',Z:'ᴢ' },
  serifItalic: { a:'𝑎',b:'𝑏',c:'𝑐',d:'𝑑',e:'𝑒',f:'𝑓',g:'𝑔',h:'  ',i:'𝑖',j:'𝑗',k:'𝑘',l:'𝑙',m:'𝑚',n:'𝑛',o:'𝑜',p:'𝑝',q:'𝑞',r:'𝑟',s:'𝑠',t:'𝑡',u:'𝑢',v:'𝑣',w:'𝑤',x:'𝑥',y:'𝑦',z:'𝑧',A:'𝐴',B:'𝐵',C:'𝐶',D:'𝐷',E:'𝐸',F:'𝐹',G:'𝐺',H:'𝐻',I:'𝐼',J:'target',K:'𝐾',L:'𝐿',M:'𝑀',N:'𝑁',O:'𝑂',P:'𝑃',Q:'𝑄',R:'𝑅',S:'𝑆',T:'𝑇',U:'𝑈',V:'𝑉',W:'𝐹',X:'𝑋',Y:'𝑌',Z:'𝑍' },
  parentheses: { a:'㈠',b:'㈡',c:'㈢',d:'㈣',e:'㈤',f:'㈥',g:'㈦',h:'㈧',i:'㈨',j:'㈩',k:'⒦',l:'⒧',m:'⒨',n:'⒩',o:'⒪',p:'⒫',q:'⒬',r:'⒭',s:'⒮',t:'⒯',u:'⒰',v:'⒱',w:'⒲',x:'⒳',y:'⒴',z:'⒵',A:'⒜',B:'⒝',C:'⒞',D:'⒟',E:'⒠',F:'⒡',G:'⒢',H:'⒣',I:'⒤',J:'⒥',K:'⒦',L:'⒧',M:'⒨',N:'⒩',O:'⒪',P:'⒫',Q:'⒬',R:'⒭',S:'⒮',T:'⒯',U:'⒰',V:'⒱',W:'⒲',X:'⒳',Y:'⒴',Z:'⒵' }
};
