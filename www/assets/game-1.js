/* ============================================================
   TRIVIA OR NADA — game script, part 1 of 6 (speed pass).
   The game's single script now ships as six sequential files
   (assets/game-1.js ... assets/game-6.js) so the cover paints
   from the small index.html first and these files stream in
   behind it. The bootstrap in index.html loads them with
   async=false: they download in parallel and EXECUTE strictly
   in order, exactly as the one original script ran — statement
   order, pool contents, and every pool's internal order are
   unchanged (challenge links and Daily seeds depend on it).
   Part 1 holds every function declaration plus the hoisted
   variable bindings; parts 2-6 hold the executable statements
   (the question banks and the code woven through them) in
   their original order. Do not reorder parts or statements.
   ============================================================ */
"use strict";
var _rngFn,CHALLENGE_LINK_BASE,dealBypassSeen,challengeDeal,CHALLENGE,LOAD_BANK_SEED,PIC_PACK_MAP,PIC_CACHE_NAME,picPackPromises,picPackEntries,picURLCache,picRenderSeq,TEXT,CAPITALS,CAP_PAIRS,ALL_CAPITALS,CAP_REGION,CAP_CONTINENT,PICS,TYPED,SUPERHARD,EXTREMEHARD,LUDICROUSHARD,IMPOSSIBLEHARD,GENIUSHARD,NEWCAT,NEWBANKS,NEW_ALL,MONTH_NAMES,SEASON_NAMES,COLOR_NAMES,NUMWORD_VAL,QUANT_WORDS,NAME_GENDER,NAME_GROUP,COUNTRY_REGION,CITY_STATES,SKY_NAMES,SKY_NORM,GENDER_NORM,GROUP_NORM,COUNTRY_NORM,COLOR_NORM,MONTH_NORM,SEASON_NORM,CONTINENT_NORM,US_STATES,STATE_NORM,STATE_NEIGHBORS,CITY_NAMES,CITY_NORM,STATE_NICKNAMES,STATE_NICKNAME_NORM,FOOD_NAMES,FOOD_NORM,KIND_INFO_CACHE,KIND_INFO_ALL_CACHE,LEANN_TITLE_NORM,MUSIC_BAND_NORM,NUMWORD_BY_VAL,COUNTRY_SINGERS,INDUSTRY_POOLS,INDUSTRY_EXTRA,BRAND_INDUSTRY_NORM,STEM_INDUSTRY,DJ_RAW,DJ_FACES,DJ_ANSWERS,DJ_ANS_DOMAIN,FRENCH_AUTHORS,FRENCH_AUTHOR_NORM,DJ_REWRITE,DJ_MC,DJ_REAL,DJ_PLACES,DJ_FACE_HISTORICAL,DJ_FACE_CLASSIC,DJ_FACE_FEMALE,DJ_FACE_GROUPS,DJ_FACE_MC,LEANN_RAW,LEANN_ANSWERS,LEANN_ALBUM_TITLES,LEANN_SONG_TITLES,LEANN_FILM_TITLES,LEANN_TV_TITLES,LEANN_LABELS,LEANN_CERTS,LEANN_MC,LEANN_PIC,FACE_GENDER,STATE_FLAG_DATA,ALL_MC_QUESTIONS,KIND_ENFORCE_STATS,INDUSTRY_ENFORCE_STATS,DOG_CHAR_NAMES,CAT_CHAR_NAMES,DOG_NORM,CAT_NORM,SUBKIND_POOLS,DJ_STATE_ABBR,DJ_PLACE_NAMES,PLACE_NORM,ROUTE_STATES,DJ_SUBKIND_STATS,BAKED_TRAV,BAKED_FAILED,BAKED1,BAKED2,SIDE_NORM,COMPASS_NORM,COMPASS_NAMES,ANIMAL_NAMES,ANIMAL_NORM,PAIR_ANIMAL_STRINGS,PAIR_ANIMAL_NORM,ANIMAL_HOMONYM,ANIMAL_PHRASE_NORM,LANG_NAMES,LANG_NORM,BODY_NAMES,BODY_NORM,SPORT_NAMES,SPORT_NORM,WEAPON_NAMES,WEAPON_NORM,PRESIDENT_NAMES,PRESIDENT_NORM,ALPHABET_LETTERS,NOBEL_CATS,NOBEL_NORM,ELEMENT_NAMES,ELEMENT_NORM,SHEET_BRAND,SHEET_BRAND_POOLS,SHEET_PLACE,BABY_ANIMAL_NAMES,BABY_ANIMAL_NORM,US_ABBR_NORM,STATE_NAME_NORM,BIRD_NAMES,FISH_NAMES,BIRD_NORM,FISH_NORM,CITY_HARVEST_NORM,INITIALISM_NORM,SHEET_BRAND_ALL,SYMBOL_STRINGS,CHAR_NAMES,CHAR_POOL,CHAR_NORM,CHAR_QA,PHRASE_CONNECTORS,PHRASE_AUX,TITLE_STEM_RE,AMBIG_BRAND_NORM,BRAND_CLUE_RE,TEAM_POOLS,TEAM_LEAGUE,TEAM_EXTRA,TEAM_AMBIG,TEAM_UNAMBIG,TEAM_CANON,TITLE_STRINGS,NON_TITLE_ANSWER_NORM,AUTHOR_STRINGS,AUTHOR_BY_CAT,AUTHOR_STEM_RE,AUTHOR_NORM,AUTHOR_LIST,FIELD_ACRONYM_NORM,SUBKIND_POOLS2,SUBKIND_ENFORCE_STATS,CASE_CANON,CASE_SURNAME,CASE_STOP,CASE_FIXED,ACCENT_TWIN_STATS,FINAL_SET_STATS,WEAK_CITY_REGION,WEAK_ORD_WORDS,WEAK_ENFORCE_STATS,BAKED3,CANADA_PAIRS,MODES,NAME_TITLES,REGNAL_SUFFIX,ROMAN_BY_NUM,CARDINAL_TENS,ORDINAL_WORDS,CARDINAL_WORDS,ORDINAL_FILLER,ANSWER_ALIASES,PLURAL_PAIRS,NOT_PLURAL,TIERS,ROUND_PTS,ROUND_NAMES,BONUS_TIER_NAME,LEGEND_TIERS,state,sessionBest,PACE_TIMES,LEGEND_TIMES,coverPace,HS_KEY,HS_KEEP,HS_SHOW,hsSdMigrated,DAILY_KEY,dailyCache,SHARED_SUBMIT_URL,SHARED_BOARD_URL,SHARED_RENAME_URL,PENDING_RENAME_KEY,SHARED_MODES,sharedRenameWanted,sharedRenameInFlightKey,PROG_KEY,timerId,timeLeft,timeTotal,locked,qClockAllotted,qClockSettled,timerGen,nextGauntletQ10Strict,SEEN_KEY,GAMECOUNT_KEY,SEEN_COOLDOWN,SEEN_LONG_AGO,seenSet,gameCountCache,PRACTICE_PREFIX,PRACTICE_COUNTER_KEY,practiceLruPool,lastTickSec,timerTimeoutFn,SOUND_KEY,soundMuted,actx,sfxSilent,VAGUE_FLAGGED,FRAGMENT_FLAGGED,DEFINITION_FLAGGED,DEFINITION_EXCLUDED,SUBJECTLESS_EXCLUDED,TAUTOLOGY_EXCLUDED,GARBLED_EXCLUDED,NOT_CLUE_EXCLUDED,REWRITE_HELD_EXCLUDED,LEANN_GAME_CAP,VIDEOGAME_GAME_CAP,VG_STEM_RE,VG_SUBJECT_RE,VG_ANSWER_NORM,NAME_FORM_PARTICLES,GEO_PIC_CATS,GEO_GAUNTLET_CAP,GEO_MIXED_CAP,MIX_BANKS,BONUS_CAP,pendingFlags,CHALLENGE_POOLS,EXPLAIN_EXTRA,quitWarnOpen,quitWarnItem,PROFILE_KEY,creatorRevealed,logoTapCount,logoTapTimer,coverLogoEl,SHARE_SITE_URL,SC_FONT,SC_MONO,scoreCardCache,SCORE_CARD_DESIGN,scoreCardUrl,overlayReturnFocus,typedUserHold,grid;

function rand(){ return _rngFn ? _rngFn() : Math.random(); }
function installSeed(seedStr){
  if(seedStr===null || seedStr===undefined || seedStr===""){ _rngFn=null; return; }
  var a=0, s=String(seedStr);
  for(var i=0;i<s.length;i++){ a=Math.imul(a^s.charCodeAt(i), 3432918353); a=(a<<13)|(a>>>19); }
  a>>>=0;
  _rngFn=function(){
    a=(a+0x6D2B79F5)|0;
    var t=Math.imul(a^(a>>>15), 1|a);
    t=(t+Math.imul(t^(t>>>7), 61|t))^t;
    return ((t^(t>>>14))>>>0)/4294967296;
  };
}
function newSeedString(){
  var chars="ABCDEFGHJKMNPQRSTUVWXYZ23456789", out="";
  for(var i=0;i<10;i++) out+=chars[Math.floor(Math.random()*chars.length)];
  return out;
}
/* ================= QUESTION POOLS ================= */
function mc(q, choices, a, fact){ return {type:"mc", q:q, choices:choices, a:a, fact:fact||""}; }
function pic(img, q, choices, a, cat, credit, page, fact){
  return {type:"mc", img:img, q:q, choices:choices, a:a, cat:cat, credit:credit, page:page, fact:fact||""};
}
function picMime(name){
  if(/\.webp$/i.test(name)) return "image/webp";
  if(/\.png$/i.test(name)) return "image/png";
  if(/\.gif$/i.test(name)) return "image/gif";
  return "image/jpeg";
}
function picUnzipStored(buf){
  var u8=new Uint8Array(buf), dv=new DataView(buf);
  var eocd=-1, floor=Math.max(0, buf.byteLength-65558);
  for(var i=buf.byteLength-22;i>=floor;i--){ if(dv.getUint32(i,true)===0x06054b50){ eocd=i; break; } }
  if(eocd<0) throw new Error("Picture pack is not a valid archive");
  var count=dv.getUint16(eocd+10,true), p=dv.getUint32(eocd+16,true);
  var dec=(typeof TextDecoder!=="undefined") ? new TextDecoder("utf-8") : null;
  var out={};
  for(var n=0;n<count;n++){
    if(p+46>buf.byteLength || dv.getUint32(p,true)!==0x02014b50) break;
    var method=dv.getUint16(p+10,true), csize=dv.getUint32(p+20,true);
    var nlen=dv.getUint16(p+28,true), elen=dv.getUint16(p+30,true), clen=dv.getUint16(p+32,true);
    var lho=dv.getUint32(p+42,true);
    var raw=u8.subarray(p+46, p+46+nlen), name="";
    if(dec) name=dec.decode(raw);
    else for(var k=0;k<raw.length;k++) name+=String.fromCharCode(raw[k]);
    if(method!==0) throw new Error("Picture pack uses unsupported compression");
    var lnlen=dv.getUint16(lho+26,true), lelen=dv.getUint16(lho+28,true);
    var off=lho+30+lnlen+lelen;
    out[name]=new Blob([u8.subarray(off, off+csize)], {type:picMime(name)});
    p+=46+nlen+elen+clen;
  }
  return out;
}
function picFetchBuffer(url){
  var store=null;
  function fromNetwork(){
    return fetch(url).then(function(r){
      if(!r.ok) throw new Error("Picture pack download failed ("+r.status+")");
      if(store){ try{ var pr=store.put(url, r.clone()); if(pr && pr.catch) pr.catch(function(){}); }catch(e){} }
      return r.arrayBuffer();
    });
  }
  if(typeof caches==="undefined" || !caches.open) return fromNetwork();
  return caches.open(PIC_CACHE_NAME).then(function(c){
    store=c;
    return c.match(url).then(function(hit){
      if(hit) return hit.arrayBuffer();
      return fromNetwork();
    });
  }).catch(function(){ store=null; return fromNetwork(); });
}
function picEvictCache(packId){
  /* Drop a pack's Cache Storage copy — a truncated or corrupt
     cached download must never be served twice: after eviction the
     next attempt fetches the pack fresh from the network. */
  try{
    if(typeof caches==="undefined" || !caches.open) return;
    caches.open(PIC_CACHE_NAME).then(function(c){ c.delete("assets/"+packId+".zip"); }).catch(function(){});
  }catch(e){}
}
function loadPicPack(packId){
  if(picPackEntries[packId]) return Promise.resolve(picPackEntries[packId]);
  if(picPackPromises[packId]) return picPackPromises[packId];
  var pr=picFetchBuffer("assets/"+packId+".zip").then(function(buf){
    var entries=picUnzipStored(buf);
    picPackEntries[packId]=entries;
    delete picPackPromises[packId];
    return entries;
  }, function(err){
    /* A failed pack is not cached as a failure: the next picture
       from this category tries the download again — and any cached
       copy is evicted first, so a corrupt cache entry cannot make
       the same pack fail forever on this device. */
    delete picPackPromises[packId];
    picEvictCache(packId);
    throw err;
  });
  picPackPromises[packId]=pr;
  return pr;
}
function picPackOf(img){
  var ref=PIC_PACK_MAP[img];
  return ref ? ref[0] : null;
}
function resolvePicURL(img){
  if(picURLCache[img]) return Promise.resolve(picURLCache[img]);
  var ref=PIC_PACK_MAP[img];
  if(!ref) return Promise.resolve(img);
  return loadPicPack(ref[0]).then(function(entries){
    var blob=entries[ref[1]];
    if(!blob) throw new Error("Picture missing from its pack");
    var url=URL.createObjectURL(blob);
    picURLCache[img]=url;
    return url;
  });
}
/* Background prefetch: once a game has started, the packs its
   dealt questions will need are fetched quietly, in deal order,
   while the player answers — so by the time a picture question
   comes up its pack is usually already here and there is no pause
   at all. Nothing is prefetched on the cover, and on a slow or
   data-saving connection prefetch is skipped entirely and packs
   load on demand instead. */
function picSlowConnection(){
  try{
    var c=navigator.connection;
    if(!c) return false;
    if(c.saveData) return true;
    var et=c.effectiveType||"";
    return et==="slow-2g" || et==="2g";
  }catch(e){ return false; }
}
function prefetchGamePacks(){
  if(!state || !state.qs || picSlowConnection()) return;
  var order=[], seen={};
  state.qs.forEach(function(it){
    var q=it && it.data;
    if(!q || !q.img) return;
    var p=picPackOf(q.img);
    if(p && !seen[p]){ seen[p]=1; order.push(p); }
  });
  var i=0;
  function next(){
    if(i>=order.length) return;
    var p=order[i++];
    loadPicPack(p).then(function(){ setTimeout(next, 200); }, function(){ setTimeout(next, 200); });
  }
  setTimeout(next, 600);
}
function setPicControlsEnabled(on){
  var area=$("qAnswerArea"); if(!area) return;
  var els=area.querySelectorAll("button, input");
  for(var i=0;i<els.length;i++) els[i].disabled=!on;
}
/* A picture that cannot be shown — after the pack download has
   been retried once, with any corrupt cached copy evicted (see
   holdTimerForPicture and loadPicPack) — never costs the player
   the question. The failure is definitive at that point, so the
   question is settled as CORRECT on the spot, for its full value
   in every mode, and the reveal says plainly why. The clock never
   starts for a picture that failed: there is nothing to answer. */
function picShowError(seq){
  awardPicFailure(seq);
}
function awardPicFailure(seq){
  if(seq!==picRenderSeq || locked || !state) return;
  var item=state.qs[state.idx];
  if(!item || !item.data || !item.data.img) return;
  /* A question already in the history — a reveal restored after a
     reload — was already settled once: never award it twice. */
  if(state.history.length!==state.idx) return;
  locked=true; stopTimer();
  var q=item.data;
  var ph=$("qImgLoad") || ($("qMedia") ? $("qMedia").querySelector(".qimg") : null);
  if(ph && ph.parentNode){
    var div=document.createElement("div");
    div.className="qimgload qimgerr";
    div.textContent="\u26A0 The picture couldn\u2019t be loaded \u2014 so this one is on us: you get the points, no answer needed.";
    ph.parentNode.replaceChild(div, ph);
  }
  setPicControlsEnabled(false);
  var input=$("typedInput"); if(input) input.disabled=true;
  var sb=$("typedSubmit"); if(sb) sb.disabled=true;
  var pb=$("passBtn"); if(pb) pb.disabled=true;
  var before=state.score, note="";
  var PICFAIL="The picture couldn\u2019t load, so the points are yours \u2014 counted as a correct answer. ";
  if(item.kind==="bonus"){
    if(item.bonusIdx<4){
      state.bonusEarned+=5; state.score=Math.min(BONUS_CAP, state.score+5);
      state.streak++; state.bestStreak=Math.max(state.bestStreak,state.streak);
      note=PICFAIL+"+5 bonus points! Bonus so far: "+state.bonusEarned+" pts \u2014 total now "+state.score+".";
    } else if(state.bonusEarned>0){
      var bAdd=state.bonusEarned;
      state.score=Math.min(BONUS_CAP, state.score+bAdd); state.bonusEarned=bAdd*2; state.bonusDoubled=true;
      state.streak++; state.bestStreak=Math.max(state.bestStreak,state.streak);
      note=PICFAIL+"DOUBLER WON! Your "+bAdd+" bonus pts double to "+state.bonusEarned+". Total now "+state.score+".";
    } else {
      state.streak++; state.bestStreak=Math.max(state.bestStreak,state.streak);
      note=PICFAIL+"The doubler counts as correct \u2014 but there were no bonus points to double, so your total stays "+state.score+".";
    }
  }
  else if(isJackpotMode(state.mode) && item.kind==="finale"){
    if(item.round===3 && typeof state.finalWager==="number"){
      var w=state.finalWager; state.score=before+w;
      note=PICFAIL+(w>0 ? "WAGER WON! You wagered "+w+" pts and the finale counts as correct \u2014 +"+w+". Total now "+state.score+"." : "The finale counts as correct! Nothing was at stake (no wager on a 0 total), so your total stays "+state.score+".");
    } else {
      state.score=before*2;
      note=PICFAIL+"DOUBLED! "+before+" \u2192 "+state.score+" points.";
    }
    state.streak++; state.bestStreak=Math.max(state.bestStreak,state.streak);
  }
  else {
    if(q.type==="mc"){
      state.score+=item.pts;
      if(state.mode==="gauntlet" || state.mode==="daily") state.roundBank+=item.pts;
    } else if(isJackpotMode(state.mode)){
      state.score+=item.pts; state.roundBank+=item.pts;
    } else {
      state.score+=(item.pts||20);
    }
    state.streak++; state.bestStreak=Math.max(state.bestStreak,state.streak);
    note=PICFAIL+"+"+(item.pts||20)+" points.";
  }
  record(item, "correct", "(picture couldn\u2019t load \u2014 points awarded)");
  finishReveal(item, "correct", null, note);
}
/* The question clock waits for the picture. While a picture
   question's pack is downloading and unzipping, the answer
   controls stay disabled and NO timer runs: the countdown is only
   started from the picture's own load event, once it is actually
   on screen, so a slow download can never eat answering time —
   on multiple-choice and typed picture questions alike, Round 4
   and the finales included. */
function holdTimerForPicture(q, timerPlan){
  var seq=picRenderSeq;
  stopTimer();
  var pill=$("timerPill");
  if(pill){ pill.textContent="\u23F1 \u2014"; pill.classList.remove("low"); }
  syncTimerRing(1, false); /* reskin: clock is full, waiting on the picture */
  setPicControlsEnabled(false);
  var started=false;
  function startClock(){
    if(started) return; started=true;
    if(seq!==picRenderSeq || locked || !timerPlan) return;
    startTimer(timerPlan.secs, timerPlan.cb);
  }
  function showURL(url){
    if(seq!==picRenderSeq) return;
    var ph=$("qImgLoad"); if(!ph) return;
    var im=document.createElement("img");
    im.className="qimg";
    im.alt="Question photo \u2014 identify the subject";
    im.onload=function(){
      if(seq!==picRenderSeq) return;
      if(!locked){
        setPicControlsEnabled(true);
        var ti=$("typedInput"); if(ti) ti.focus();
      }
      startClock();
    };
    im.onerror=function(){ picShowError(seq); };
    im.src=url;
    ph.parentNode.replaceChild(im, ph);
    if(im.complete && im.naturalWidth>0){
      if(!locked){
        setPicControlsEnabled(true);
        var ti2=$("typedInput"); if(ti2) ti2.focus();
      }
      startClock();
    }
  }
  resolvePicURL(q.img).then(showURL, function(){
    /* A first failure is not yet definitive: loadPicPack has
       evicted any corrupt cached copy of the pack, so one fresh
       attempt is made before the picture is declared unloadable
       and its points are awarded (see awardPicFailure). */
    resolvePicURL(q.img).then(showURL, function(){ picShowError(seq); });
  });
}

function typed(q, answer, opts){
  opts = opts || {};
  return {type:"typed", q:q, answer:answer, accept:opts.accept||[], exact:!!opts.exact,
          rule:opts.rule||"", fact:opts.fact||""};
}
function genCapital(place, capital){
  var myRegion=CAP_REGION[capital]||"", myCont=CAP_CONTINENT[myRegion]||"";
  var seen={}, bands=[[],[],[]];
  ALL_CAPITALS.forEach(function(c){
    if(c===capital || seen[c]) return; seen[c]=1;
    var r=CAP_REGION[c]||"";
    var band= r===myRegion ? 0 : (CAP_CONTINENT[r]===myCont ? 1 : 2);
    bands[band].push(c);
  });
  var picks=[];
  bands.forEach(function(band){
    var shuffled=shuffle(band);
    while(shuffled.length && picks.length<3) picks.push(shuffled.pop());
  });
  var choices=[capital].concat(picks);
  for(var i=choices.length-1;i>0;i--){ var j=Math.floor(rand()*(i+1)); var t2=choices[i]; choices[i]=choices[j]; choices[j]=t2; }
  return mc("What is the capital of "+place+"?", choices, choices.indexOf(capital));
}

/* ================= FINALE POOL EXPANSION TO 200 (2026-11-11) =================
   Owner directive: the same finales kept coming up, so every
   regular-Gauntlet typed-finale pool now holds 200 dealable
   questions — Easy (Q5) 72 -> 200, Medium (Q10) 151 -> 200,
   Hard (Q15) 103 -> 200, Very Hard (Q20) 31 -> 200 — so the
   25-game cooldown can be honoured many times over at every
   finale slot. 443 new native typed finales follow: verified
   facts only, one single unambiguous answer each, the expected
   form stated up front where it matters, no answer repeated
   inside its own pool, geography held to about one in seven
   of the additions in each pool, at most two video-game
   questions per pool, and no new LeAnn Rimes questions. The
   Legend and Bonus tier banks are untouched. Dealable counts
   are the runtime counts after the standard finale filters
   (noDeal / subjectless / prompt-contains-answer /
   definition-sentence), verified by enumeration. */
function finPush(pool, cat, q, answer, opts){ var o=typed(q, answer, opts||{}); o.cat=cat; pool.push(o); }


/* ================= SUPER HARD POOL ================= */
/* One hundred new typed-only questions written for the Super
   Hard tier — the first of the difficulty tiers above the
   regular game's Very Hard. Every question has one single
   unambiguous typed answer and a verified "Why this is right:"
   fact. This pool deals ONLY in the bonus round (all five
   questions) and in Legend Gauntlet Round 1 (all five
   questions, finale included) — it is not part of TEXT, TYPED,
   or any category bank, so the regular Gauntlet and practice
   can never deal it. When the pool runs short of unseen
   questions, the bonus dealer falls back to the hardest
   Very Hard pool exactly as before. */
function styped(cat, q, answer, opts){ var o=typed(q, answer, opts||{}); o.cat=cat; o.superTier=true; return o; }

/* ================= EXTREMELY HARD POOL ================= */
/* One hundred new typed-only questions written for the
   Extremely Hard tier — the second of the difficulty tiers
   above the regular game's Very Hard, and a clear step harder
   than the Super Hard pool: more obscure facts, exact dates,
   lesser-known figures, and precise terms. Every question has
   one single unambiguous typed answer and a verified "Why this
   is right:" fact. This pool deals ONLY in Legend Gauntlet
   Round 2 (all five questions, finale included) — it is not
   part of TEXT, TYPED, SUPERHARD, or any category bank, so the
   regular Gauntlet, practice, and the bonus round can never
   deal it. */
function xtyped(cat, q, answer, opts){ var o=typed(q, answer, opts||{}); o.cat=cat; o.extremeTier=true; return o; }

/* ================= LUDICROUSLY HARD POOL ================= */
/* One hundred new typed-only questions written for the
   Ludicrously Hard tier — the third of the difficulty tiers
   above the regular game's Very Hard, and a clear step harder
   than the Extremely Hard pool: more obscure facts, exact
   dates, lesser-known figures, and precise technical terms.
   Every question has one single unambiguous typed answer and
   a verified "Why this is right:" fact. This pool deals ONLY
   in Legend Gauntlet Round 3 (all five questions, finale
   included) — it is not part of TEXT, TYPED, SUPERHARD,
   EXTREMEHARD, or any category bank, so the regular Gauntlet,
   practice, and the bonus round can never deal it. */
function ltyped(cat, q, answer, opts){ var o=typed(q, answer, opts||{}); o.cat=cat; o.ludicrousTier=true; return o; }

/* ================= IMPOSSIBLY HARD POOL ================= */
/* One hundred new typed-only questions written for the
   Impossibly Hard tier — the fourth of the difficulty tiers
   above the regular game's Very Hard, and a clear step harder
   than the Ludicrously Hard pool: still more obscure facts,
   exact dates, lesser-known figures, and precise technical
   terms. Every question has one single unambiguous typed
   answer and a verified "Why this is right:" fact. This pool
   deals ONLY in Legend Gauntlet Round 4 (its four regular
   questions) — it is not part of TEXT, TYPED, SUPERHARD,
   EXTREMEHARD, LUDICROUSHARD, or any category bank, so the
   regular Gauntlet, practice, and the bonus round can never
   deal it. The Round 4 finale (Q20) is not part of this pool:
   it is the Genius Level question and deals from the
   GENIUSHARD pool (see below). */
function ityped(cat, q, answer, opts){ var o=typed(q, answer, opts||{}); o.cat=cat; o.impossibleTier=true; return o; }

/* ================= GENIUS LEVEL POOL ================= */
/* One hundred new typed-only questions written for the Genius
   Level tier — the fifth and last of the difficulty tiers
   above the regular game's Very Hard, and the hardest
   questions in the game: a clear step harder than the
   Impossibly Hard pool, with the most obscure facts, exact
   dates, lesser-known figures, and precise technical terms.
   Every question has one single unambiguous typed answer and
   a verified "Why this is right:" fact. This pool deals ONLY
   as the Legend Gauntlet's final question (Q20, the Genius
   Level finale) — it is not part of TEXT, TYPED, SUPERHARD,
   EXTREMEHARD, LUDICROUSHARD, IMPOSSIBLEHARD, or any category
   bank, so the regular Gauntlet, practice, and the bonus
   round can never deal it. */
function gtyped(cat, q, answer, opts){ var o=typed(q, answer, opts||{}); o.cat=cat; o.geniusTier=true; return o; }

/* ================= NEW CATEGORY BANKS =================
   Law, Chemistry, Periodic Table, Sciences, Medical, Popular
   Culture, and Music — verified, well-established facts only. Law questions are
   US law and say so where it matters; medical questions are general
   anatomy / physiology / history facts, never diagnosis or treatment
   advice. Distractors stay in the same domain (and era, for pop
   culture) as the correct answer. */
function cmc(cat, q, choices, a, fact, accept){ var o=mc(q, choices, a, fact); o.cat=cat; if(accept && accept.length) o.accept=accept.slice(); return o; }

function kindNumVal(t){ var m=String(t).replace(/,/g,"").match(/-?\d+(?:\.\d+)?/); return m?parseFloat(m[0]):null; }
function kindWordNumVal(n){
  var toks=n.split(" ").filter(Boolean), total=0, cur=0, any=false, i, v;
  if(!toks.length) return null;
  for(i=0;i<toks.length;i++){
    if(toks[i]==="and") continue;
    if(!(toks[i] in NUMWORD_VAL)) return null;
    any=true; v=NUMWORD_VAL[toks[i]];
    if(v===100) cur=(cur||1)*100;
    else if(v>=1000){ total+=(cur||1)*v; cur=0; }
    else cur+=v;
  }
  return any? total+cur : null;
}
/* Classify an answer string: {kind, gender?, region?, value?}. Kinds:
   decade, year, fulldate, month, season, number, quantity, person,
   group, country, continent, color, other. */
function kindInfoRaw(s){
  var t=String(s==null?"":s).trim();
  if(!t) return {kind:"other"};
  var n=norm(t), m;
  if((m=t.match(/^(the\s+)?(\d{4})\s?['’]?s$/i))) return {kind:"decade", value:parseInt(m[2],10)};
  if(/^\d{4}$/.test(t) && +t>=1000 && +t<=2099) return {kind:"year", value:+t};
  if((m=t.match(/^([A-Z][a-z]+) (\d{1,2}), (\d{4})$/)) && (norm(m[1]) in MONTH_NORM))
    return {kind:"fulldate", value:(+m[3])*372+MONTH_NORM[norm(m[1])]*31+(+m[2])};
  if(n in MONTH_NORM) return {kind:"month", value:MONTH_NORM[n]};
  if(n in SEASON_NORM) return {kind:"season"};
  if(GROUP_NORM[n]) return {kind:"group"};
  if(GENDER_NORM[n]) return {kind:"person", gender:GENDER_NORM[n]};
  if(CONTINENT_NORM[n]) return {kind:"continent"};
  if(COUNTRY_NORM[n]) return {kind:"country", region:COUNTRY_NORM[n]};
  if(STATE_NORM[n]) return {kind:"state", state:STATE_NORM[n]};
  if(/^(no\.?|number)\s+\d+/i.test(t) || djIsNum(t) || /^\d+(st|nd|rd|th)$/i.test(t)){
    var v=kindNumVal(t); if(v!==null) return {kind:"number", value:v};
  }
  var wv=kindWordNumVal(n);
  if(wv!==null) return {kind:"number", value:wv};
  if(/^more than\s+\d/i.test(t) || /^\d+\s*[-\u2013]\s*\d+$/.test(t) || /^\d+'\d+/.test(t) ||
     /^\d[\d,\.]*\s*(mph|feet|foot|ft|miles?|mi|weeks?|days?|years?|yrs?|gallons?|bottles?|minutes?|mins?|hours?|hrs?|seconds?|secs?|pounds?|lbs?|ounces?|inches|inch|cm|mm|km|meters?|metres?|liters?|litres?|dollars?|cents?|percent|%|o'clock|miles?\/day)$/i.test(t)){
    var q=kindNumVal(t); if(q!==null) return {kind:"quantity", value:q};
  }
  if(COLOR_NORM[n]) return {kind:"color"};
  if(SKY_NORM[n]) return {kind:"sky"};
  return {kind:"other"};
}
/* The type/gender test itself: may candStr sit next to an answer whose
   kind info is ai? */
function kindCompatible(ai, candStr){
  var ci=kindInfo(candStr), ak=ai.kind;
  if(ak==="person") return ci.kind==="person" && ci.gender===ai.gender;
  if(ak==="group") return ci.kind==="group";
  if(ak==="country") return ci.kind==="country";
  if(ak==="state") return ci.kind==="state";
  if(ak==="continent") return ci.kind==="continent";
  if(ak==="number") return ci.kind==="number" || !!QUANT_WORDS[norm(candStr)];
  if(ak==="quantity") return ci.kind==="quantity";
  if(ak==="other") return ci.kind==="other";
  return ci.kind===ak; /* decade, year, fulldate, month, season, color */
}
/* Gender/kind with the picture and DJ-face tables merged in — those
   are defined later in the file, so this is only called at/after the
   enforcement pass and at render time, never during bank building. */
function genderOfName(s){
  var n=norm(s);
  if(GROUP_NORM[n]) return "g";
  if(GENDER_NORM[n]) return GENDER_NORM[n];
  if(typeof FACE_GENDER!=="undefined" && FACE_GENDER[s]) return FACE_GENDER[s];
  if(typeof DJ_FACE_GROUPS!=="undefined"){
    if(DJ_FACE_GROUPS.indexOf(s)>-1) return "g";
    if(DJ_FACE_FEMALE.indexOf(s)>-1) return "f";
    if(typeof DJ_FACES!=="undefined" && DJ_FACES.indexOf(s)>-1) return "m";
  }
  return null;
}
function kindInfo(s){
  var key=String(s==null?"":s), hit=KIND_INFO_CACHE[key];
  if(hit) return hit;
  var r=kindInfoRaw(s);
  KIND_INFO_CACHE[key]=r;
  return r;
}
function kindInfoAllRaw(s){
  var info=kindInfo(s);
  if(info.kind==="other"){
    var g=genderOfName(s);
    if(g==="g") return {kind:"group"};
    if(g) return {kind:"person", gender:g};
  }
  return info;
}
function kindInfoAll(s){
  var key=String(s==null?"":s), hit=KIND_INFO_ALL_CACHE[key];
  if(hit) return hit;
  var r=kindInfoAllRaw(s);
  KIND_INFO_ALL_CACHE[key]=r;
  return r;
}
function kindCompatibleQ(ai, candStr, q, ansStr){
  if(q){
    /* Music band questions: a place-named band and its place-named
       company are the same kind — the band — inside a Music
       question (see MUSIC_BAND_NORM). Without this, "Kansas" the
       band fails the kind test against "Boston" the band (a state
       next to an "other") and the set is repaired into places. */
    if(ansStr && q.cat==="Music" && MUSIC_BAND_NORM[norm(ansStr)] && MUSIC_BAND_NORM[norm(candStr)]) return true;
    /* LeAnn title questions: when the question asks for an album or
       song title and both the answer and the candidate are her
       album/song titles, they match — even when the title is her own
       name (the eponymous album) or a colour word ("Blue"). */
    if(ansStr && q.cat==="LeAnn Rimes" && /album|compilation|song|single|duet/i.test(q.q||"")){
      if(LEANN_TITLE_NORM===null && typeof LEANN_ALBUM_TITLES!=="undefined"){
        LEANN_TITLE_NORM={};
        LEANN_ALBUM_TITLES.concat(LEANN_SONG_TITLES).forEach(function(x){ LEANN_TITLE_NORM[norm(x)]=1; });
      }
      if(LEANN_TITLE_NORM && LEANN_TITLE_NORM[norm(ansStr)] && LEANN_TITLE_NORM[norm(candStr)]) return true;
    }
    var cn=norm(candStr), ck=kindInfoAll(candStr).kind;
    /* Continent/island questions mix country and continent names by
       design ("largest island", "smallest continent") — the place
       family is the subject there. */
    if(/continent|island/i.test(q.q||"") &&
       (ck==="country" || ck==="continent") &&
       (ai.kind==="country" || ai.kind==="continent" || ai.kind==="other")) return true;
    /* A city-state (Monaco, Vatican City, Singapore) is a fair answer
       to a "which city" question even though it is also a country. */
    if(/\bcity\b/i.test(q.q||"") && ai.kind==="other" && ck==="country" && CITY_STATES[cn]) return true;
    /* …and the mirror image: a city-state answering a "where is…"
       question is a city for this purpose, so its city distractors
       are its own kind — the St Peter's Square set keeps Florence,
       Venice, and Naples instead of being "repaired" into a set of
       countries. A question that asks for a country is excluded:
       there the country kind rules as usual. */
    if(ai.kind==="country" && ansStr && CITY_STATES[norm(ansStr)] && CITY_NORM[cn] &&
       /\bwhere\b/i.test(q.q||"") && !/\bcountry\b/i.test(q.q||"")) return true;
  }
  var ci=kindInfoAll(candStr), ak=ai.kind;
  if(ak==="person") return ci.kind==="person" && ci.gender===ai.gender;
  if(ak==="group") return ci.kind==="group";
  if(ak==="country") return ci.kind==="country";
  if(ak==="state") return ci.kind==="state";
  if(ak==="continent") return ci.kind==="continent";
  if(ak==="number") return ci.kind==="number" || !!QUANT_WORDS[norm(candStr)];
  if(ak==="quantity") return ci.kind==="quantity";
  if(ak==="other") return ci.kind==="other";
  return ci.kind===ak;
}
/* Closeness of a candidate to the answer: value distance for dated /
   numeric kinds (the subject test for dates and numbers is "close"),
   then answer-shape similarity (word count, length) as a tiebreak. */
function kindCloseness(ai, ansStr, candStr){
  /* Memoised (see norm): the score is a pure function of the answer
     kind/value and the two strings, and the load-time passes call it
     inside sort comparators over the same candidate pairs again and
     again. The key carries every input the score reads. */
  var cache=kindCloseness._cache||(kindCloseness._cache=new Map());
  var ckey=ai.kind+"|"+ai.value+"|"+ansStr+"|"+candStr;
  var chit=cache.get(ckey);
  if(chit!==undefined) return chit;
  var r=kindClosenessRaw(ai, ansStr, candStr);
  cache.set(ckey, r);
  return r;
}
function kindClosenessRaw(ai, ansStr, candStr){
  var ci=kindInfo(candStr), score=0;
  if(ai.value!==undefined && ci.value!==undefined){
    if(ai.kind==="number" || ai.kind==="quantity")
      score=Math.abs(Math.log((Math.abs(ci.value)+1)/(Math.abs(ai.value)+1)))*1000;
    else score=Math.abs(ci.value-ai.value);
  }
  var awc=String(ansStr).split(" ").length, cwc=String(candStr).split(" ").length;
  score+=Math.abs(cwc-awc)*2 + Math.abs(String(candStr).length-String(ansStr).length)/10;
  return score;
}
function numWordStr(v){
  if(v<0 || v>999 || Math.floor(v)!==v) return null;
  if(NUMWORD_BY_VAL[v] && v<=20) return NUMWORD_BY_VAL[v];
  if(v<100){
    var tens=Math.floor(v/10)*10, rest=v-tens;
    if(NUMWORD_BY_VAL[tens]===undefined) return null;
    return rest? NUMWORD_BY_VAL[tens]+"-"+NUMWORD_BY_VAL[rest] : NUMWORD_BY_VAL[tens];
  }
  if(v===100) return "hundred";
  return null;
}
function formatLikeNumber(ans, v){
  var t=String(ans).trim();
  if(!/\d/.test(t)){
    var w=numWordStr(v);
    if(w===null) return null;
    return /^[A-Z]/.test(t)? w.charAt(0).toUpperCase()+w.slice(1) : w;
  }
  return t.replace(/-?\d[\d,]*(?:\.\d+)?/, function(tok){
    var dec=(tok.split(".")[1]||"").length, out;
    if(dec>0) out=v.toFixed(dec);
    else out=String(Math.round(v));
    if(tok.indexOf(",")>-1 && out.indexOf(".")===-1) out=out.replace(/\B(?=(\d{3})+(?!\d))/g,",");
    return out;
  });
}
function genKindDistractors(ans, ai, used, need){
  var out=[], t=String(ans).trim(), i, v;
  /* Generation checks against its own copy of the used set — the
     caller marks the returned strings as used when it takes them. */
  var seen={};
  Object.keys(used||{}).forEach(function(k){ seen[k]=1; });
  function add(s){ if(out.length<need && s && !seen[norm(s)]){ seen[norm(s)]=1; out.push(s); } }
  if(ai.kind==="decade"){
    var pre=/^the\s/i.test(t)?"the ":"", apo=/['’]/.test(t)?"'s":"s";
    [10,-10,20,-20,30,-30,40,-40].forEach(function(d){ add(pre+(ai.value+d)+apo); });
  } else if(ai.kind==="year"){
    [1,-1,2,-2,3,-3,5,-5,8,-8,10,-10,15,-15,20,-20].forEach(function(d){
      v=ai.value+d; if(v>=1000 && v<=2099) add(String(v));
    });
  } else if(ai.kind==="fulldate"){
    var m=t.match(/^([A-Z][a-z]+) (\d{1,2}), (\d{4})$/);
    if(m){
      var mi=MONTH_NORM[norm(m[1])], day=+m[2], yr=+m[3];
      [[mi,day,yr-1],[mi,day,yr+1],[mi,day,yr-2],[mi,day,yr+2],
       [(mi+3)%12,day,yr],[(mi+9)%12,day,yr],[mi,day===15?2:15,yr-1],[mi,day===15?2:15,yr+1]
      ].forEach(function(p){ add(MONTH_NAMES[p[0]]+" "+p[1]+", "+p[2]); });
    }
  } else if(ai.kind==="month"){
    for(i=1;i<12 && out.length<need;i++){ add(MONTH_NAMES[(ai.value+i)%12]); add(MONTH_NAMES[(ai.value+12-i)%12]); }
  } else if(ai.kind==="season"){
    SEASON_NAMES.concat(["Fall"]).forEach(add);
  } else if(ai.kind==="color"){
    shuffle(COLOR_NAMES.slice()).forEach(add);
  } else if(ai.kind==="number" || ai.kind==="quantity"){
    v=ai.value;
    var step= v>=1000?100 : v>=100?10 : v>=20?2 : v>=1?1 : 0.5;
    [step,-step,2*step,-2*step,3*step,-3*step,5*step,-5*step,10*step,-10*step].forEach(function(d){
      var nv=v+d; if(nv>=0 && nv!==v) add(formatLikeNumber(t, nv));
    });
    if(out.length<need && v>0){ add(formatLikeNumber(t, v*2)); add(formatLikeNumber(t, Math.max(0, Math.floor(v/2)))); }
  }
  return out.slice(0, need);
}
function kindPrefLists(ai, subjectPref){
  var lists=[];
  if(subjectPref) lists.push(subjectPref);
  if(ai.kind==="person"){
    var keys=Object.keys(NAME_GENDER).filter(function(k){ return NAME_GENDER[k]===ai.gender; });
    lists.push(keys);
  } else if(ai.kind==="group"){ lists.push(Object.keys(NAME_GROUP)); }
  else if(ai.kind==="country"){
    var ks=Object.keys(COUNTRY_REGION);
    ks.sort(function(a,b){
      var ra=COUNTRY_REGION[a]===ai.region?0:1, rb=COUNTRY_REGION[b]===ai.region?0:1;
      return ra-rb;
    });
    lists.push(ks);
  }
  else if(ai.kind==="state"){
    /* Neighbouring states first — the same-region rule, applied to
       the answer state's own border list — then the rest. */
    var snb=(STATE_NEIGHBORS[ai.state]||[]).slice();
    lists.push(snb.concat(US_STATES.filter(function(s){ return s!==ai.state && snb.indexOf(s)===-1; })));
  }
  else if(ai.kind==="color"){ lists.push(COLOR_NAMES); }
  else if(ai.kind==="month"){ lists.push(MONTH_NAMES); }
  else if(ai.kind==="sky"){ lists.push(SKY_NAMES); }
  else if(ai.kind==="season"){ lists.push(SEASON_NAMES.concat(["Fall"])); }
  else if(ai.kind==="continent"){ lists.push(["Africa","Asia","Europe","Antarctica","North America","South America","Oceania"]); }
  return lists;
}
/* Shared distractor picker for the generated banks (Trivia Sheet, LeAnn):
   same kind (and gender) from the collection's own answers first,
   value-close and shape-close first; then the kind's preference
   lists; then generated in-domain alternatives. Never cross-kind. */
function pickKindDistractors(ans, localAnswers, opts){
  opts=opts||{};
  var ai=kindInfo(ans);
  var used={}; used[norm(ans)]=1;
  var picks=[];
  function take(list){
    for(var i=0;i<list.length && picks.length<3;i++){
      var n=norm(list[i]);
      if(!used[n]){ used[n]=1; picks.push(list[i]); }
    }
  }
  var cands=(localAnswers||[]).filter(function(x){ return norm(x)!==norm(ans) && kindCompatible(ai, x); });
  /* Decorate-sort: rank and closeness depend only on the candidate
     string, so each is computed once per candidate instead of once
     per comparison; the sort is stable, so the order is unchanged. */
  cands=cands.map(function(c){ return {c:c, r:opts.rank?opts.rank(c):0, s:kindCloseness(ai, ans, c)}; })
    .sort(function(x,y){ if(x.r!==y.r) return x.r-y.r; return x.s-y.s; })
    .map(function(o){ return o.c; });
  if(opts.rank){
    /* Rank groups are drained in order — the same-domain group
       fills the set before any other-domain candidate is taken,
       so subject plausibility is not left to the band shuffle. */
    var groups={}, order=[];
    cands.forEach(function(c){
      var r=opts.rank(c);
      if(!(r in groups)){ groups[r]=[]; order.push(r); }
      groups[r].push(c);
    });
    order.sort(function(a,b){ return a-b; });
    order.forEach(function(r){
      if(picks.length>=3) return;
      var g=groups[r], gband=Math.max(14, Math.floor(g.length/3));
      take(shuffle(g.slice(0, gband)));
      if(picks.length<3) take(g.slice(gband));
    });
  } else {
    var band=Math.max(14, Math.floor(cands.length/3));
    take(shuffle(cands.slice(0, band)));
    if(picks.length<3) take(cands.slice(band));
  }
  if(picks.length<3){
    kindPrefLists(ai, opts.pref).forEach(function(list){
      if(picks.length>=3) return;
      var f=list.filter(function(x){ return norm(x)!==norm(ans) && kindCompatible(ai, x); });
      f=f.map(function(c){ return {c:c, s:kindCloseness(ai, ans, c)}; }).sort(function(x,y){ return x.s-y.s; }).map(function(o){ return o.c; });
      take(shuffle(f.slice(0, Math.max(10, f.length))).concat(f));
      take(f);
    });
  }
  if(picks.length<3) take(genKindDistractors(ans, ai, used, 3-picks.length));
  return picks;
}
/* Broad subject domain of a DJ clue, from its wording — used only to
   rank same-kind candidates so a sports clue draws sports answers
   before film answers, a music clue music answers, and so on. */
function djDomainOf(text){
  var t=" "+String(text||"").toLowerCase()+" ";
  function has(){ for(var i=0;i<arguments.length;i++) if(t.indexOf(arguments[i])>-1) return true; return false; }
  if(has("song","sang","sung","album","band","singer","guitar","concert","chart","recorded","lyric","sings","vocalist","rap ")) return "music";
  if(has("movie","film","actor","actress","oscar","tv ","television","sitcom","episode","character","played in","voice of","series")) return "screen";
  /* The league initialisms match on word boundaries only: as raw
     substrings they fire inside ordinary words — "nfl" inside
     "sunflower" made a geography clue a sports clue. */
  if(/\b(nfl|nba|mlb|nhl)\b/.test(t) || has("football","baseball","basketball","hockey","golf","tennis","olympic","world series","super bowl","superbowl","bcs","playoff","ncaa","stadium","coach","quarterback","pitcher","nascar","boxing","wrestl","race car","trophy")) return "sports";
  if(has("president","war ","battle","king","queen","ancient","century","revolution","empire","founded","civil war","kingdom")) return "history";
  if(has("river","mountain","ocean","island","desert","planet","animal","bird","fish","tree","flower","species","shark","whale")) return "nature";
  if(has("country","state","city","capital","located","borders","border")) return "geography";
  if(has("food","eat","drink","recipe","restaurant","flavor","candy","beer","wine","burger")) return "food";
  if(has("book","novel","author","wrote","poem","play ","shakespeare","writer")) return "literature";
  if(has("element","chemical","atom","temperature","energy","physics","biology","cell","organ","disease","human body","anatomy")) return "science";
  return "";
}
function industryOf(s){ return BRAND_INDUSTRY_NORM[norm(s)]||null; }
function stemIndustry(q){
  if(!q || typeof q.q!=="string") return null;
  if(q.q.indexOf("Trivia Clue:")===0) return null;
  var t=q.q.toLowerCase();
  for(var i=0;i<STEM_INDUSTRY.length;i++) if(STEM_INDUSTRY[i][0].test(t)) return STEM_INDUSTRY[i][1];
  return null;
}
/* The industry governing a question: its answer's own industry when
   the answer is a known brand, else the industry its stem names. */
function questionIndustry(q, ansStr){
  return industryOf(ansStr) || stemIndustry(q);
}

function djIsNum(s){ return /^[-+$]?\d[\d,\.\s\/%]*$/.test(s) || /^(19|20)\d\d$/.test(s); }
/* The Trivia Sheet's prompts are pub-quiz clues, not finished questions —
   many are sentence fragments ("William Golding wrote") and a few were
   bare names with no instruction at all ("Wonder Woman", whose answer
   is her signature weapon, the Lasso of Truth — now rewritten above as
   a complete question). No DJ prompt ever displays bare: a prompt
   that already asks a question is kept as-is (a missing "?" is
   added), and every other clue is framed as a complete instruction
   saying what is being asked, so the player always knows the task —
   and which kind of answer to give — before answering. */
function djQuestionText(raw){
  var t=String(raw||"").trim();
  if(!t) return t;
  if(/\?/.test(t)) return t;
  if(/^(who|what|when|where|which|why|how|name|in|on|at)\b/i.test(t)) return t+"?";
  return "Trivia Clue: \u201C"+t+"\u201D \u2014 what answer goes with this clue?";
}
function djBuildMC(qtext, ans, djIdx){
  /* Distractors pass the answer-kind rule (type + gender) and are
     ranked for subject plausibility: answers from clues in the same
     broad domain as this clue first, then value/shape closeness —
     all inside the sheet's own answers before any fallback. A date
     answer now only ever sits next to other dates (generated
     neighbouring decades/years when the sheet has none), a woman's
     name only next to women's names, a number only next to numbers. */
  /* The clue's own domain if its wording gives one; otherwise the
     domain of the clue this answer came from — the same subject. */
  var dom=djDomainOf(qtext) || DJ_ANS_DOMAIN[norm(ans)] || "";
  var picks;
  if(norm(ans)==="bud grant"){
    /* Authored, not picked, like the Brontë set below: the clue
       asks for a coach — the four-time Super Bowl coach who also
       played in the NBA — and the ranked picker dealt actors
       (Leonard Nimoy, Jason Clarke, Tom Hanks), because the
       sheet's person ranking reads this clue's "played in" as a
       screen clue. Grant's company is the era's other NFL head
       coaches: Don Shula, Chuck Noll, and Tom Landry — all four
       choices are coaches. (The three are tagged male in
       NAME_GENDER above, so the kind and subkind passes keep
       the set exactly as authored.) */
    picks=["Don Shula","Chuck Noll","Tom Landry"];
  } else if(norm(ans)==="barry sanders"){
    /* Authored, not picked, like the Bud Grant set above: the clue
       asks for a running back — the owner found it dealing a film
       director (George Lucas), a comedian (Bill Engvall), and an
       actor (Daniel Craig), so the one athlete in the set answered
       itself. Its company is the other great running backs:
       Walter Payton, Emmitt Smith, and Jim Brown — all four
       choices are running backs. (All three are tagged male in
       NAME_GENDER by the late pins in part 6, so the kind, subkind,
       and profession-fence passes keep the set exactly as
       authored.) */
    picks=["Walter Payton","Emmitt Smith","Jim Brown"];
  } else if(norm(qtext)===norm("Ernest Evans real name") && norm(ans)==="chubby checker"){
    /* Authored, not picked, like the sets above (owner live-play
       flag, 2026-11-13): the clue names a SINGER ("Singer Ernest
       Evans took what stage name?"), but the ranked picker dealt
       an actor (Leonard Nimoy), an athlete (Oscar Robertson), and
       an author (George Orwell) — the one singer in the set
       answered itself. Its company is singers known by stage
       names, like Chubby Checker himself: Little Richard, Freddie
       Mercury, and Elton John. The stage-name fence in
       subKindAnswer (stage-name musicians) keeps the set exactly
       as authored through every later pass. */
    picks=["Little Richard","Freddie Mercury","Elton John"];
  } else if(norm(qtext)===norm("Daily Show") && norm(ans)==="stephen colbert"){
    /* Authored, not picked, like the sets above (owner live-play
       flag, 2026-11-13): the question asks which comedian got his
       big break as a CORRESPONDENT on The Daily Show, and the
       ranked picker dealt John Oliver beside Stephen Colbert —
       but Oliver was also a Daily Show correspondent (2006–2013,
       after Colbert's 1997–2005 run), so the set held two
       defensible correct answers. Its company is Jon Stewart
       (the show's host, never a correspondent — a fair distractor,
       since the prompt specifies correspondent), Conan O'Brien,
       and Jimmy Fallon, neither of whom was ever a Daily Show
       correspondent. */
    picks=["Jon Stewart","Conan O'Brien","Jimmy Fallon"];
  } else if(norm(ans)==="samuel osgood house"){
    /* Authored, not picked, like the sets above: the clue asks
       for a house — the very first presidential mansion — and the
       generic place picker dealt a diner (The Peach Pit), a
       lighthouse (The Lighthouse of Alexandria), and an amusement
       park (Kings Island) beside it, because every named place
       read as the same kind. Its company is the other early
       presidential residences: the Alexander Macomb House (the
       second presidential mansion) and the Robert Morris House
       (the third), plus The Grange, Alexander Hamilton's house —
       all four choices are houses. The stored answer is "Samuel
       Osgood House", shortened from the sheet's "Samuel Osgood
       house in New York": the "in New York" echoed the clue's own
       wording and made the answer stand out still further. */
    picks=["Alexander Macomb House","Robert Morris House","The Grange"];
  } else if(norm(ans)==="vin diesel"){
    /* Authored, not picked, like the Bud Grant set above: the
       question asks who voiced Groot in the Guardians of the
       Galaxy movies, and its company is the set W. specified —
       Bradley Cooper (who voices Rocket Raccoon in the same
       films), Dwayne Johnson, and Morgan Freeman — all four
       choices are well-known male screen actors, so the kind
       and subkind passes keep the set exactly as authored.
       This pairing replaces a sheet fragment whose stored
       answer could not be verified as any real fact, so the
       fragment is removed from the sheet above. */
    picks=["Bradley Cooper","Dwayne Johnson","Morgan Freeman"];
  } else if(norm(ans)==="huckleberry hound"){
    /* Authored, not picked, like the sets above: the clue asks
       for the Hanna-Barbera hound who sang 'Oh My Darling,
       Clementine', and its company is the same four cartoon
       dogs this question has always dealt — Astro, Slinky Dog,
       and Pluto — every one a dog character, so the dog-subkind
       pass keeps the set exactly as authored. The authored set
       replaces the sheet's old clue for this answer, which all
       four dogs fit equally well, so it never singled out its
       answer. */
    picks=["Astro","Slinky Dog","Pluto"];
  } else if(FRENCH_AUTHOR_NORM[norm(ans)]){
    /* Authored, not picked, like the Brontë set below: a French
       novelist's company is the other French novelists, never the
       general person pool. */
    picks=shuffle(FRENCH_AUTHORS.filter(function(x){ return norm(x)!==norm(ans); })).slice(0,3);
  } else if(norm(ans)==="emily bronte"){
    /* The Wuthering Heights sets are authored, not picked: the
       sheet lists this answer twice — "emily bronte" and
       "Emily Brontë" — and the generated picker once dealt the
       accented spelling as a distractor for the unaccented one,
       with unrelated modern names (Susan Powter, Iggy Azalea)
       filling the rest of the set. The distractors are women
       writers of Brontë's own era: her sisters Charlotte and
       Anne, and Jane Austen. Accent folding in norm() now also
       keeps either spelling of the answer itself out of every
       distractor pool for the other. */
    picks=["Charlotte Brontë","Anne Brontë","Jane Austen"];
  } else if(norm(ans)==="lasso of truth"){
    /* Authored, not picked, like the sets above: the question
       asks for Wonder Woman's signature weapon, and the ranked
       picker dealt a president (Chester A. Arthur), a family
       relation ("Daughter in law"), and a retail brand ("Buy N
       Large") — the answer had no definite subkind, so the
       generic picker treated every unclassified string as its
       company. The set is all weapons: her own arsenal, the
       Sword of Athena, the Spear of Athena, and the Bracelets
       of Victory. All four strings carry the "weapon" subkind
       (see WEAPON NAMES below), so the kind and subkind passes
       keep the set exactly as authored. */
    picks=["Sword of Athena","Spear of Athena","Bracelets of Victory"];
  } else if(norm(qtext)===norm("The thirty-fifth US president") && norm(ans)===norm("John F. Kennedy")){
    /* Authored, not picked, like the sets above: the clue asks
       for the thirty-fifth US president, and the person picker
       dealt an actor (Douglas Fairbanks) and a director (George
       Lucas) beside George Washington — a president's company
       is other presidents. The set is all presidents: Washington
       (the first), Eisenhower (the thirty-fourth), and Lyndon
       B. Johnson (the thirty-sixth — the near-miss trap). All
       four carry the "president" subkind (see US PRESIDENTS
       below), so the passes keep the set exactly as authored. */
    picks=["George Washington","Dwight D. Eisenhower","Lyndon B. Johnson"];
  } else if(norm(ans)==="platypus and echidna"){
    /* Authored, not picked, like the sets above: the clue asks for
       TWO animals (the egg-laying mammals), so every choice is a
       pair of animals — the ranked picker dealt a band, a singer
       duo, and a language phrase, because a two-animal answer had
       no kind of its own. All four strings carry the "pair:animal"
       subkind (see PAIR-OF-ANIMALS below), so the kind and subkind
       passes keep the set exactly as authored. */
    picks=["lion and tiger","beaver and otter","wolf and fox"];
  } else if(norm(ans)==="where goblins work"){
    /* Authored, not picked, like the sets above: the clue asks
       what Gringotts Bank is, and its answer is a description
       phrase — "Where goblins work" — but the ranked picker
       dealt three person names (Rudyard Kipling, Aldous Huxley,
       William McKinley), because a phrase had no kind of its
       own and untagged names read as the same generic kind.
       The phrase was the only non-name in the set, so the
       question answered itself. Its company is the same
       register — "Where…" descriptions of other places in the
       same fictional world, each true of its own place and
       plainly not a bank: the Sorting Ceremony's hall, the
       Diagon Alley owl shop, and the platform for the school
       train. All four strings carry the "phrase" subkind (see
       DESCRIPTION PHRASES below), so the kind and subkind
       passes keep the set exactly as authored. */
    picks=["Where students are sorted into houses","Where owls are bought in Diagon Alley","Where wizards board the train to school"];
  } else if(norm(ans)==="candy lips and bubble gum tongue" || norm(ans)==="the wise man has the power"){
    /* Authored, not picked, like the sets above: both answers
       are song-lyric phrases in the sheet's lowercase register
       (the "Your Body Is a Wonderland" lyric for the John Mayer
       clue, the Doobie Brothers lyric the fool clue completes),
       and the generated repair filled their sets from the whole
       phrase harvest — including a capitalised film-song title
       whose casing-pass spelling broke the set at the final
       sweep. Their company is the sheet's own song phrases:
       two lyric/title phrases apiece, each the answer to its
       own clue elsewhere on the sheet, in the same register —
       and none of them carries a canonical capitalised
       spelling, so the sets survive the casing pass exactly
       as authored. */
    picks = norm(ans)==="candy lips and bubble gum tongue"
      ? ["the wise man has the power","heart will go on","one fine day"]
      : ["candy lips and bubble gum tongue","heart will go on","one fine day"];
  } else {
    picks=pickKindDistractors(ans, DJ_ANSWERS, {
      rank:function(c){
        if(!dom) return 0;
        return DJ_ANS_DOMAIN[norm(c)]===dom ? 0 : 1;
      }
    });
  }
  var choices=[ans].concat(picks);
  var o=mc(djQuestionText(qtext), choices, 0);
  if(typeof djIdx==="number" && DJ_REWRITE[djIdx]) o.dq=DJ_REWRITE[djIdx];
  /* The Wonder Woman question is a comics question, and says so. */
  o.cat = norm(ans)==="lasso of truth" ? "Comics & Superheroes" : "Trivia";
  return o;
}

/* Famous-faces / picture-round names from the sheet. The sheet lists
   names only (no photos), so each plays as a name-the-celebrity round:
   the pattern shows the first letter and length of every word. */
function namePattern(name){
  return name.split(" ").map(function(w){
    if(w.length<=1) return w.toUpperCase();
    var s=w.charAt(0).toUpperCase();
    for(var i=1;i<w.length;i++) s+="\u2022";
    return s;
  }).join(" ");
}
function djFaceEra(name){
  if(DJ_FACE_HISTORICAL.indexOf(name)>-1) return "historical";
  if(DJ_FACE_CLASSIC.indexOf(name)>-1) return "classic";
  return "modern";
}
function djFaceKind(name){
  if(DJ_FACE_GROUPS.indexOf(name)>-1) return "group";
  if(DJ_FACE_FEMALE.indexOf(name)>-1) return "female";
  return "male";
}
/* A "singles pair" answer: two of her song titles joined by " and "
   — the correct answers to the "Which singles were on '…'?" album
   questions ("What Have I Done and Borrowed" for 'Spitfire'). Such
   an answer is not itself in LEANN_SONG_TITLES, so the single-song
   branch in leannBuildMC below misses it, and the generic picker
   dealt an ALBUM title into a singles question ("You Light Up My
   Life: Inspirational Songs" next to three singles for 'Spitfire')
   — an option a player can eliminate without knowing anything,
   because the question asks for singles. A pair answer deals only
   singles: the other verified pairs from her singles questions
   first, then pairs built from her song-title list — never an
   album title. */
function isLeannSongPair(ans){
  var parts=String(ans).split(" and ");
  return parts.length===2 && LEANN_SONG_TITLES.indexOf(parts[0])>-1 && LEANN_SONG_TITLES.indexOf(parts[1])>-1;
}
function leannPairPicks(ans){
  var picks=[], used={}; used[norm(ans)]=1;
  var others=[];
  LEANN_RAW.forEach(function(p){ if(p[1]!==ans && isLeannSongPair(p[1])) others.push(p[1]); });
  shuffle(others).forEach(function(x){ if(picks.length<3 && !used[norm(x)]){ used[norm(x)]=1; picks.push(x); } });
  if(picks.length<3){
    var parts=String(ans).split(" and ");
    var rest=shuffle(LEANN_SONG_TITLES.filter(function(t){ return parts.indexOf(t)===-1; }));
    for(var i=0;i+1<rest.length && picks.length<3;i+=2){
      var pair=rest[i]+" and "+rest[i+1];
      if(!used[norm(pair)]){ used[norm(pair)]=1; picks.push(pair); }
    }
  }
  return picks;
}
function leannBuildMC(qtext, ans){
  /* Same answer-kind rule as the DJ builder: the collection is all
     one subject (LeAnn), so same-kind picks from her own answers are
     subject-plausible by construction; person questions prefer
     country singers of the same gender (COUNTRY_SINGERS) before the
     wider name pool, dates get neighbouring generated dates, and
     numbers get close numbers — never a song title next to a date
     or a count next to a name, as the old numeric split allowed. */
  var ai=kindInfo(ans);
  var pref=null;
  if(ai.kind==="person") pref=COUNTRY_SINGERS[ai.gender]||null;
  /* Pass-proofing: the load-time subkind pass swaps out any dealt
     pick that carries a definite subkind the answer doesn't share,
     and its replacement is a generic string harvested from any
     category — that swap, not this builder, put an album title
     into a singles set (the song "Blue" is filed as a colour, so
     the pass replaced it with a title from another family). Every
     candidate below is therefore tested with the pass's own test
     (distractorBad, on a probe question shaped exactly like the
     final one) before it can be dealt: family lists are sampled
     from their clean members only — every list keeps at least
     three — and the generic pool is filtered the same way, so the
     pass finds nothing in a LeAnn set to swap. */
  var probeO=mc(qtext, [ans], 0); probeO.cat="LeAnn Rimes";
  var pA=null, pDom="";
  try{ pA=subKindAnswer(probeO, ans); pDom=subKindDom(probeO, ans); }catch(e){ pA=null; pDom=""; }
  function passClean(c){
    /* This builder first runs before the subkind tables exist, so
       early on the test itself is unavailable and every candidate
       passes — the sets are rebuilt with the test live just before
       the subkind pass runs (see leannRebuildSets, below). */
    try{ return !distractorBad(probeO, ans, pA, pDom, c); }catch(e){ return true; }
  }
  function familyPicks(list){
    var clean=shuffle(list.filter(function(x){ return x!==ans && passClean(x); }));
    if(clean.length>=3) return clean.slice(0,3);
    return shuffle(list.filter(function(x){ return x!==ans; })).slice(0,3);
  }
  var picks=null;
  /* Authored sets (audit gauntlet, 2026-11-13): three questions
     whose answers are not members of any LeAnn family list, so the
     generic picker filled them across kinds — a record label, a
     singer, and a film beside her birth city; her own song and
     album titles beside a 1997 film she never acted in; a band
     beside the two Masked Singer finalists she beat. Each set is
     same-kind by construction: Mississippi cities for the city,
     1997 films for the film, and other Season 4 Masked Singer
     contestant pairs (Broccoli/Seahorse, Squiggly Monster/
     Popcorn, Grizzly/Whatcha — all verified Season 4 masks and
     performers) for the final. */
  if(/born in which Mississippi city/i.test(qtext))
    picks=["Biloxi","Hattiesburg","Tupelo"];
  else if(/For which 1997 film was 'How Do I Live' originally recorded/i.test(qtext))
    picks=["Titanic","Men in Black","L.A. Confidential"];
  else if(/beat in 'The Masked Singer' Season 4 final/i.test(qtext))
    picks=["Broccoli (Paul Anka) and Seahorse (Tori Kelly)","Squiggly Monster (Bob Saget) and Popcorn (Taylor Dayne)","Grizzly (Rob Gronkowski) and Whatcha (Lonzo Ball)"];
  else if(/Where did Billboard rank LeAnn Rimes/i.test(qtext))
    picks=["No. 3","No. 8","No. 21","No. 27"].filter(function(x){ return x!==ans; }).slice(0,3);
  else if(/version of 'How Do I Live' was used in the film/i.test(qtext))
    picks=["Faith Hill's version","Shania Twain's version","Reba McEntire's version"];
  else if(/which character did LeAnn Rimes play/i.test(qtext))
    picks=["Mushroom","Snow Owls","Popcorn"];
  else if(/given by ASCAP/i.test(qtext))
    picks=["Best Country Album","Best Female Country Vocal Performance","Record of the Year"];
  else if(/peak at on Billboard Hot Country Songs/i.test(qtext))
    picks=["No. 2","No. 3","No. 5","No. 8","No. 13","No. 17"].filter(function(x){ return x!==ans; }).slice(0,3);
  else if(/won Best New Artist and which other award/i.test(qtext))
    picks=["Best Country Album","Best Country Song","Record of the Year"];
  else if(/How old was LeAnn/i.test(qtext))
    picks=["12","13","15","16","17"].filter(function(x){ return x!==ans; }).slice(0,3);
  else if(/album|compilation/i.test(qtext) && LEANN_ALBUM_TITLES.indexOf(ans)>-1)
    picks=familyPicks(LEANN_ALBUM_TITLES);
  else if(/song|single|duet/i.test(qtext) && isLeannSongPair(ans))
    picks=leannPairPicks(ans);
  else if(/song|single|duet/i.test(qtext) && LEANN_SONG_TITLES.indexOf(ans)>-1)
    picks=familyPicks(LEANN_SONG_TITLES);
  /* Narrow-subject split for her screen and label answers, which the
     kind rule alone leaves in one "other" bucket: a film answer gets
     only her other films, a TV-show answer only TV shows, and a
     record-label answer only record labels — never a film next to a
     label, which a player could eliminate without knowing anything.
     Her own films are five deep; the TV and label lists are completed
     with verified same-industry alternatives (American Idol,
     America's Got Talent, and The Voice are the era's other singing
     shows; RCA, Capitol, Columbia, and Warner Music Nashville are
     Curb's fellow country-era labels). */
  else if(/film|movie/i.test(qtext) && LEANN_FILM_TITLES.indexOf(ans)>-1)
    picks=familyPicks(LEANN_FILM_TITLES);
  else if(/tv|television|talent show/i.test(qtext) && LEANN_TV_TITLES.indexOf(ans)>-1)
    picks=familyPicks(LEANN_TV_TITLES);
  else if(/label/i.test(qtext) && LEANN_LABELS.indexOf(ans)>-1)
    picks=familyPicks(LEANN_LABELS);
  else if(/certif/i.test(qtext))
    picks=familyPicks(LEANN_CERTS);
  /* Membership fallbacks: the branches above key off the question's
     wording, but the answer's own family is the surer signal — the
     Voice-coach answer is a pair of TV shows whose question never
     says "TV", and it drew album titles. An answer that IS one of
     her albums, films, TV shows, or labels deals only its own
     family, whatever the question's wording. */
  else if(LEANN_ALBUM_TITLES.indexOf(ans)>-1)
    picks=familyPicks(LEANN_ALBUM_TITLES);
  else if(LEANN_FILM_TITLES.indexOf(ans)>-1)
    picks=familyPicks(LEANN_FILM_TITLES);
  else if(LEANN_TV_TITLES.indexOf(ans)>-1)
    picks=familyPicks(LEANN_TV_TITLES);
  else if(LEANN_LABELS.indexOf(ans)>-1)
    picks=familyPicks(LEANN_LABELS);
  if(picks){
    /* Pair picks come from their own builder; pass-proof them too
       (in practice a pair string carries no definite subkind, so
       this filter is a safeguard, not an expected cut). */
    var cleanPicks=picks.filter(passClean);
    if(cleanPicks.length>=3) picks=cleanPicks.slice(0,3);
  }
  if(!picks){
    /* The generic picker draws from all of her answers, and the
       classifier files both her titles and her phrase answers
       (a chart name, a character, an award) under one broad kind —
       so a title could deal next to a non-title answer: an album
       title beside a certification, a film beside a Masked Singer
       character. A player can eliminate those without knowing any
       LeAnn at all. When the answer is not itself a title, titles
       are removed from the candidate pool; her remaining answers
       are all facts about her, plausible by construction. */
    var genericPool=LEANN_ANSWERS;
    var ansIsTitle=LEANN_ALBUM_TITLES.indexOf(ans)>-1 || LEANN_SONG_TITLES.indexOf(ans)>-1 || LEANN_FILM_TITLES.indexOf(ans)>-1 || LEANN_TV_TITLES.indexOf(ans)>-1;
    if(!ansIsTitle){
      genericPool=LEANN_ANSWERS.filter(function(x){
        return LEANN_ALBUM_TITLES.indexOf(x)===-1 && LEANN_SONG_TITLES.indexOf(x)===-1 && LEANN_FILM_TITLES.indexOf(x)===-1;
      });
      /* Audit gauntlet (2026-11-13): the non-title pool still mixes
         kinds — a person answer (her duet partner) dealt beside a
         count, a record label, and a certification. When at least
         three of her answers share the answer's own kind, the pool
         is restricted to them; the picker never crosses kinds for
         a LeAnn set while same-kind company exists. */
      var sameKind=genericPool.filter(function(x){ return kindInfo(x).kind===ai.kind; });
      if(sameKind.length>=3) genericPool=sameKind;
    }
    picks=pickKindDistractors(ans, genericPool, {pref:pref});
  }
  var choices=[ans].concat(picks);
  var o=mc(qtext, choices, 0); o.cat="LeAnn Rimes"; return o;
}
function enforceGenderChoices(){
  var byCat={};
  ["easy","medium","hard","vhard"].forEach(function(t){ PICS[t].forEach(function(q){
    (byCat[q.cat]=byCat[q.cat]||[]).push(q);
  });});
  Object.keys(byCat).forEach(function(cat){
    var pool={m:[],f:[]};
    byCat[cat].forEach(function(q){ q.choices.forEach(function(c){
      var g=FACE_GENDER[c];
      if(g && pool[g].indexOf(c)===-1) pool[g].push(c);
    });});
    byCat[cat].forEach(function(q){
      var g=FACE_GENDER[q.choices[q.a]];
      if(!g) return; /* answer is not a tagged person — rule does not apply */
      var used=q.choices.slice();
      q.choices=q.choices.map(function(c,i){
        if(i===q.a || FACE_GENDER[c]===g || !FACE_GENDER[c]) return c;
        var repl=null;
        pool[g].forEach(function(n){ if(!repl && used.indexOf(n)===-1) repl=n; });
        if(!repl) return c;
        used.push(repl);
        return repl;
      });
    });
  });
}

/* ================= MULTIPLE-CHOICE INTEGRITY =================
   Every multiple-choice question must deal with exactly 4 distinct
   choices — a question that comes up with no choices is unplayable.
   The authored banks are written with 4 and the generated pools
   build 4, but a distractor shortage in a generated pool (the
   LeAnn numeric answers are only four deep, so there is no slack)
   must never be able to deal a short question, and the renderer
   must never be handed a choices array it cannot draw. This pass
   runs once at load over every pool: any question that is short,
   duplicated, or missing its choices is repaired with distractors
   from its own category first (same domain; for a tagged person
   answer, the same gender; for a DJ face, the same gender/group
   kind, nearest era first), widening only as far as needed. On the
   current banks it changes nothing — it guarantees the invariant
   whatever the pools hold. The renderer also re-checks each
   question as it is dealt (see renderQuestion) and falls back to a
   typed presentation if one somehow still cannot be repaired, so
   an answer control always appears. */
function mcChoicesValid(q){
  if(!q || !Array.isArray(q.choices) || q.choices.length!==4) return false;
  if(!(q.a>=0 && q.a<4)) return false;
  var seen={}, i, c;
  for(i=0;i<4;i++){
    c=q.choices[i];
    if(c===undefined || c===null || String(c).trim()==="") return false;
    /* The duplicate key folds accents (and case): "Emily Brontë"
       and "Emily Bronte" are the same choice, never two. */
    if(seen[norm(foldAccents(c))]) return false;
    seen[norm(foldAccents(c))]=1;
  }
  return true;
}
function fixMCQuestion(q, all){
  var correct=null;
  if(Array.isArray(q.choices) && q.choices[q.a]!==undefined && String(q.choices[q.a]).trim()!=="") correct=String(q.choices[q.a]);
  else if(typeof q.answer==="string" && q.answer.trim()!=="") correct=q.answer;
  if(correct===null) return false;
  all=all || (typeof ALL_MC_QUESTIONS!=="undefined" ? ALL_MC_QUESTIONS : []);
  var gender=FACE_GENDER[correct]||null;
  var isFace=(q.cat==="Trivia Faces");
  var kind=isFace ? djFaceKind(correct) : null;
  var era=isFace ? djFaceEra(correct) : null;
  var used={}; used[norm(correct)]=1;
  var picks=[];
  var correctInfo=kindInfoAll(correct);
  function consider(c){
    if(picks.length>=3) return;
    var s=String(c);
    if(s.trim()==="") return;
    var n=norm(s);
    if(used[n]) return;
    /* A repair must pass the same answer-kind rule as any other
       distractor (type + gender): filling a date question's missing
       choices with words would recreate the giveaway this rule
       exists to prevent. */
    if(!kindCompatibleQ(correctInfo, s, q, correct)) return;
    /* …and the narrow-industry rule: a repair for a brand question
       never pulls in a brand from a different industry (a car maker
       into a delivery-company set, say), even though both are the
       same broad "other" kind. */
    var qInd=questionIndustry(q, correct), cInd=industryOf(s);
    if(qInd && cInd && cInd!==qInd) return;
    used[n]=1; picks.push(s);
  }
  function harvest(list, genderOnly){
    list.forEach(function(o){
      if(!o || !Array.isArray(o.choices)) return;
      o.choices.forEach(function(c){
        if(genderOnly && FACE_GENDER[c]!==gender) return;
        consider(c);
      });
    });
  }
  if(isFace){
    var eraFirst=[], eraRest=[];
    DJ_FACES.forEach(function(n){
      if(n===correct || djFaceKind(n)!==kind) return;
      (djFaceEra(n)===era ? eraFirst : eraRest).push(n);
    });
    shuffle(eraFirst).concat(shuffle(eraRest)).forEach(consider);
  }
  var sameCat=[], anyCat=[];
  all.forEach(function(o){ if(o && o!==q) (o.cat===q.cat ? sameCat : anyCat).push(o); });
  if(gender) harvest(sameCat, true);
  harvest(sameCat, false);
  if(gender) harvest(anyCat, true);
  harvest(anyCat, false);
  if(picks.length<3){
    /* Kind fallback: the name/country/color tables themselves, then
       generated in-domain alternatives (neighbouring dates/numbers)
       — never a cross-kind filler. */
    kindPrefLists(correctInfo).forEach(function(list){ shuffle(list.slice()).forEach(consider); });
  }
  if(picks.length<3){
    genKindDistractors(correct, correctInfo, used, 3-picks.length).forEach(consider);
  }
  if(picks.length<3) return false;
  var choices=shuffle([correct].concat(picks));
  q.choices=choices;
  q.a=choices.indexOf(correct);
  return true;
}

/* ================= ANSWER-KIND ENFORCEMENT =================
   The builders above construct the generated banks (Trivia Sheet, LeAnn,
   capitals, faces) under the answer-kind rule; the authored banks
   were written to it. This pass is the guarantee for every pool at
   once: it walks every multiple-choice question in the game and
   replaces any distractor that fails the type/gender test against
   its own correct answer, harvesting replacements from the same
   category first (subject closeness), then from the whole game's
   same-kind strings, then from the kind's tables, and finally from
   generated in-domain alternatives (neighbouring decades, years,
   dates, numbers). It never fills a set with a different kind of
   answer, and it leaves a set exactly as authored when every choice
   already passes. */
function findKindReplacement(q, ans, ai, used, pools){
  function fromStrings(list){
    var cands=list.filter(function(c){ return !used[norm(c)] && kindCompatibleQ(ai, c, q, ans); });
    if(!cands.length) return null;
    cands=cands.map(function(c){ return {c:c, s:kindCloseness(ai, ans, c)}; }).sort(function(x,y){ return x.s-y.s; }).map(function(o){ return o.c; });
    var top=cands.slice(0, Math.max(6, Math.floor(cands.length/2)));
    var pick=top[Math.floor(rand()*top.length)];
    used[norm(pick)]=1;
    return pick;
  }
  /* Same-category harvest first, ranked for subject plausibility:
     a candidate whose own question shares wording with this one
     ("wrote", "sang", "painted", "president"...) outranks a merely
     same-kind string, so a repaired author question draws other
     authors rather than any same-gender name in the category. */
  function sharedWords(a, b){
    var set={}, n=0;
    norm(a).split(" ").forEach(function(w){ if(w.length>=5) set[w]=1; });
    norm(b).split(" ").forEach(function(w){ if(w.length>=5 && set[w]) n++; });
    return Math.min(n, 3);
  }
  var pairs=[];
  ALL_MC_QUESTIONS.forEach(function(o){
    if(o && o!==q && o.cat===q.cat && Array.isArray(o.choices))
      o.choices.forEach(function(c){ pairs.push({c:c, src:o.q||""}); });
  });
  var catCands=pairs.filter(function(p){ return !used[norm(p.c)] && kindCompatibleQ(ai, p.c, q, ans); });
  if(catCands.length){
    /* Decorate-sort: each candidate's combined score is computed
       once instead of once per comparison; order unchanged. */
    catCands.forEach(function(p){ p._s=kindCloseness(ai, ans, p.c)-30*sharedWords(q.q||"", p.src); });
    catCands.sort(function(x, y){ return x._s-y._s; });
    var topC=catCands.slice(0, Math.max(4, Math.floor(catCands.length/2)));
    var pickC=topC[Math.floor(rand()*topC.length)].c;
    used[norm(pickC)]=1;
    return pickC;
  }
  var r=null;
  var pool=pools[ai.kind+(ai.gender?":"+ai.gender:"")]||{};
  r=fromStrings(Object.keys(pool).map(function(k){ return pool[k]; }));
  if(r) return r;
  var prefs=kindPrefLists(ai);
  for(var i=0;i<prefs.length;i++){ r=fromStrings(prefs[i]); if(r) return r; }
  var gen=genKindDistractors(ans, ai, used, 1);
  if(gen.length){ used[norm(gen[0])]=1; return gen[0]; }
  return null;
}
function enforceKindChoices(){
  var pools={};
  function pkey(info){ return info.kind+(info.gender?":"+info.gender:""); }
  ALL_MC_QUESTIONS.forEach(function(q){
    (q.choices||[]).forEach(function(c){
      var k=pkey(kindInfoAll(c));
      (pools[k]=pools[k]||{})[norm(c)]=c;
    });
  });
  var stats={changed:0, unrepaired:0};
  ALL_MC_QUESTIONS.forEach(function(q){
    if(!mcChoicesValid(q)){
      fixMCQuestion(q, ALL_MC_QUESTIONS);
      if(!mcChoicesValid(q)){ stats.unrepaired++; return; }
    }
    var ans=q.choices[q.a], ai=kindInfoAll(ans);
    var used={};
    q.choices.forEach(function(c){ used[norm(c)]=1; });
    var touched=false;
    var nc=q.choices.map(function(c, i){
      if(i===q.a || kindCompatibleQ(ai, c, q, ans)) return c;
      var repl=findKindReplacement(q, ans, ai, used, pools);
      if(repl){ touched=true; return repl; }
      stats.unrepaired++;
      return c;
    });
    if(touched){
      q.choices=shuffle(nc);
      q.a=q.choices.indexOf(ans);
      stats.changed++;
    }
  });
  return stats;
} /* baked literal: the counts the original load-time pass produced (see BAKED BANK STATE) */

/* ================= NARROW-INDUSTRY ENFORCEMENT =================
   The guarantee for test (4), run once at load over every pool,
   after the kind pass: no dealt set may be solvable by industry
   elimination alone.
   - AGREEMENT: a distractor whose industry is known and differs
     from the correct answer's known industry is always replaced.
   - STRICT STEM: when a question's stem explicitly asks for an
     industry ("which delivery company…", "which car brand…") and
     the answer is a brand of that industry, EVERY distractor must
     be of that industry — an unclassifiable brand is replaced too,
     because in a stem-typed brand set it can only have come from
     another industry.
   - DJ BRAND ANSWERS: a Trivia Sheet question whose answer is a known
     brand (the sheet spells them "L'Oréal", "Papa Johns", "Coca
     Cola"…) is dealt only same-industry brands, for the same
     reason: the sheet's own same-kind neighbours for those answers
     are random words and names, so the brand stood alone.
   Replacements come from the verified INDUSTRY_POOLS list for the
   governing industry, shuffled, never already in the set, and must
   still pass the answer-kind rule. A set that already passes is
   left exactly as authored. */
function industryReplacement(ind, q, ans, ai, used){
  var pool=shuffle((INDUSTRY_POOLS[ind]||[]).slice());
  for(var i=0;i<pool.length;i++){
    var c=pool[i];
    if(used[norm(c)]) continue;
    if(!kindCompatibleQ(ai, c, q, ans)) continue;
    used[norm(c)]=1;
    return c;
  }
  return null;
}
function enforceIndustryChoices(){
  var stats={changed:0, unrepaired:0, checked:0};
  ALL_MC_QUESTIONS.forEach(function(q){
    if(!mcChoicesValid(q)) return;
    var ans=q.choices[q.a], ai=kindInfoAll(ans);
    var ansInd=industryOf(ans), stemInd=stemIndustry(q);
    var strictDJ = q.cat==="Trivia" && !!ansInd;
    var strictStem = !!stemInd && ansInd===stemInd;
    var governing = ansInd || stemInd;
    if(!governing) return;
    stats.checked++;
    var used={};
    q.choices.forEach(function(c){ used[norm(c)]=1; });
    var touched=false;
    var nc=q.choices.map(function(c, i){
      if(i===q.a) return c;
      var cInd=industryOf(c);
      var bad = cInd ? (cInd!==governing) : (strictStem || strictDJ);
      if(!bad) return c;
      var repl=industryReplacement(governing, q, ans, ai, used);
      if(repl){ touched=true; return repl; }
      stats.unrepaired++;
      return c;
    });
    if(touched){
      q.choices=shuffle(nc);
      q.a=q.choices.indexOf(ans);
      stats.changed++;
    }
  });
  return stats;
}
/* The finer kind a string plainly is, from the string alone. */
function djStringKind(str){
  var n=norm(str);
  if(DOG_NORM[n]) return "dog";
  if(CAT_NORM[n]) return "cat";
  if(industryOf(str)) return "brand";
  if(CITY_NORM[n]) return "city";
  if(STATE_NORM[n] || DJ_STATE_ABBR[n]) return "state";
  if(PLACE_NORM[n]) return "place";
  return null;
}
/* The full state name behind any spelling of a state answer. */
function djStateCanon(str){
  var n=norm(str);
  return STATE_NORM[n] || DJ_STATE_ABBR[n] || null;
}
function djRouteStates(text){
  var t=String(text||"");
  for(var i=0;i<ROUTE_STATES.length;i++) if(ROUTE_STATES[i].re.test(t)) return ROUTE_STATES[i].states;
  return null;
}
/* Distractor preference order for a state answer: the far end of
   its route first (the tempting wrong end), then the route states
   that border the answer, then the rest of the route, then the
   answer's neighbours, then the remaining states shuffled. */
function djStatePrefs(q, canon, route){
  var out=[], seen={};
  function add(s){ if(s && norm(s)!==norm(canon) && !seen[norm(s)]){ seen[norm(s)]=1; out.push(s); } }
  if(route){
    var txt=String(q&&q.q||"");
    var otherEnd=/eastern|east end/i.test(txt) ? route[0] : (/western|west end/i.test(txt) ? route[route.length-1] : null);
    if(otherEnd) add(otherEnd);
    var nb=STATE_NEIGHBORS[canon]||[];
    route.forEach(function(s){ if(nb.indexOf(s)>-1) add(s); });
    route.forEach(add);
  }
  (STATE_NEIGHBORS[canon]||[]).forEach(add);
  shuffle(US_STATES.slice()).forEach(add);
  return out;
}
/* Is this string a place of any recognised kind? */
function djIsPlaceStr(c){
  var k=kindInfoAll(c).kind;
  if(k==="country" || k==="continent" || k==="state") return true;
  var sk=djStringKind(c);
  return sk==="city" || sk==="state" || sk==="place";
}
/* A replacement place: states, cities, countries, and the sheet's
   own other places — the place family, nothing else. */
function djPlacePick(used){
  var pool=shuffle(US_STATES.concat(CITY_NAMES).concat(Object.keys(COUNTRY_REGION)).concat(DJ_PLACE_NAMES));
  for(var i=0;i<pool.length;i++){
    if(used[norm(pool[i])]) continue;
    if(!djIsPlaceStr(pool[i])) continue;
    used[norm(pool[i])]=1;
    return pool[i];
  }
  return null;
}
/* The finer kind of a DJ question's ANSWER: the string's own kind,
   or the kind its clue asks for. Clue-based kinds apply only to
   answers the broad kind tables leave unclassified, so a person,
   country, or brand answer to a clue that merely mentions an animal
   or a city keeps its own kind. */
function djAnswerKind(q, ans){
  var sk=djStringKind(ans);
  if(sk) return sk;
  if(kindInfoAll(ans).kind!=="other") return null;
  var clue=" "+String(q&&q.q||"").toLowerCase()+" ";
  if(/\bdog\b|\bpuppy\b/.test(clue)) return "dog";
  if(/cat's name|\bcat in\b|\bthe cat\b|\bcat named\b/.test(clue)) return "cat";
  if(/\bin what city\b|\bwhat city\b|\bwhich city\b/.test(clue)) return "city";
  return null;
}
/* A replacement from the sheet's own unclassified answers — same
   broad kind as the answer, no definite finer kind of its own —
   ranked by the DJ subject test (same-domain answers first). */
function djPlainOtherPick(q, ans, used){
  var dom=djDomainOf(q.q) || DJ_ANS_DOMAIN[norm(ans)] || "";
  var ai=kindInfoAll(ans);
  var cands=DJ_ANSWERS.filter(function(x){
    if(used[norm(x)]) return false;
    if(kindInfoAll(x).kind!=="other") return false;
    if(djStringKind(x)) return false;
    return true;
  });
  cands.sort(function(a,b){
    var ra=(dom && DJ_ANS_DOMAIN[norm(a)]===dom)?0:1;
    var rb=(dom && DJ_ANS_DOMAIN[norm(b)]===dom)?0:1;
    if(ra!==rb) return ra-rb;
    return kindCloseness(ai, ans, a)-kindCloseness(ai, ans, b);
  });
  if(!cands.length) return null;
  var band=cands.slice(0, Math.max(10, Math.floor(cands.length/3)));
  var pickStr=band[Math.floor(rand()*band.length)];
  used[norm(pickStr)]=1;
  return pickStr;
}
function enforceDJSubkinds(){
  var stats={strong:0, swept:0, unrepaired:0};
  DJ_MC.forEach(function(q){
    if(!mcChoicesValid(q)) return;
    var ans=q.choices[q.a];
    var ak=djAnswerKind(q, ans);
    var used={}; q.choices.forEach(function(c){ used[norm(c)]=1; });
    var touched=false, strong=false;
    /* State machinery for this question, when its answer is a
       state: the canonical state behind the sheet's spelling, the
       route it sits on (if the clue names one), and the ordered
       distractor preferences (far end, route, neighbours, rest). */
    var stateCanon=null, routeStates=null, statePrefs=null, statePrefIdx=0;
    if(ak==="state"){
      stateCanon=djStateCanon(ans) || ans;
      routeStates=djRouteStates(q.q);
      statePrefs=djStatePrefs(q, stateCanon, routeStates);
    }
    function nextStatePick(){
      if(!statePrefs) return null;
      while(statePrefIdx<statePrefs.length){
        var s=statePrefs[statePrefIdx++];
        if(!used[norm(s)]){ used[norm(s)]=1; return s; }
      }
      return null;
    }
    var nc=q.choices.map(function(c, i){
      if(i===q.a) return c;
      var ck=djStringKind(c);
      if(ak==="state"){
        /* Strong form, states: every distractor is a US state.
           On a route question only the route's own states are
           plausible company while unused route states remain, so
           an off-route state is traded for the next preference —
           which is how the far end (California, for the eastern
           end of I-40) always makes the set. */
        if(ck==="state"){
          if(routeStates && routeStates.indexOf(djStateCanon(c))===-1){
            var rs=nextStatePick();
            if(rs){ strong=true; touched=true; return rs; }
          }
          return c;
        }
        var ns=nextStatePick();
        if(ns){ strong=true; touched=true; return ns; }
        stats.unrepaired++; return c;
      }
      if(ak==="place"){
        /* Strong form, places: every distractor is a place of some
           recognised kind — a state, city, country, continent, or
           one of the sheet's own other places. */
        if(djIsPlaceStr(c)) return c;
        var pp=djPlacePick(used);
        if(pp){ strong=true; touched=true; return pp; }
        stats.unrepaired++; return c;
      }
      if(ak==="dog" || ak==="cat" || ak==="city"){
        /* Strong form: every distractor shares the answer's finer
           kind, drawn from the verified same-kind pool. */
        if(ck===ak) return c;
        strong=true;
        var pool=shuffle(SUBKIND_POOLS[ak].slice());
        for(var j=0;j<pool.length;j++){
          if(!used[norm(pool[j])]){ used[norm(pool[j])]=1; touched=true; return pool[j]; }
        }
        stats.unrepaired++; return c;
      }
      /* Agreement form: a definite-kind distractor (brand, dog,
         cat, city, state, place) never sits next to an answer of
         another kind. */
      if(ck && ck!==ak){
        var repl=djPlainOtherPick(q, ans, used);
        if(repl){ touched=true; return repl; }
        stats.unrepaired++; return c;
      }
      return c;
    });
    if(ak==="state" && !routeStates){
      /* Neighbour presence: a state set with no bordering state at
         all trades its last distractor for one — neighbours are
         the plausible company, where one is available. */
      var nb=STATE_NEIGHBORS[stateCanon]||[];
      var hasNb=nc.some(function(c, i){ return i!==q.a && nb.indexOf(djStateCanon(c))>-1; });
      if(!hasNb){
        for(var ni=0; ni<nb.length && !touched; ni++){
          if(used[norm(nb[ni])]) continue;
          for(var li=nc.length-1; li>=0; li--){
            if(li===q.a) continue;
            used[norm(nb[ni])]=1; nc[li]=nb[ni]; touched=true; strong=true; break;
          }
        }
      }
    }
    if(touched){
      q.choices=shuffle(nc);
      q.a=q.choices.indexOf(ans);
      if(strong) stats.strong++; else stats.swept++;
    }
  });
  return stats;
}
function bakedTraversal(){
  var pools=[DJ_MC, DJ_FACE_MC, DJ_REAL, DJ_PLACES, LEANN_MC, LEANN_PIC];
  ["easy","medium","hard","vhard"].forEach(function(t){ pools.push(TEXT[t], CAPITALS[t], PICS[t]); });
  Object.keys(NEWCAT).forEach(function(k){ pools.push(NEWCAT[k]); });
  Object.keys(NEWBANKS).forEach(function(k){ pools.push(NEWBANKS[k]); });
  var seen=[], out=[];
  pools.forEach(function(pool){
    if(!Array.isArray(pool)) return;
    pool.forEach(function(q){ if(q && seen.indexOf(q)===-1){ seen.push(q); out.push(q); } });
  });
  return out;
}
function bakedDiffValid(diff, count){
  if(!Array.isArray(diff) || diff.length!==count) return false;
  for(var i=0;i<diff.length;i++){
    var e=diff[i];
    if(!Array.isArray(e) || e.length<3 || e.length>4) return false;
    if(!(e[0]>=0 && e[0]<BAKED_TRAV.length)) return false;
    if(!Array.isArray(e[1]) || e[1].length!==4) return false;
    if(!(e[2]>=0 && e[2]<4)) return false;
    if(e.length===4 && typeof e[3]!=="string") return false;
  }
  return true;
}
function bakedApply(diff){
  diff.forEach(function(e){
    var q=BAKED_TRAV[e[0]];
    if(e.length===4){ q.choices=e[1].slice(); q.a=e[2]; q.mcExcluded=true; q.mcExcludeReason=e[3]; return; }
    /* Audit gauntlet (2026-11-13): a baked replacement set is
       applied only if the RESULTING set passes the deal-time
       guard (mcSetValid, including the audit shape/domain rules).
       Several baked sets replaced clean authored sets with
       cross-kind fillers the old guard could not see — animals
       beside Terry Fox, singers beside the colour Pink, an album
       beside a certification. When the baked set fails, the
       pre-baked set stays; if it too fails, the deal-time guard
       excludes the question as usual. Exclusion entries (four
       elements) are unconditional: they exist to remove sets. */
    var savedChoices=q.choices, savedA=q.a;
    /* Audit gauntlet round 8 (2026-11-13): when the baked entry
       keeps the SAME correct answer and the authored set already
       passes the guard, the override is stale — the authored banks
       have been fixed at source all day (Figaro, Titanic, Hound of
       the Baskervilles, the Canada PM sets, the justices set all
       dealt junk ONLY through their baked replacements). Skip it:
       a repair layer must never replace a set that is not broken.
       Entries that change which string is correct are factual
       overrides and keep the apply-then-validate path below, as do
       entries whose authored set fails the guard. */
    if(e[1][e[2]]===q.choices[q.a] && mcSetValid(q)) return;
    q.choices=e[1].slice(); q.a=e[2];
    if(!mcSetValid(q)){ q.choices=savedChoices; q.a=savedA; }
  });
}
function isAnimalPair(str){
  var n=norm(str);
  if(n.indexOf(" and ")<0) return false; /* cheap gate: the load-time passes classify every choice in the game */
  if(PAIR_ANIMAL_NORM[n]) return true;
  var parts=n.split(" and ");
  if(parts.length!==2) return false;
  /* Each half must be ONE animal name: a phrase like "Monotremes
     (platypus and echidnas)" — another question's fuller-form
     answer to this very fact — is not a pair of animals, and must
     never be harvested as company for one. */
  if(parts[0].trim().indexOf(" ")>-1 || parts[1].trim().indexOf(" ")>-1) return false;
  return animalKindHit(parts[0].trim()) && animalKindHit(parts[1].trim());
}
function animalKindHit(n){
  if(ANIMAL_PHRASE_NORM[n]) return true;
  if(ANIMAL_NORM[n] && !ANIMAL_HOMONYM[n]) return true;
  if(n.length>2 && n.charAt(n.length-1)==="s" && ANIMAL_NORM[n.slice(0,-1)] && !ANIMAL_HOMONYM[n.slice(0,-1)]) return true;
  if(/ies$/.test(n) && ANIMAL_NORM[n.slice(0,-3)+"y"] && !ANIMAL_HOMONYM[n.slice(0,-3)+"y"]) return true;
  /* Multiword names match on the last word ("giant squid",
     "great white shark") — but a phrase that merely ends in an
     animal word ("A dog", a riddle's answer shape) does not. */
  var parts=n.split(" ");
  if(parts.length>=2 && parts.length<=3 && parts[0]!=="a" && parts[0]!=="the" &&
     ANIMAL_NORM[parts[parts.length-1]] && !ANIMAL_HOMONYM[parts[parts.length-1]]) return true;
  return false;
}
/* Accent folding for lookup keys, so an accented spelling in one
   bank ("Bogotá") matches the same name harvested from another.
   Uses Unicode decomposition, so every diacritic folds — ë to e,
   é to e, ñ to n, ç to c, å to a — in either case; the letters
   decomposition does not split (æ, œ, ß, ø, đ, ł, þ, ð) are
   mapped by hand. Case is preserved: callers that want a caseless
   key pass the result through norm(), which folds accents too. */
function foldAccents(s){
  return String(s).normalize("NFD").replace(/[\u0300-\u036f]/g,"")
    .replace(/æ/g,"ae").replace(/Æ/g,"Ae").replace(/œ/g,"oe").replace(/Œ/g,"Oe")
    .replace(/ß/g,"ss").replace(/ø/g,"o").replace(/Ø/g,"O")
    .replace(/đ/g,"d").replace(/Đ/g,"D").replace(/ł/g,"l").replace(/Ł/g,"L")
    .replace(/þ/g,"th").replace(/Þ/g,"Th").replace(/ð/g,"d").replace(/Ð/g,"D");
}
/* The raw clue behind a question's displayed text: the fragment
   inside the 'Trivia Clue: "…" —' framing, or the text itself
   (minus a trailing "?") for a prompt that displays bare. */
function djRawClue(q){
  var t=String(q&&q.q||"");
  var m=t.match(/Trivia Clue: \u201C([^\u201D]+)\u201D/);
  if(m) return m[1];
  return t.replace(/\?+\s*$/,"");
}
function isCharacterQA(q, ans){
  if(!q) return false;
  return !!CHAR_QA[norm(djRawClue(q))+"|"+norm(ans)];
}
function phraseShapeStr(str){
  var t=String(str==null?"":str).trim();
  if(!t || /\d/.test(t)) return false;
  var toks=t.split(/\s+/);
  if(toks.length<2) return false;
  if(toks.length<=4 && /\s(and|&)\s/i.test(" "+t+" ")) return false; /* pairs / duos */
  function clean(w){ return w.toLowerCase().replace(/[^a-z'-]/g,""); }
  var content=toks.filter(function(w){ return !PHRASE_CONNECTORS[clean(w)]; });
  if(content.length && content.every(function(w){ return /^[A-Z]/.test(w); })) return false; /* name shape */
  var first=clean(toks[0]);
  if(/^(where|when|why|how)$/.test(first) && toks.length>=3) return true;
  if(toks.length>=3 && toks.every(function(w){ return !/^[A-Z]/.test(w); })) return true;
  if(/^[a-z]/.test(toks[0]) && (/(ing|ed)$/.test(first) || (/s$/.test(first) && !/ss$/.test(first) && first.length>3))) return true;
  if(/^(the|a|an)$/.test(first) && toks.length>=4 && toks.slice(1).some(function(w){ var c=clean(w); return /(ed|ing)$/.test(c) || !!PHRASE_AUX[c]; })) return true;
  return false;
}
/* The finer kind of a choice string, from the string alone.
   Returns a subkind key ("side", "animal", "brand:beer",
   "person:f", "place:city", "date:year", …) or null when the
   string is a generic word with no definite finer kind. Broad
   kinds that are already exact (dates, numbers, quantities,
   colours, sky objects) map to their own subkind so the strict
   form covers them too. */
function subKindStr(str){
  /* Memoised wrapper (see norm): the classifier is a pure function
     of the string once its tables are built, and the load-time
     passes call it for every choice of every question. Calls made
     before the tables exist throw inside the raw classifier (its
     early callers catch that, as before) and are never cached, so
     only settled, table-complete results are stored. */
  var cache=subKindStr._cache||(subKindStr._cache=new Map());
  var key=String(str==null?"":str);
  if(cache.has(key)) return cache.get(key);
  var r=subKindStrRaw(str);
  cache.set(key, r);
  return r;
}
function subKindStrRaw(str){
  var t=String(str==null?"":str).trim();
  if(!t) return null;
  var n=norm(t), tLow=t.toLowerCase();
  if(SHEET_BRAND_ALL[n]) return "brand:"+SHEET_BRAND_ALL[n];
  var ind=industryOf(t);
  if(ind) return "brand:"+ind;
  /* A known fictional character is a character before it is a
     person-shaped string: "vivian ward" pattern-matches a woman's
     name, but she is a character, and character sets are the only
     sets she may sit in. */
  if(CHAR_NORM[n]) return "character";
  /* A pair of animals is a pair before anything else (see
     PAIR-OF-ANIMALS above) — ahead of the multiword animal rule
     below, which would file it by its last word alone. */
  if(isAnimalPair(t)) return "pair:animal";
  /* The broad kind tables outrank the sheet's dog/cat name lists:
     "Blue" is a colour (and a LeAnn album) before it is a dog's
     name, and a listed person's name is a person first. */
  var ai=kindInfoAll(t);
  if(ai.kind==="person") return "person:"+ai.gender;
  if(ai.kind==="group") return "group";
  if(ai.kind==="country") return "place:country";
  if(ai.kind==="continent") return "place:continent";
  if(ai.kind==="state") return "place:state";
  if(ai.kind==="color") return "color";
  if(ai.kind==="sky") return "sky";
  if(ai.kind==="month" || ai.kind==="season" || ai.kind==="year" || ai.kind==="decade" || ai.kind==="fulldate")
    return "date:"+ai.kind;
  if(ai.kind==="number") return "number";
  if(ai.kind==="quantity") return "quantity";
  var sk=djStringKind(t);
  if(sk==="dog") return "dog";
  if(sk==="cat") return "cat";
  if(sk==="city") return "place:city";
  if(sk==="state") return "place:state";
  if(sk==="place") return "place:other";
  if(SHEET_PLACE[n]) return SHEET_PLACE[n];
  /* A US state nickname is a nickname, never generic filler (see
     STATE NICKNAMES & FOODS above). */
  if(STATE_NICKNAME_NORM[n]) return "place:nickname";
  if(CITY_HARVEST_NORM[norm(foldAccents(t))]) return "place:city";
  if(/^[a-z .]+,\s*[a-z]{2}$/.test(tLow) && US_ABBR_NORM[tLow.slice(-2)]) return "place:city";
  if(tLow.indexOf(", ")>-1 && STATE_NAME_NORM[norm(tLow.slice(tLow.lastIndexOf(", ")+2))]) return "place:city";
  if(/^\d/.test(t) && /\b(miles?|feet|foot|ft|inch|cm|km|meters?|metres?|pounds?|lbs?|ounces?|gallons?|liters?|litres?|mph|years?|yrs?|days?|weeks?|hours?|hrs?|minutes?|mins?|seconds?|secs?)\b/i.test(t)) return "quantity";
  /* Definition phrases are their own kind, never generic filler:
     a phobia definition ("fear of empty beer glass", the DJ
     sheet's answer for Cenocillicaphobia) is a definition of a
     fear, and only another fear definition is its company — not
     a person/role phrase, a place, or a title, however generic
     those strings look on their own. This is the subkind the
     earlier passes never split out of the generic-phrase
     catch-all, so the set dealt a president, a tower, and a song
     title next to the one definition. Study/science-of
     definitions share the rule under their own subkind. */
  if(/^(the\s+)?fear of\s/i.test(t)) return "def:fear";
  if(/^(the\s+)?(study|science) of\s/i.test(t)) return "def:study";
  if(LANG_NORM[n]) return "language";
  if(BODY_NORM[n]) return "body";
  if(SPORT_NORM[n]) return "sport";
  if(WEAPON_NORM[n]) return "weapon";
  if(SIDE_NORM[n]) return "side";
  if(COMPASS_NORM[n]) return "compass";
  if(typeof QUANT_WORDS!=="undefined" && QUANT_WORDS[n]) return "number";
  if(BABY_ANIMAL_NORM[n]) return "animal:young";
  if(BIRD_NORM[n] && !ANIMAL_HOMONYM[n]) return "animal:bird";
  if(FISH_NORM[n] && !ANIMAL_HOMONYM[n]) return "animal:fish";
  if(animalKindHit(n)) return "animal";
  /* A food or ingredient is a food (see STATE NICKNAMES & FOODS
     above): an ingredient answer deals ingredient company, and a
     food string is never generic filler in another kind's set.
     The animal readings above run first, so a food that is also
     an animal name (chicken, salmon) keeps its animal kind. */
  if(FOOD_NORM[n]) return "food";
  /* A description phrase is a phrase (see DESCRIPTION PHRASES
     above): its own kind, never generic filler. Every tabled
     kind above keeps seniority, so a phrase-shaped string that
     is also a listed animal, food, place, or title keeps that
     reading — this fires only on strings no table carries. */
  if(phraseShapeStr(t)) return "phrase";
  /* A single letter is a letter — the Trivia Sheet's "Letter not in
     state" answer ("Q") dealt a comet's parts, a language-country
     pair, and a composer before this subkind existed. (In the
     Chemistry / Periodic Table banks the same string is an
     element symbol: subKindChoice's context rule runs first
     there and keeps that reading.) */
  if(/^[a-z]$/.test(n)) return "letter";
  if(/^[A-Z]{2,6}$/.test(t) || INITIALISM_NORM[n]) return "acronym";
  return null;
}
/* A choice's subkind in the context of its question. In the
   Periodic Table / Chemistry banks the reading is the chemist's:
   a one-or-two-letter capitalised string is an element symbol,
   and a name that is a dog, an animal, or a brand elsewhere in
   the game ("Copper" the element vs "Copper" the hound) is a
   plain element-bank word there. */
function subKindChoice(q, str){
  var t=String(str==null?"":str).trim();
  if(q && (q.cat==="Periodic Table" || q.cat==="Chemistry")){
    if(/^[A-Z][a-z]?$/.test(t)) return "symbol";
    var k=subKindStr(str);
    if(k==="dog" || k==="cat" || k==="animal" || k==="animal:bird" || k==="animal:fish" || k==="acronym" || (k && k.indexOf("brand:")===0)) return null;
    return k;
  }
  /* In a Music question, a place-named band takes the band
     reading: "Boston" the band is a group, not the city, and
     "Kansas" the band is not the state — the same context rule
     as the chemist's reading above, for the bank whose questions
     ask for bands. The table (MUSIC_BAND_NORM, by kindCompatibleQ)
     holds only the place-named bands the bank's band questions
     actually deal; outside a Music question those strings keep
     their place kind, so a geography question's Boston, Chicago,
     or Kansas is untouched. Without the rule, the 'More Than a
     Feeling' set — Boston, Chicago, Kansas, Foreigner, four
     1970s bands — was "repaired" into Boston among cities
     (London, Madrid), because the answer's string is a city. */
  if(q && q.cat==="Music" && MUSIC_BAND_NORM[norm(t)]) return "group";
  var k2=subKindStr(str);
  /* The food reading belongs to the Trivia Sheet's generated sets —
     the Campbell's question is one. The authored banks write
     their own food sets (a band called Cream, a riddle's coffee,
     a guacamole's tomato), and there a food string keeps the
     reading its own bank gave it: none. */
  if(k2==="food" && !(q && (q.cat==="Trivia" || q.cat==="Comics & Superheroes"))) return null;
  /* An ambiguous brand string (Mars, Orbit, Eclipse, Extra,
     Apple) in a question whose wording gives no brand reading is
     the other thing it also is — the industry tables say the
     same of their own authored sets. */
  if(k2 && k2.indexOf("brand:")===0 && AMBIG_BRAND_NORM[norm(str)] && q && !BRAND_CLUE_RE.test(" "+String(q.q||"").toLowerCase()+" ")) return null;
  /* In a space question, a dog or cat character's name that is
     also a planet or a star ("Pluto") reads as the space body. */
  if((k2==="dog" || k2==="cat") && q && /planet|solar system|orbit|galaxy|asteroid|comet|dwarf/.test(" "+String(q.q||"").toLowerCase()+" ")) return null;
  /* A team string under the same readings the answer rule
     overrides — unclassified, group, animal, or place — takes its
     team subkind, so no team name sits as filler in a set whose
     answer is not a team. Person, brand, and title readings of a
     string keep priority, exactly as for answers. */
  if(!k2 || k2==="group" || k2==="animal" || k2.indexOf("place:")===0){
    var tk2=teamAnswerKind(q, str);
    if(tk2) return tk2;
  }
  if(!k2){
    /* A harvested work title (see TITLE_STRINGS) is a title in
       any set it sits in: it can no longer pass as generic filler
       next to a non-title answer. TITLE_STRINGS is built after
       this function's early callers run, so the typeof guard
       keeps those calls safe — and uncached, because this wrapper
       is not the memoised one. */
    if(typeof TITLE_STRINGS!=="undefined" && TITLE_STRINGS[norm(str)]) return "title";
    /* A sheet answer naming a building or structure ("Samuel
       Osgood house in New York", the first presidential home) is
       a place, though no place table lists it: the giveaway set
       dealt two presidents and a film title beside it. The rule
       is DJ-only — the sheet's fragments are the strings no table
       carries — and it only ever fires on a string every table
       has left unclassified. */
    if(q && (q.cat==="Trivia" || q.cat==="Comics & Superheroes") &&
       /\b(house|building|mansion|castle|palace|fort|tower|bridge|cathedral|church|museum|library|stadium|arena|theatre|theater|lighthouse|estate|villa|temple|prison|observatory|island|park|grange)\b/i.test(t)) return "place:other";
  }
  /* The phrase reading belongs to the Trivia Sheet's generated sets,
     like the food reading above: a description phrase is a
     phrase only where sets are generated from the sheet's mixed
     pool. The authored banks write their definition sets as
     authored wholes in one register, and there a phrase string
     keeps the reading its own bank gave it — none. */
  if(k2==="phrase" && !(q && (q.cat==="Trivia" || q.cat==="Comics & Superheroes"))) return null;
  return k2;
}
function canonTeam(s){ var n=norm(s); return TEAM_CANON[n]||n; }
/* The league a question's wording names outright, if any. */
function clueLeague(q){
  var clue=" "+String(q&&q.q||"").toLowerCase()+" ";
  if(/super ?bowl|\bnfl\b/.test(clue)) return "nfl";
  if(/world series|\bmlb\b/.test(clue)) return "mlb";
  if(/\bnba\b/.test(clue)) return "nba";
  if(/stanley cup|\bnhl\b|\bushl\b/.test(clue)) return "nhl";
  if(/\bbcs\b|\bncaa\b|playoff|college/.test(clue)) return "cfb";
  return null;
}
/* The league of a team string, in the context of a question. */
function teamLeagueOf(str, q){
  var n=norm(str); if(!n) return null;
  if(TEAM_LEAGUE[n]) return TEAM_LEAGUE[n];
  var amb=TEAM_AMBIG[n];
  if(amb){ var lg=clueLeague(q); if(lg && amb.indexOf(lg)>-1) return lg; return amb[0]; }
  return null;
}
/* Is this question asking about a team? A sports domain, a Sports
   bank, or team wording in the clue. */
function teamContext(q){
  if(!q) return false;
  if(q.cat==="Sports") return true;
  if(djDomainOf(q.q)==="sports") return true;
  var clue=" "+String(q.q||"").toLowerCase()+" ";
  return /\bteam\b|\bcoached\b|\bmanaged\b|\bmanager\b/.test(clue) || !!clueLeague(q);
}
/* The team subkind of an ANSWER string, or null. A two-team answer
   (a slash pair, "Padres/Chargers"; a matchup, "Indiana v.
   Purdue") is a team answer when every part is a team: one league
   throughout takes that league, a mixed pair takes "team:any" —
   its company is teams, never phrases or titles. A single team
   takes the team reading when its string is unambiguous, or when
   the question is a team question. */
function teamAnswerKind(q, ans){
  var t=String(ans==null?"":ans).trim(); if(!t) return null;
  var parts=null;
  if(t.indexOf("/")>-1) parts=t.split("/").map(function(s){ return s.trim(); }).filter(Boolean);
  else if(/\s(v|vs)\.?\s/i.test(" "+t+" ")) parts=(" "+t+" ").split(/\s(?:v|vs)\.?\s/i).map(function(s){ return s.trim(); }).filter(Boolean);
  if(parts && parts.length>=2){
    var lgs=parts.map(function(p){ return teamLeagueOf(p, q); });
    if(lgs.every(function(x){ return !!x; }))
      return lgs.every(function(x){ return x===lgs[0]; }) ? "team:"+lgs[0] : "team:any";
    return null;
  }
  var lg=teamLeagueOf(t, q); if(!lg) return null;
  if(TEAM_UNAMBIG[norm(t)] || teamContext(q)) return "team:"+lg;
  return null;
}

/* The profession / playing position a clue names outright, if
   any — the profession fence's clue half (see the role gate in
   subKindAnswer below). The membership half is ROLE_POOLS in
   part 6: verified all-time greats of each role, split by
   gender, so a fenced set can always be repaired inside the
   role. A Roman-senator clue is history, not US politics, and a
   goalie with no hockey in the clue is not read as an NHL
   goaltender (a soccer goalkeeper would fail the pool) — both
   stay unfenced rather than fenced wrong. */
var ROLE_CLUE_RES=[
  [/running back/, "nfl-rb"],
  [/quarterback/, "nfl-qb"],
  [/wide receiver/, "nfl-wr"],
  [/tight end/, "nfl-te"],
  [/\bpitcher\b/, "mlb-pitcher"],
  [/\bcatcher\b/, "mlb-catcher"],
  [/point guard/, "nba-pg"],
  [/shooting guard/, "nba-sg"],
  [/\bpainter\b/, "painter"],
  [/\bsenator\b/, "senator"],
  /* Subject-attached professions (owner ruling, 2026-11-13 — the
     Ernest Evans set, whose picker dealt an actor, an athlete,
     and an author beside the one singer): a profession word
     attached to the question's SUBJECT — leading the prompt
     ("Singer Ernest Evans…"), standing directly before the
     subject's name, or in the "Which singer…" form — fences the
     choices by that profession, exactly like the roles above.
     These patterns are anchored to the subject on purpose: a
     profession merely mentioned in passing does not fence. */
  [/^\s*(singer|vocalist)\b/, "singer"],
  [/\b(singer|vocalist)\s+[a-z]+\s+[a-z]+\s+(took|was|is|became|performs|sang|recorded|wrote)\b/, "singer"],
  [/\b(which|what|name the|the)\s+(singer|vocalist)\b/, "singer"],
  [/^\s*rapper\b/, "rapper"],
  [/\brapper\s+[a-z]+\s+[a-z]+\s+(took|was|is|became|performs|recorded)\b/, "rapper"],
  [/\b(which|what|name the|the)\s+rapper\b/, "rapper"],
  [/^\s*comedian\b/, "comedian"],
  [/\bcomedian\s+[a-z]+\s+[a-z]+\s+(took|was|is|became|performs)\b/, "comedian"],
  [/\b(which|what|name the|the)\s+comedian\b/, "comedian"]
];
function clueRoleKey(clue){
  if(!clue) return null;
  if(/\bsenator\b/.test(clue) && /roman|rome|ancient/.test(clue)) return null;
  if(/(goalie|goaltender)/.test(clue)) return /(hockey|nhl|stanley cup|\bice\b)/.test(clue) ? "nhl-goalie" : null;
  for(var i=0;i<ROLE_CLUE_RES.length;i++) if(ROLE_CLUE_RES[i][0].test(clue)) return ROLE_CLUE_RES[i][1];
  return null;
}
/* ============ STAGE-NAME / BIRTH-NAME FENCE (2026-11-13) ============
   The second half of the Ernest Evans fix. A birth-name / stage-
   name question ("took what stage name", "better known as", "is
   the birth name of which…", and the reverse "what is the real
   name of…", "was born with what name") must deal ONLY names of
   the same kind as its answer — stage names for a stage-name
   answer, birth names for a birth-name answer — of people in the
   SAME profession: a singer's stage name sits beside other
   singers' stage names, never beside an actor, an athlete, or an
   author who happens to share the answer's gender (the dealt
   Evans set: Leonard Nimoy, Oscar Robertson, George Orwell).
   The profession comes from the clue's own words where it names
   one ("Singer Ernest Evans…", "the rapper Lil Dicky"), else
   from the small verified table below for the sheet's own stage-
   name items. The membership pools (STAGE_POOLS / BIRTH_POOLS,
   part 6) are keyed "stage:<family>:<gender>" /
   "birth:<profession>:<gender>"; music stage names share one
   family (singers and rappers both perform under stage names,
   and the sheet's own authored sets — Drake / Chubby Checker /
   Pitbull / Tupac Shakur — treat them as one company), while
   birth names keep the finer profession, since a birth name is
   only plausible company for the same trade. A profession with
   no verified pool (sportscaster birth names) stays unfenced
   rather than fenced with guesses — the standing rule. */
var STAGE_PROF_NORM={"drake":"rapper","pitbull":"rapper","tupac shakur":"rapper","chubby checker":"singer","mel brooks":"comedian","davis burd":"rapper","bobby moore":"sportscaster"};
var STAGE_SKIP_NORM={"carmen electra":1};
function stageProfOf(clueFull, ans){
  if(STAGE_SKIP_NORM[norm(ans)]) return null;
  if(/\brapper\b/.test(clueFull)) return "rapper";
  if(/\bsinger\b|\bvocalist\b/.test(clueFull)) return "singer";
  if(/\bcomedian\b/.test(clueFull)) return "comedian";
  if(/\bsportscaster\b|\bbroadcaster\b/.test(clueFull)) return "sportscaster";
  return STAGE_PROF_NORM[norm(ans)] || null;
}
function stagePoolGender(poolsNorm, key, ans){
  if(poolsNorm[key+":m"] && poolsNorm[key+":m"][norm(ans)]) return "m";
  if(poolsNorm[key+":f"] && poolsNorm[key+":f"][norm(ans)]) return "f";
  var g=genderOfName(ans);
  if((g==="m" || g==="f") && poolsNorm[key+":"+g]) return g;
  return null;
}
function stageNameGate(clueFull, ans){
  if(typeof STAGE_POOL_NORM==="undefined" || typeof BIRTH_POOL_NORM==="undefined") return null;
  /* The answer must read as a person — or be a verified member of
     the very pool the fence would deal from, which is its own
     proof (pool members are registered as persons in part 5, but
     membership alone is enough to trust here). */
  var ansIsPerson=kindInfoAll(ans).kind==="person";
  var fwd=/took what stage name|better known as|is the birth name of which|birth name of which|performs as|stage name\?|pen name of|what pen name/.test(clueFull);
  var rev=false;
  if(!fwd) rev=/what is the real name|real name of|was born with|born with what|given name at birth/.test(clueFull);
  if(!fwd && !rev) return null;
  var prof=stageProfOf(clueFull, ans);
  if(!prof) return null;
  if(fwd){
    var fam = prof==="comedian" ? "comedian" : (prof==="singer" || prof==="rapper" || prof==="performer") ? "music" : null;
    if(!fam) return null;
    var sg=stagePoolGender(STAGE_POOL_NORM, fam, ans);
    if(!sg) return null;
    if(!ansIsPerson && !(STAGE_POOL_NORM[fam+":"+sg]||{})[norm(ans)]) return null;
    return "stage:"+fam+":"+sg;
  }
  var bg=stagePoolGender(BIRTH_POOL_NORM, prof, ans);
  if(!bg) return null;
  if(!ansIsPerson && !(BIRTH_POOL_NORM[prof+":"+bg]||{})[norm(ans)]) return null;
  return "birth:"+prof+":"+bg;
}
/* The sub-type of a named place, from its own string: a house /
   residence / mansion, a lighthouse, an island, or a park. The
   word tests carry most names ("Samuel Osgood House", "Cape
   Hatteras Lighthouse", "Alcatraz Island", "Central Park"); the
   tables carry the well-known names whose sub-type the string
   does not spell out (The Grange is a house, Boston Light is a
   lighthouse, Nantucket is an island). Returns null for every
   other place — lakes, museums, mountains, and monuments keep
   the broad place family. */
var HOUSE_NORM={"samuel osgood house":1,"alexander macomb house":1,"robert morris house":1,"the grange":1,"mount vernon":1,"monticello":1,"the hermitage":1,"graceland":1,"biltmore estate":1,"the white house":1,"white house":1,"montpelier":1,"stratford hall":1,"fallingwater":1,"the breakers":1,"arlington house":1,"dumbarton house":1,"lyndhurst":1,"filoli":1,"vanderbilt mansion":1,"ash lawn highland":1,"mount clare":1,"woodlawn":1};
var LIGHTHOUSE_NORM={"lighthouse of alexandria":1,"portland head light":1,"boston light":1,"st augustine light":1,"tybee island light":1,"sandy hook lighthouse":1,"fire island lighthouse":1,"split rock lighthouse":1,"heceta head lighthouse":1,"yaquina head lighthouse":1,"montauk point lighthouse":1,"west quoddy head light":1,"cape hatteras lighthouse":1,"pigeon point lighthouse":1,"thomas point shoal lighthouse":1,"navesink twin lights":1};
var ISLAND_NORM={"nantucket":1,"marthas vineyard":1,"treasure island":1,"fire island":1,"block island":1};
function placeSubType(str){
  var t=String(str==null?"":str), n=norm(t);
  if(HOUSE_NORM[n] || /\b(house|mansion|residence|estate|villa|cottage)\b/i.test(t)) return "house";
  if(LIGHTHOUSE_NORM[n] || /\blighthouse\b/i.test(t)) return "lighthouse";
  if(ISLAND_NORM[n] || /\b(island|isle|atoll)\b/i.test(t)) return "island";
  if(/\bpark\b/i.test(t)) return "park";
  if(/\bcastle\b/i.test(t)) return "castle";
  return null;
}

/* The finer kind of a question's ANSWER: the string's own subkind,
   or — for a generic string — the subkind its clue/question asks
   for. Clue signals only ever apply to an answer the string tables
   leave unclassified, so a person, country, or brand answer to a
   clue that merely mentions an animal or a side keeps its own kind. */
function subKindAnswer(q, ans){
  var clue=" "+String(q&&q.q||"").toLowerCase()+" ";
  /* The profession fence alone reads the displayed prompt too:
     the sheet fragment "14 100-yard games" never says "running
     back", but its rewritten display question (q.dq) does. The
     older gates (title, author, president, …) were tuned on the
     stored prompt alone and keep that text — widening them to
     the rewrite changed their reach (a film-line rewrite made
     its phrase answer a "title"), so the rewrite feeds only
     clueRoleKey below. */
  var clueFull=" "+String((q&&q.dq)||"").toLowerCase()+" "+clue;
  /* A character answer is a character before any other reading:
     the answer-side evidence (a known character name, or the
     sheet's own character clue/answer pair) outranks the title
     stem and person readings below. */
  if(CHAR_NORM[norm(ans)] || isCharacterQA(q, ans)) return "character";
  /* A stem that asks for a title decides the kind, whatever the
     title string looks like on its own — a song called "Blue" or
     a film called "Carrie" is a title in its question, not a
     colour or a woman's name. */
  if(TITLE_STEM_RE.test(clue)) return "title";
  /* A stem that asks who wrote a work decides the kind the same
     way: the answer is an author, and its company is other
     authors — never whatever unclassified strings the sheet's
     picker reached first. (The reported set: "'Of Mice and Men'
     was written by" dealing two state nicknames and a department
     store beside John Steinbeck.) The gate only fires when the
     answer reads as a person or as an unclassified name — a book
     title answering a "who wrote" stem keeps the title reading
     above. */
  if(/\bwritten by\b|\bwho wrote\b|\bauthor of\b|\bpenned by\b/.test(clue)){
    /* The gate's scope: every DJ question (the sheet's generated
       sets are the ones that dealt the giveaway company), and any
       authored stem that names a written work — a novel, book,
       play, or poem, or the word "author" itself. An authored
       music bank's "who wrote and first recorded…" asks for a
       songwriter among musicians, and a LeAnn songwriting set
       likewise; those banks wrote their own company, and this
       rule leaves them to it. */
    var djQ = q && (q.cat==="Trivia" || q.cat==="Comics & Superheroes");
    if(djQ || /\bnovel\b|\bbook\b|\bplay\b|\bpoem\b|\bauthor\b/.test(clue)){
      var ansKind=kindInfoAll(ans).kind;
      if(ansKind==="person" || ansKind==="other") return "author";
    }
  }
  /* A stem that asks for a president, answered by one of the 45,
     decides the kind the same way: the answer is a president,
     and its company is other presidents — never whatever male
     names the picker reached first. (The reported set: the
     thirty-fifth-president clue dealing Douglas Fairbanks and
     George Lucas beside George Washington.) The gate only fires
     when the answer itself is in the presidents table, so a
     question that merely mentions a president — or asks about a
     president of another country — keeps its own kind. */
  if(/\bpresident/.test(clue) && PRESIDENT_NORM[norm(ans)]) return "president";
  /* A stem that names a profession or a playing position decides
     the kind the same way (owner ruling, 2026-11-12 — the Barry
     Sanders set: a running-back clue dealing a film director, a
     comedian, and an actor, because the person picker matched
     broad fame/era pools with no profession fence). The gate
     fires only when the answer itself reads as a person, and the
     subkind carries the answer's gender ("role:nfl-rb:m"), so a
     repaired set draws only listed members of the same role
     group, of the same gender — never merely famous people.
     ROLE_POOLS / ROLE_POOL_NORM are defined in part 6 beside
     SUBKIND_POOLS2, before every pass that calls this function. */
  /* A birth-name / stage-name question decides the kind before
     the broader profession fence (see STAGE-NAME / BIRTH-NAME
     FENCE above): every choice must be a stage name (or a birth
     name, in the reverse direction) of a person in the same
     profession as the answer. */
  var stageKey=stageNameGate(clueFull, ans);
  if(stageKey) return stageKey;
  var roleKey=clueRoleKey(clueFull);
  if(roleKey && kindInfoAll(ans).kind==="person"){
    var roleGender=genderOfName(ans);
    if(roleGender==="m" || roleGender==="f") return "role:"+roleKey+":"+roleGender;
  }
  /* A stem that asks for a bird or a fish decides that subkind —
     the answer is a bird even when its name is also something
     else (a duck, an eagle). */
  if(/what bird|which bird/.test(clue)) return "animal:bird";
  if(/what fish|which fish/.test(clue)) return "animal:fish";
  /* The capital of a city-state (Singapore, Monaco, Vatican
     City) is a city answer wearing a country's name — the same
     exception the kind pass makes for "which city" questions. */
  if(/capital of/.test(clue) && typeof CITY_STATES!=="undefined" && CITY_STATES[norm(ans)]) return "place:city";
  /* A two-animal answer takes pair company only (see
     PAIR-OF-ANIMALS above). */
  if(isAnimalPair(ans)) return "pair:animal";
  var sk=subKindChoice(q, ans);
  if(sk && sk.indexOf("brand:")===0 && AMBIG_BRAND_NORM[norm(ans)] && !BRAND_CLUE_RE.test(clue)) sk=null;
  /* Continent/island stems take the whole place family as their
     subject — the kind pass's own exception, at subkind level.
     A state nickname is not the place itself, so it keeps its
     own subkind: the exception must not fire merely because the
     state a nickname belongs to has "Island" in its name (the
     Rhode Island nickname question dealt islands and parks as
     its "nickname" choices when it did). */
  if(sk && sk.indexOf("place:")===0 && sk!=="place:nickname" && /continent|island/.test(clue)) return "place:other";
  /* A sports-team answer outranks the string's other readings — a
     school filed as its state ("tennessee" the Volunteers), a
     mascot the name tables file as a group ("Pistons") or an
     animal ("Eagles") — whenever the answer is a known team and
     the string or the clue carries the team reading. A person,
     number, date, or brand answer keeps its own kind: this check
     only ever overrides an unclassified, group, animal, or place
     reading. */
  var tk=teamAnswerKind(q, ans);
  if(tk && (!sk || sk==="group" || sk==="animal" || sk.indexOf("place:")===0)) return tk;
  if(!sk){
    /* Clue-gated kinds whose strings are ordinary words elsewhere:
       a Nobel category is a Nobel category only in a Nobel
       question ("Literature" is also a school subject, "Peace" a
       plain word), and an element name is an element answer only
       where the question is about elements — "Iron" in a golf
       clue is a club and "Clay" in a history clue is a statesman.
       "Which of these…" stems are exempt from the element rule:
       there the mixed substance set IS the question ("Which of
       these substances is an element?" has exactly one element
       among its choices, by design). */
    if(NOBEL_NORM[norm(ans)] && /nobel/.test(clue)) return "nobel";
    if(ELEMENT_NORM[norm(ans)] && !choiceDependentStem(q.q) &&
       (q.cat==="Chemistry" || q.cat==="Periodic Table" || /\belement\b|\bmetal\b|atomic number|chemical symbol|\bmineral\b/.test(clue))) return "element";
  }
  /* Place sub-type fence (owner ruling, 2026-11-12 — the Samuel
     Osgood set): a sheet place answer that is itself a house, a
     lighthouse, an island, or a park takes that sub-type as its
     kind, so its company must share the sub-type — the generic
     "place:other" family reading let a house deal a diner, a
     lighthouse, and an amusement park. The fence is DJ-only,
     like the building-word rule in subKindChoice, and it only
     refines an answer whose own string carries the sub-type (a
     word or a tabled name): a lake, a museum, or a mountain
     keeps the whole place family, as before. */
  if(sk==="place:other" && q && (q.cat==="Trivia" || q.cat==="Comics & Superheroes")){
    var ansSub=placeSubType(ans);
    if(ansSub) return "place:other:"+ansSub;
  }
  if(sk) return sk;
  /* An animal homonym (eagle, bat, crane…) takes the animal
     reading only from an animal clue. */
  if(ANIMAL_HOMONYM[norm(ans)] && (/animal|bird|fish|mammal|reptile|insect|species|creature|wildlife|zoo|prey|predator/.test(clue) || djDomainOf(q&&q.q)==="nature")) return "animal";
  if(kindInfoAll(ans).kind!=="other") return null;
  /* Clue-asked character/place kinds, the clue half of the DJ
     subkind rule — the string half is already settled above, so a
     name that merely sounds like a dog ("Copper") is not
     reclassified by its spelling here. */
  if(/\bdog\b|\bpuppy\b/.test(clue)) return "dog";
  if(/cat's name|\bcat in\b|\bthe cat\b|\bcat named\b/.test(clue)) return "cat";
  if(/\bin what city\b|\bwhat city\b|\bwhich city\b/.test(clue)) return "place:city";
  if(/what side|side of the road|driving on|drive on the|drives on the/.test(clue)) return "side";
  if(/what colou?r|which colou?r/.test(clue)) return "color";
  if(/what animal|what creature|what bird|what fish|what insect|which animal/.test(clue)) return "animal";
  /* A stem that asks for a weapon decides the kind for a weapon
     answer the string tables don't list — the listed ones (the
     Lasso of Truth and its company) already carry the subkind
     from the string half above. */
  if(/\bweapon\b/.test(clue)) return "weapon";
  return null;
}
function noteAuthor(c, cat){
  AUTHOR_STRINGS[norm(c)]=c;
  var per=(AUTHOR_BY_CAT[cat||""]=AUTHOR_BY_CAT[cat||""]||{});
  per[norm(c)]=c;
}
/* A "<descriptor> <bird/fish>" phrase ("Peregrine falcon",
   "Golden eagle") is that bird or fish in one of its sets, even
   though the bare last word is a homonym the string classifier
   leaves alone. */
function birdFishPhrase(table, c){
  var parts=norm(c).split(" ");
  return parts.length>=2 && parts.length<=3 && parts[0]!=="a" && parts[0]!=="the" && !!table[parts[parts.length-1]];
}
/* Does distractor c satisfy answer subkind A in question q?
   "place:other" answers (a lake, a province, a park) accept the
   whole place family, mirroring the DJ place rule — the strict
   per-kind split binds states, cities, and countries themselves. */
function subKindMatch(q, A, c){
  if(A==="character"){
    if(CHAR_NORM[norm(c)]) return true;
    /* Dog and cat characters are characters too — they keep their
       own stricter subkind when they are the answer, but they are
       honest company for any other character. */
    var ck=subKindChoice(q, c);
    return ck==="dog" || ck==="cat";
  }
  if(A==="team:any") return !!teamLeagueOf(c, q);
  if(A && A.indexOf("team:")===0) return teamLeagueOf(c, q)===A.slice(5);
  if(A==="title") return !!TITLE_STRINGS[norm(c)];
  if(A==="author") return !!AUTHOR_NORM[norm(c)];
  if(A==="president") return !!PRESIDENT_NORM[norm(c)];
  /* Profession fence: a "role:<group>:<gender>" answer accepts
     only listed members of that same role group (ROLE_POOLS,
     part 6) — a running back's company is running backs, never
     merely famous men. */
  if(A && A.indexOf("role:")===0){
    var rp=(typeof ROLE_POOL_NORM!=="undefined") ? ROLE_POOL_NORM[A.slice(5)] : null;
    return !!(rp && rp[norm(c)]);
  }
  /* Stage-name / birth-name fence: a "stage:<family>:<gender>"
     answer accepts only listed stage names of that family, and a
     "birth:<profession>:<gender>" answer only listed birth names
     of that profession (STAGE_POOLS / BIRTH_POOLS, part 6). */
  if(A && A.indexOf("stage:")===0){
    var sp=(typeof STAGE_POOL_NORM!=="undefined") ? STAGE_POOL_NORM[A.slice(6)] : null;
    return !!(sp && sp[norm(c)]);
  }
  if(A && A.indexOf("birth:")===0){
    var bp=(typeof BIRTH_POOL_NORM!=="undefined") ? BIRTH_POOL_NORM[A.slice(6)] : null;
    return !!(bp && bp[norm(c)]);
  }
  /* Place sub-type fence: a "place:other:<sub>" answer (a house,
     a lighthouse, an island, a park) accepts only places of the
     same sub-type — the candidate must read as a place at all,
     and its own string must carry the same sub-type. */
  if(A && A.indexOf("place:other:")===0){
    var wantSub=A.slice("place:other:".length);
    if(placeSubType(c)!==wantSub) return false;
    var candKind=subKindChoice(q, c);
    if(candKind) return candKind.indexOf("place:")===0;
    /* A string no table classifies may still be a verified pool
       member ("Yellowstone National Park" is in no place table,
       but it is in the park pool below) — pool membership is its
       own verification. Anything else unclassified is refused. */
    return typeof SUBKIND_POOLS2!=="undefined" && !!SUBKIND_POOLS2[A] && SUBKIND_POOLS2[A].indexOf(c)>-1;
  }
  if(A==="nobel") return !!NOBEL_NORM[norm(c)];
  if(A==="element") return !!ELEMENT_NORM[norm(c)];
  if(A==="acronym" && q && q.cat!=="Trivia" && q.cat!=="Comics & Superheroes" && FIELD_ACRONYM_NORM[norm(c)]) return true;
  if(A==="animal:bird") return !!BIRD_NORM[norm(c)] || birdFishPhrase(BIRD_NORM, c);
  if(A==="animal:fish") return !!FISH_NORM[norm(c)] || birdFishPhrase(FISH_NORM, c);
  var C=subKindChoice(q, c);
  if(A==="animal"){
    if(C==="animal" || C==="animal:bird" || C==="animal:fish" || C==="animal:young") return true;
    /* A homonym animal word (duck, eagle, bat) is an animal in an
       animal set, whatever else it is elsewhere. */
    return !!(ANIMAL_NORM[norm(c)] && ANIMAL_HOMONYM[norm(c)]);
  }
  if(A==="animal:young") return C==="animal:young";
  if(A==="place:city" && C==="place:country" && typeof CITY_STATES!=="undefined" && CITY_STATES[norm(c)]) return true;
  if(A==="place:other") return C==="place:other" || C==="place:city" || C==="place:state" || C==="place:country" || C==="place:continent";
  return C===A;
}
/* The subject domain of a DJ answer (music, screen, sports, …)
   where the sheet gives one, else "". Used as the subject test on
   top of subkind for DJ questions: a distractor that is itself a
   DJ answer from a different known domain is cross-subject even
   when it shares the answer's subkind. */
function subKindDom(q, ans){
  if(!q || (q.cat!=="Trivia" && q.cat!=="Comics & Superheroes")) return "";
  return djDomainOf(q.q) || DJ_ANS_DOMAIN[norm(ans)] || "";
}
/* The full violation test for one distractor, shared by the pass
   and its own post-repair verification: strict subkind mismatch,
   an agreement breach, or a DJ cross-domain subject. */
function distractorBad(q, ans, A, dom, c){
  /* The answer itself in its other spelling is never company for
     a team answer, even though it shares the league. */
  if(A && A.indexOf("team:")===0 && canonTeam(c)===canonTeam(ans)) return true;
  if(A){ if(!subKindMatch(q, A, c)) return true; }
  else {
    var cc=subKindChoice(q, c);
    /* A bare animal word among plain words is a plain word —
       animal names are common nouns, and a generic set's subject
       comes from its clue. The giveaway this pass exists to stop
       is the STRICT form: an answer of a definite kind (a side,
       a brand, a place, a character) betrayed by filler of other
       kinds — and that form still rejects animals outright. */
    if(cc && cc!=="animal" && cc!=="animal:bird" && cc!=="animal:fish" && cc!=="animal:young") return true;
  }
  if(dom){
    var cd=DJ_ANS_DOMAIN[norm(c)];
    if(cd && cd!==dom) return true;
  }
  return false;
}
function enforceSubkindChoices(){
  var stats={checked:0, repaired:0, excluded:0};
  var exclusions=[];
  /* Harvested same-subkind strings grouped by subkind and by
     category, built once, before any set is touched — a repaired
     set speaks the game's own vocabulary before any pool or
     generated string. Generic candidates keep their source
     question, so a repair can be ranked by subject (shared
     wording with this question) and not just by kind — a metal
     question draws the strings other metal questions use. */
  var subByCat={};
  var genericByCat={}, genericAll={};
  ALL_MC_QUESTIONS.forEach(function(o){
    if(!o || !Array.isArray(o.choices)) return;
    o.choices.forEach(function(c){
      var k=subKindStr(c);
      if(k){
        var per=(subByCat[k]=subByCat[k]||{});
        var bucket=(per[o.cat||""]=per[o.cat||""]||{});
        bucket[norm(c)]=c;
      } else {
        if(!genericAll[norm(c)]) genericAll[norm(c)]={c:c, src:o.q||""};
        var gm=(genericByCat[o.cat||""]=genericByCat[o.cat||""]||{});
        if(!gm[norm(c)]) gm[norm(c)]={c:c, src:o.q||""};
      }
    });
  });
  function domOk(c, dom){
    if(!dom) return true;
    var cd=DJ_ANS_DOMAIN[norm(c)];
    return !cd || cd===dom;
  }
  function sharedWords(a, b){
    var set={}, n=0;
    norm(a).split(" ").forEach(function(w){ if(w.length>=5) set[w]=1; });
    norm(b).split(" ").forEach(function(w){ if(w.length>=5 && set[w]) n++; });
    return Math.min(n, 3);
  }
  function pickStrict(K, q, ans, ai, used, dom){
    var lists=[];
    if(K==="title"){
      lists.push(shuffle(Object.keys(TITLE_STRINGS).map(function(k){ return TITLE_STRINGS[k]; })));
    } else if(K==="author"){
      /* Same-category authors first (a Music question's company
         is the songwriters its own bank harvested, a Pop Culture
         question's the novelists), then every author. */
      var byCat=AUTHOR_BY_CAT[q.cat||""]||{};
      var catAuth=Object.keys(byCat).map(function(k){ return byCat[k]; });
      if(catAuth.length) lists.push(shuffle(catAuth));
      lists.push(shuffle(AUTHOR_LIST.slice()));
    } else {
      /* A general animal answer also draws the bird, fish, and
         young-animal groups — the same kind, one level down. */
      var groupKeys = K==="animal" ? ["animal","animal:bird","animal:fish","animal:young"] : [K];
      var catMap={}, allMap={};
      groupKeys.forEach(function(gk){
        var per=subByCat[gk]||{};
        Object.keys(per).forEach(function(cat){
          Object.keys(per[cat]).forEach(function(k){
            allMap[k]=per[cat][k];
            if(cat===(q.cat||"")) catMap[k]=per[cat][k];
          });
        });
      });
      var catList=Object.keys(catMap).map(function(k){ return catMap[k]; });
      catList=catList.map(function(c){ return {c:c, s:kindCloseness(ai, ans, c)}; }).sort(function(x,y){ return x.s-y.s; }).map(function(o){ return o.c; });
      lists.push(catList.slice(0, Math.max(6, Math.floor(catList.length/2))), catList);
      var allList=Object.keys(allMap).map(function(k){ return allMap[k]; });
      allList=allList.map(function(c){ return {c:c, s:kindCloseness(ai, ans, c)}; }).sort(function(x,y){ return x.s-y.s; }).map(function(o){ return o.c; });
      lists.push(allList.slice(0, Math.max(6, Math.floor(allList.length/2))), allList);
      if(SUBKIND_POOLS2[K]) lists.push(shuffle(SUBKIND_POOLS2[K].slice()));
      if(K.indexOf("brand:")===0){
        var ind=K.slice(6);
        if(INDUSTRY_POOLS[ind]) lists.push(shuffle(INDUSTRY_POOLS[ind].slice()));
        if(SHEET_BRAND_POOLS[ind]) lists.push(shuffle(SHEET_BRAND_POOLS[ind].slice()));
      }
      if(K.indexOf("person:")===0) lists.push(shuffle(Object.keys(NAME_GENDER).filter(function(k2){ return NAME_GENDER[k2]===ai.gender; })));
    }
    if(K==="character" && typeof CHAR_DOMAIN!=="undefined"){
      /* Narrow-domain first (owner ruling, 2026-11-12): a
         character answer's company comes from its own domain —
         same show / genre / medium — before the closeness-ranked
         harvest, whose string-shape ranking kept surfacing the
         same few short names (Twiki, Lotso, Baymax) as filler in
         every character set. Same-domain candidates lead, the
         rest follow in shuffled order, and the ranked lists below
         remain as the final fallback. */
      var adC=CHAR_DOMAIN[norm(ans)]||"";
      if(adC){
        var hMapC={}, perC=subByCat["character"]||{};
        Object.keys(perC).forEach(function(cat){ Object.keys(perC[cat]).forEach(function(k){ hMapC[k]=perC[cat][k]; }); });
        var candC=Object.keys(hMapC).map(function(k){ return hMapC[k]; });
        (SUBKIND_POOLS2["character"]||[]).forEach(function(c){ if(!hMapC[norm(c)]){ hMapC[norm(c)]=c; candC.push(c); } });
        var inDomC=candC.filter(function(c){ return CHAR_DOMAIN[norm(c)]===adC; });
        var outDomC=candC.filter(function(c){ return CHAR_DOMAIN[norm(c)]!==adC; });
        lists.unshift(shuffle(inDomC), shuffle(outDomC));
      }
    }
    for(var li=0; li<lists.length; li++){
      var list=lists[li];
      for(var i=0;i<list.length;i++){
        var c=list[i];
        if(used[norm(c)]) continue;
        if(K.indexOf("team:")===0 && (canonTeam(c)===canonTeam(ans) || used["canon:"+canonTeam(c)])) continue;
        if(!subKindMatch(q, K, c)) continue;
        if(!domOk(c, dom)) continue;
        used[norm(c)]=1;
        if(K.indexOf("team:")===0) used["canon:"+canonTeam(c)]=1;
        return c;
      }
    }
    var gen=genKindDistractors(ans, ai, used, 1);
    if(gen.length && subKindMatch(q, K, gen[0])){ used[norm(gen[0])]=1; return gen[0]; }
    return null;
  }
  function pickGeneric(q, ans, ai, used, dom){
    /* DJ questions keep the sheet-ranked picker the subkind pass
       uses (same broad kind, no definite finer kind, same-domain
       first) — but its pick is only accepted if it passes this
       pass's own subkind and domain tests. */
    if(q.cat==="Trivia" || q.cat==="Comics & Superheroes"){
      var djPick=djPlainOtherPick(q, ans, used);
      if(djPick && !subKindChoice(q, djPick) && domOk(djPick, dom)) return djPick;
      if(djPick) delete used[norm(djPick)];
    }
    function genericOk(p){
      return !used[norm(p.c)] && kindCompatibleQ(ai, p.c, q, ans) && !subKindChoice(q, p.c) && domOk(p.c, dom);
    }
    var catMap=genericByCat[q.cat||""]||{};
    var catList=Object.keys(catMap).map(function(k){ return catMap[k]; }).filter(genericOk);
    catList=catList.map(function(p){ return {p:p, s:sharedWords(q.q||"", p.src)}; }).sort(function(x,y){ return y.s-x.s; }).map(function(o){ return o.p; });
    var allList=Object.keys(genericAll).map(function(k){ return genericAll[k]; }).filter(genericOk);
    allList=allList.map(function(p){ return {p:p, s:sharedWords(q.q||"", p.src)}; }).sort(function(x,y){ return y.s-x.s; }).map(function(o){ return o.p; });
    var lists=[catList.map(function(p){ return p.c; }), allList.map(function(p){ return p.c; })];
    for(var li=0; li<lists.length; li++){
      var list=lists[li];
      for(var i=0;i<list.length;i++){
        if(!used[norm(list[i])]){ used[norm(list[i])]=1; return list[i]; }
      }
    }
    return null;
  }
  ALL_MC_QUESTIONS.forEach(function(q){
    if(!mcChoicesValid(q)) return;
    stats.checked++;
    var ans=q.choices[q.a], ai=kindInfoAll(ans);
    var A=subKindAnswer(q, ans);
    var dom=subKindDom(q, ans);
    var used={};
    q.choices.forEach(function(c){ used[norm(c)]=1; });
    /* For a team answer, two spellings of one team ("astros" next
       to "Houston Astros") are one choice, not two: canonical
       teams already in the set are tracked in used under a
       "canon:" key, and a repeat counts as a violation. */
    var teamA = !!(A && A.indexOf("team:")===0);
    if(teamA) used["canon:"+canonTeam(ans)]=1;
    var touched=false, failed=false;
    var nc=q.choices.map(function(c, i){
      if(i===q.a) return c;
      var bad=distractorBad(q, ans, A, dom, c);
      if(!bad && teamA){
        if(used["canon:"+canonTeam(c)]) bad=true;
        else used["canon:"+canonTeam(c)]=1;
      }
      if(!bad) return c;
      var repl = A ? pickStrict(A, q, ans, ai, used, dom) : pickGeneric(q, ans, ai, used, dom);
      if(repl){ touched=true; return repl; }
      failed=true;
      return c;
    });
    if(!failed && touched){
      /* Re-verify the repaired set against the same test before
         accepting it — a replacement never smuggles a new
         violation into a set this pass claims to have fixed. */
      var verifyCanon={};
      if(teamA) verifyCanon[canonTeam(ans)]=1;
      for(var vi=0; vi<nc.length; vi++){
        if(vi===q.a) continue;
        if(distractorBad(q, ans, A, dom, nc[vi])){ failed=true; break; }
        if(teamA){
          var cnv=canonTeam(nc[vi]);
          if(verifyCanon[cnv]){ failed=true; break; }
          verifyCanon[cnv]=1;
        }
      }
    }
    if(failed){
      /* Cannot honestly field three same-kind, same-subject
         distractors: out of multiple-choice dealing. The question
         itself, its answer, and its typed use are untouched. */
      q.mcExcluded=true;
      q.mcExcludeReason = A ? ("fewer than 3 same-subkind ("+A+") distractors in the pool")
                            : "fewer than 3 subkind-free distractors in the pool";
      exclusions.push({q:q.q, cat:q.cat||"", answer:ans, subkind:A||"(generic)", reason:q.mcExcludeReason});
      stats.excluded++;
      return;
    }
    if(touched){
      q.choices=shuffle(nc);
      q.a=q.choices.indexOf(ans);
      stats.repaired++;
    }
  });
  stats.exclusions=exclusions;
  return stats;
}
/* The LeAnn builder runs before the subkind tables exist, so its
   pass-proofing (see leannBuildMC) cannot apply when the sets are
   first built. Rebuild every LeAnn set in place now, just before
   the subkind pass runs: same question objects, same correct
   answers, but family picks are sampled pass-clean, so the pass
   finds nothing in a family set to swap out. Generic-path LeAnn
   sets get the pass's normal repair, exactly as before. */
function leannRebuildSets(){
  LEANN_MC.forEach(function(q){
    var fresh=leannBuildMC(q.q, q.choices[q.a]);
    q.choices=fresh.choices; q.a=fresh.a;
  });
} /* baked literal: the counts the original load-time pass produced (see BAKED BANK STATE) */
/* Final LeAnn family guard — the enforcement of last resort for
   the one pool whose sets are built by a dedicated builder. The
   subkind pass above can still, while repairing a generic-path
   LeAnn set, swap in a harvested title string (a film title into
   a count question happened in testing). This guard re-checks
   every LeAnn set against the family its builder assigned: a
   family question (albums, singles, films, TV, labels, certs,
   singles pairs) may deal only its own family, and a generic-path
   question may not deal a title at all. A violating distractor is
   replaced with an unused same-family (or, for generic sets,
   non-title LeAnn-answer) string that passes the game's own
   distractor test on the real question; if none exists the set
   is left exactly as the pass made it. */
function leannFamilyOf(qtext, ans){
  if(/album|compilation/i.test(qtext) && LEANN_ALBUM_TITLES.indexOf(ans)>-1) return LEANN_ALBUM_TITLES;
  if(/song|single|duet/i.test(qtext) && isLeannSongPair(ans)) return "pair";
  if(/song|single|duet/i.test(qtext) && LEANN_SONG_TITLES.indexOf(ans)>-1) return LEANN_SONG_TITLES;
  if(/film|movie/i.test(qtext) && LEANN_FILM_TITLES.indexOf(ans)>-1) return LEANN_FILM_TITLES;
  if(/tv|television|talent show/i.test(qtext) && LEANN_TV_TITLES.indexOf(ans)>-1) return LEANN_TV_TITLES;
  if(/label/i.test(qtext) && LEANN_LABELS.indexOf(ans)>-1) return LEANN_LABELS;
  if(/certif/i.test(qtext)) return LEANN_CERTS;
  if(LEANN_ALBUM_TITLES.indexOf(ans)>-1) return LEANN_ALBUM_TITLES;
  if(LEANN_FILM_TITLES.indexOf(ans)>-1) return LEANN_FILM_TITLES;
  if(LEANN_TV_TITLES.indexOf(ans)>-1) return LEANN_TV_TITLES;
  if(LEANN_LABELS.indexOf(ans)>-1) return LEANN_LABELS;
  return null;
}
function leannFamilyGuard(){
  function isTitleStr(c){
    return LEANN_ALBUM_TITLES.indexOf(c)>-1 || LEANN_SONG_TITLES.indexOf(c)>-1 || LEANN_FILM_TITLES.indexOf(c)>-1;
  }
  LEANN_MC.forEach(function(q){
    var ans=q.choices[q.a];
    var fam=leannFamilyOf(q.q, ans);
    var A=subKindAnswer(q, ans), dom=subKindDom(q, ans);
    function cleanFor(c){ return !distractorBad(q, ans, A, dom, c); }
    function inFam(c){
      if(fam==="pair") return LEANN_SONG_TITLES.indexOf(c)>-1 || isLeannSongPair(c);
      if(fam) return fam.indexOf(c)>-1;
      return !isTitleStr(c);
    }
    var used={}; q.choices.forEach(function(c){ used[norm(c)]=1; });
    var changed=false;
    q.choices=q.choices.map(function(c, i){
      if(i===q.a || inFam(c)) return c;
      var repl=null;
      var candLists = fam==="pair" ? [leannPairPicks(ans)]
        : fam ? [fam]
        : [LEANN_ANSWERS.filter(function(x){ return !isTitleStr(x); })];
      for(var li=0; li<candLists.length && !repl; li++){
        var cand=shuffle(candLists[li].slice());
        for(var ci=0; ci<cand.length; ci++){
          var x=cand[ci];
          if(x===ans || used[norm(x)] || !inFam(x) || !cleanFor(x)) continue;
          repl=x; break;
        }
      }
      if(!repl) return c;
      delete used[norm(c)]; used[norm(repl)]=1; changed=true;
      return repl;
    });
    if(changed){ q.choices=shuffle(q.choices); q.a=q.choices.indexOf(ans); }
  });
}
function titleCaseName(s){
  var CONN={and:1,of:1,the:1,a:1,an:1,in:1,on:1,at:1,to:1,for:1,or:1,de:1,van:1,von:1,der:1,di:1,la:1,le:1};
  var tokens=String(s).split(/(\s+)/), firstWord=true;
  return tokens.map(function(tok){
    if(!tok.trim()) return tok;
    var out=tok.split("-").map(function(w){
      var core=w.replace(/^[^A-Za-zÀ-ÿ]+/,"").replace(/[^A-Za-zÀ-ÿ'.]+$/,"");
      if(!firstWord && CONN[core.toLowerCase()]) return w;
      var m=w.match(/^([^A-Za-zÀ-ÿ]*)([A-Za-zÀ-ÿ])(.*)$/);
      if(!m) return w;
      var r=m[1]+m[2].toUpperCase()+m[3];
      var mm=r.match(/^(Mc)([a-z])(.*)$/);
      if(mm) r="Mc"+mm[2].toUpperCase()+mm[3];
      return r;
    }).join("-");
    firstWord=false;
    return out;
  }).join("");
}
function properNameKindSet(q, ans){
  if(CASE_STOP[norm(ans)]) return false;
  var ki=kindInfoAll(ans);
  if(ki.kind==="person" || ki.kind==="country" || ki.kind==="state" || ki.kind==="group") return true;
  if(CASE_SURNAME[norm(ans)]) return true;
  var sk=subKindAnswer(q, ans);
  if(!sk) return false;
  /* The dog/cat subkinds name characters in the Trivia Sheet ("Snot" the
     dog); in the authored banks the same subkind fires for
     baby-animal questions whose answers are common nouns ("puppy"),
     so it only gates DJ questions. */
  var isDJ=typeof q.cat==="string" && (q.cat==="Trivia" || q.cat==="Trivia Names" || q.cat==="Trivia Faces");
  return sk==="character" || sk==="title"
      || (isDJ && (sk==="dog" || sk==="cat"))
      || sk.indexOf("person:")===0 || sk.indexOf("place:")===0
      || sk.indexOf("brand:")===0 || sk.indexOf("team:")===0;
}
function normalizeChoiceCasing(){
  var pools=[DJ_MC, DJ_FACE_MC, DJ_REAL, DJ_PLACES, LEANN_MC, LEANN_PIC];
  ["easy","medium","hard","vhard"].forEach(function(t){ pools.push(TEXT[t], CAPITALS[t], PICS[t]); });
  Object.keys(NEWCAT).forEach(function(k){ pools.push(NEWCAT[k]); });
  Object.keys(NEWBANKS).forEach(function(k){ pools.push(NEWBANKS[k]); });
  var seen=[];
  pools.forEach(function(pool){
    if(!Array.isArray(pool)) return;
    pool.forEach(function(q){
      if(!q || q.type!=="mc" || !Array.isArray(q.choices) || seen.indexOf(q)>-1) return;
      seen.push(q);
      q.choices=q.choices.map(function(c){
        if(typeof c!=="string") return c;
        var canon=CASE_CANON[norm(c)];
        /* Never strip a hyphen the bank wrote ("Winnie-the-Pooh"
           keeps its hyphens — the canon only adds punctuation,
           it does not remove it). */
        if(canon && canon!==c && !(c.indexOf("-")>-1 && canon.indexOf("-")===-1)){ CASE_FIXED++; return canon; }
        return c;
      });
      var ans=q.choices[q.a];
      if(typeof ans==="string" && properNameKindSet(q, ans)){
        q.choices=q.choices.map(function(c){
          if(typeof c!=="string" || /[A-Z]/.test(c)) return c;
          var t=titleCaseName(c);
          if(t!==c){ CASE_FIXED++; return t; }
          return c;
        });
      }
    });
  });
}
function accentTwinAudit(){
  var pools=[DJ_MC, DJ_FACE_MC, DJ_REAL, DJ_PLACES, LEANN_MC, LEANN_PIC];
  ["easy","medium","hard","vhard"].forEach(function(t){ pools.push(TEXT[t], CAPITALS[t], PICS[t]); });
  Object.keys(NEWCAT).forEach(function(k){ pools.push(NEWCAT[k]); });
  Object.keys(NEWBANKS).forEach(function(k){ pools.push(NEWBANKS[k]); });
  var seen=[];
  pools.forEach(function(pool){
    if(!Array.isArray(pool)) return;
    pool.forEach(function(q){
      if(!q || q.type!=="mc" || !Array.isArray(q.choices) || seen.indexOf(q)>-1) return;
      seen.push(q);
      ACCENT_TWIN_STATS.checked++;
      var keys={}, twin=false;
      q.choices.forEach(function(c){ var k=norm(foldAccents(c)); if(keys[k]) twin=true; keys[k]=1; });
      if(!twin) return;
      if(fixMCQuestion(q, ALL_MC_QUESTIONS) && mcChoicesValid(q)){ ACCENT_TWIN_STATS.repaired++; return; }
      q.mcExcluded=true;
      q.mcExcludeReason="accent-variant duplicate choices";
      ACCENT_TWIN_STATS.excluded++;
    });
  });
}
function finalSetSweep(){
  function setShapeValid(q){
    if(!mcChoicesValid(q)) return false;
    var ans=q.choices[q.a];
    var A=subKindAnswer(q, ans), dom=subKindDom(q, ans);
    for(var i=0;i<q.choices.length;i++){
      if(i===q.a) continue;
      if(distractorBad(q, ans, A, dom, q.choices[i])) return false;
    }
    return true;
  }
  ALL_MC_QUESTIONS.forEach(function(q){
    if(!q || q.type!=="mc") return;
    FINAL_SET_STATS.checked++;
    if(q.mcExcluded || setShapeValid(q)) return;
    q.mcExcluded=true;
    q.mcExcludeReason="set cannot field 3 same-kind choices (final sweep)";
    FINAL_SET_STATS.excluded++;
  });
}
function weakCityRegion(){
  if(WEAK_CITY_REGION) return WEAK_CITY_REGION;
  var map={};
  try{
    Object.keys(CAP_PAIRS).forEach(function(t){
      CAP_PAIRS[t].forEach(function(p){
        var reg=COUNTRY_NORM[norm(p[0])];
        if(reg) map[norm(p[1])]=reg;
      });
    });
  }catch(e){}
  WEAK_CITY_REGION=map;
  return map;
}
function weakRegionOf(s){
  var ci=kindInfoAll(s);
  if(ci.kind==="country") return ci.region||null;
  return weakCityRegion()[norm(s)]||null;
}
function weakYearOf(s){ var m=String(s).match(/(\d{4})/); return m?parseInt(m[1],10):null; }
function weakHash(str){
  var a=0; str=String(str);
  for(var i=0;i<str.length;i++){ a=Math.imul(a^str.charCodeAt(i), 3432918353); a=(a<<13)|(a>>>19); }
  return (a>>>0)/4294967296;
}
function weakStemOrdinal(q){
  var t=" "+String(q&&q.q||"").toLowerCase()+" ";
  var m=t.match(/\b(\d{1,2})\s*(?:st|nd|rd|th)\b/);
  if(m) return parseInt(m[1],10);
  for(var i=WEAK_ORD_WORDS.length-1;i>=0;i--){
    if(t.indexOf(" "+WEAK_ORD_WORDS[i]+" ")>-1 || t.indexOf(" "+WEAK_ORD_WORDS[i]+"-")>-1) return i+1;
  }
  return null;
}
function weakStateDist(fromState, toState){
  if(!fromState || !toState) return null;
  if(fromState===toState) return 0;
  var seen={}; seen[fromState]=0;
  var frontier=[fromState];
  while(frontier.length){
    var next=[];
    for(var i=0;i<frontier.length;i++){
      var nbs=STATE_NEIGHBORS[frontier[i]]||[];
      for(var j=0;j<nbs.length;j++){
        if(seen[nbs[j]]===undefined){
          seen[nbs[j]]=seen[frontier[i]]+1;
          if(nbs[j]===toState) return seen[nbs[j]];
          next.push(nbs[j]);
        }
      }
    }
    frontier=next;
  }
  return 99;
}
function weakStateCanonOf(s){
  var ci=kindInfoAll(s);
  if(ci.kind==="state") return ci.state||s;
  return (typeof djStateCanon==="function") ? djStateCanon(s) : null;
}
/* Per-question audit context, computed once per question. */
function weakContext(q){
  var ans=q.choices[q.a];
  var ai=kindInfoAll(ans);
  var A=subKindAnswer(q, ans), dom=subKindDom(q, ans);
  var stem=String(q.q||"");
  var ctx={q:q, ans:ans, ai:ai, A:A, dom:dom,
    numCtx:/how many|how much|number of|count of/i.test(stem),
    ansRegion:weakRegionOf(ans),
    ordinal:(A==="president") ? weakStemOrdinal(q) : null,
    presIdx:(A==="president") ? PRESIDENT_NAMES.indexOf(ans) : -1,
    titleMisfire:(A==="title" && /^\s*who\b/i.test(stem)),
    animalMisfire:((A==="animal" || A==="animal:bird" || A==="animal:fish") && /^\s*who\b/i.test(stem) &&
                   (kindInfoAll(ans).kind==="person" ||
                    (/^[A-Z][a-z]+(\s+[A-Z]\.)?\s+[A-Z][a-z]+/.test(ans) &&
                     !!(ANIMAL_HOMONYM[norm(ans).split(" ").pop()] || ANIMAL_NORM[norm(ans).split(" ").pop()])))),
    geoState:(ai.kind==="state" && /border|located|where is|in which state|coast|part of|flows through|region of/i.test(stem)) ? (ai.state||ans) : null,
    shape:null};
  if(ctx.geoState){
    var distMap={}, frontier=[ctx.geoState]; distMap[ctx.geoState]=0;
    while(frontier.length){
      var nx=[];
      frontier.forEach(function(st){
        (STATE_NEIGHBORS[st]||[]).forEach(function(nb){
          if(distMap[nb]===undefined){ distMap[nb]=distMap[st]+1; nx.push(nb); }
        });
      });
      frontier=nx;
    }
    ctx.stateDistMap=distMap;
  }
  ctx.quoted=(function(){ var m=stem.match(/['\u2018]([^'\u2019]+)['\u2019]/) || stem.match(/"([^"]+)"/); return m ? norm(m[1]) : null; })();
  ctx.stemType=(function(){ var m=stem.toLowerCase().match(/what is the (capital|currency|language|symbol|motto|anthem|flower|bird|animal) of/); return m ? m[1] : null; })();
  ctx.stemWords={};
  norm(stem).split(" ").forEach(function(w){ if(w.length>=5) ctx.stemWords[w]=1; });
  /* Region tallies for the set as authored. */
  ctx.crossRegion=0; ctx.sameRegion=0;
  var regionTally={};
  q.choices.forEach(function(c, i){
    if(i===q.a) return;
    var r=weakRegionOf(c);
    if(r){ regionTally[r]=(regionTally[r]||0)+1; if(ctx.ansRegion){ if(r===ctx.ansRegion) ctx.sameRegion++; else ctx.crossRegion++; } }
  });
  /* The region replacements should aim at when the answer's own
     region is unlisted (Djibouti is missing from the region
     table): the set's own majority region, when it has one. */
  ctx.setRegion=ctx.ansRegion;
  if(!ctx.setRegion){
    Object.keys(regionTally).forEach(function(r){ if(regionTally[r]>=2) ctx.setRegion=r; });
  }
  return ctx;
}
/* Is distractor c numerically implausible next to the answer? */
function weakNumeric(ctx, c){
  var ai=ctx.ai, ci=kindInfo(c), stem=String(ctx.q.q||"");
  if(ai.kind==="year" && !ctx.numCtx){
    if(ci.kind==="year") return Math.abs(ci.value-ai.value)>(ai.value>=1700?40:150);
    if(ci.kind==="fulldate"){ var cy=weakYearOf(c); return cy!==null && Math.abs(cy-ai.value)>40; }
    return false;
  }
  if(ai.kind==="fulldate"){
    var ay=weakYearOf(ctx.ans), cy2=weakYearOf(c);
    return ay!==null && cy2!==null && Math.abs(cy2-ay)>40;
  }
  if(ai.kind==="decade") return ci.value!==undefined && ci.value!==null && Math.abs(ci.value-ai.value)>30;
  if(ai.kind==="number" || ai.kind==="quantity" || (ai.kind==="year" && ctx.numCtx)){
    var av=ai.value, dv=ci.value;
    if(av===null || av===undefined || dv===null || dv===undefined) return false;
    if(av===dv) return false;
    if(av>0 && dv>0){ var r=Math.max(av,dv)/Math.min(av,dv); return r>10 || (av>=100 && r>6) || (av>=1000 && r>3); }
    if(av>0 && dv===0) return av>=20;
    if(av===0) return dv>=100;
    return false;
  }
  return false;
}
/* Era/domain distance, beyond the fences the earlier passes own. */
function weakDistance(ctx, c){
  if(!ctx.q.img && ctx.ansRegion && ctx.crossRegion>=2){
    var r=weakRegionOf(c);
    if(r && r!==ctx.ansRegion) return "region";
  }
  if(!ctx.q.img && ctx.ansRegion && ctx.sameRegion===0){
    var r2=weakRegionOf(c);
    if(r2 && r2!==ctx.ansRegion) return "region";
  }
  if(ctx.geoState){
    var cs=weakStateCanonOf(c);
    if(cs){ var d=ctx.stateDistMap ? (ctx.stateDistMap[cs]===undefined?99:ctx.stateDistMap[cs]) : weakStateDist(ctx.geoState, cs); if(d!==null && d>3) return "state"; }
  }
  if(ctx.ordinal && ctx.presIdx>-1){
    var ix=PRESIDENT_NAMES.indexOf(c);
    if(ix>-1 && Math.abs(ix-ctx.presIdx)>8) return "president";
  }
  return null;
}
/* Dead choices: junk strings, entity duplicates, also-correct. */
function weakDead(ctx, c, others, stemAnswers){
  var t=String(c);
  if(/[?]/.test(t) || /\(not\s/i.test(t) || /\betc\.?\b/i.test(t)) return "junk";
  var cn=norm(c);
  /* An accepted alternate of this very question is a second
     correct answer sitting in the choices. */
  if(ctx.q.accept && ctx.q.accept.some(function(x){ return norm(x)===cn; })) return "also-correct";
  /* The stored answer of a twin question (same stem, different
     answer) is also correct for this stem by the bank's own
     testimony. */
  if(stemAnswers){
    var set=stemAnswers[norm(ctx.q.q||"")+"|"+(ctx.q.img||"")];
    if(set && set[cn] && cn!==norm(ctx.ans)) return "also-correct";
  }
  /* One name contained in the other, token by token ("Elephant"
     offered against "African elephant", "Guinea" against
     "Guinea-Bissau"): the shorter names the same entity, so it
     is a second correct answer, not a distractor. */
  var aToks=norm(ctx.ans).split(" "), cToks=cn.split(" ");
  if(cToks.length<aToks.length && cToks.every(function(t){ return aToks.indexOf(t)>-1; })) return "also-correct";
  if(aToks.length<cToks.length && aToks.every(function(t){ return cToks.indexOf(t)>-1; })) return "also-correct";
  /* The answer itself under an alias: a state abbreviation for
     its full name (or back), a team under its other spelling. */
  var ac=weakStateCanonOf(ctx.ans), cc=weakStateCanonOf(c);
  if(ac && cc && norm(ac)===norm(cc) && cn!==norm(ctx.ans)) return "also-correct";
  if(teamLeagueOf(ctx.ans, ctx.q) && teamLeagueOf(c, ctx.q) && canonTeam(c)===canonTeam(ctx.ans) && cn!==norm(ctx.ans)) return "also-correct";
  /* Entity duplicates among the distractors themselves. */
  for(var i=0;i<others.length;i++){
    var o=others[i]; if(o===c) continue;
    var on=norm(o);
    if(on===cn) return "duplicate";
    var oc=weakStateCanonOf(o);
    if(cc && oc && norm(oc)===norm(cc)) return "duplicate";
    if(teamLeagueOf(o, ctx.q) && teamLeagueOf(c, ctx.q) && canonTeam(o)===canonTeam(c)) return "duplicate";
    if(on+"s"===cn || cn+"s"===on) return "duplicate";
    var oToks=on.split(" ");
    if(cToks.length<oToks.length && cToks.every(function(t){ return oToks.indexOf(t)>-1; })) return "duplicate";
    if(oToks.length<cToks.length && oToks.every(function(t){ return cToks.indexOf(t)>-1; })) return "duplicate";
    if((cn===on+" city" || on===cn+" city" || cn===on+" state" || on===cn+" state")) return "duplicate";
  }
  return null;
}
/* Grammar/interrogative fit the kind pass cannot see: a who-stem
   whose distractor is no kind of who. (Counted for the audit;
   in practice the kind fence has already cleared these.) */
function weakGrammar(ctx, c){
  var stem=String(ctx.q.q||"");
  if(/^\s*who\b|\bwho\s+(was|is|wrote|sang|painted|played|directed|founded|invented)\b/i.test(stem)){
    var ki=kindInfoAll(c);
    if(ki.kind==="country" || ki.kind==="continent" || ki.kind==="state" || ki.kind==="decade" ||
       ki.kind==="year" || ki.kind==="fulldate" || ki.kind==="month" || ki.kind==="season" ||
       ki.kind==="number" || ki.kind==="quantity" || ki.kind==="color" || ki.kind==="sky") return "who";
    var sk=subKindChoice(ctx.q, c);
    if(sk && (sk.indexOf("brand:")===0 || sk.indexOf("place:")===0 || sk.indexOf("date:")===0 ||
              sk.indexOf("animal")===0 || sk==="pair:animal" || sk==="title" || sk==="phrase" ||
              sk==="number" || sk==="quantity" || sk==="color" || sk==="sky" || sk==="weapon" ||
              sk==="food" || sk==="letter" || sk==="acronym" || sk==="element" || sk==="symbol" ||
              sk==="compass" || sk==="side" || sk==="sport" || sk==="language" || sk.indexOf("def:")===0)) return "who";
  }
  return null;
}
/* Length/format shape of the whole set (test 3). */
function weakShape(q){
  var ans=q.choices[q.a];
  var ds=q.choices.filter(function(_, i){ return i!==q.a; });
  var al=String(ans).length;
  var dl=ds.map(function(d){ return String(d).length; }).sort(function(a,b){ return a-b; });
  var med=dl[1];
  var clustered=dl[2]/Math.max(1, dl[0])<=1.8;
  var lenFlag=!!(med>0 && clustered && (al>2*med || al<0.5*med));
  var severe=!!(med>0 && clustered && (al>3.5*med || al<0.3*med));
  function feat(s){ return { init:/\b[A-Z]\.\s|\b[A-Z]\.$/.test(s), the:/^the\s/i.test(s), digit:/\d/.test(s), comma:/,/.test(s), wc:String(s).trim().split(/\s+/).length }; }
  var af=feat(ans), dfs=ds.map(feat), strong=[], medium=[];
  if(af.init && !dfs.some(function(f){ return f.init; })) strong.push("initial");
  if(af.digit && !dfs.some(function(f){ return f.digit; })) strong.push("digit");
  if(af.the && !dfs.some(function(f){ return f.the; })) medium.push("the");
  if(af.comma && !dfs.some(function(f){ return f.comma; })) medium.push("comma");
  if(dfs.every(function(f){ return f.wc===dfs[0].wc; }) && af.wc!==dfs[0].wc) medium.push("wordcount");
  var fmtFlag=strong.length>0 || (medium.length>0 && lenFlag) || medium.length>=2;
  return {lenFlag:lenFlag, severe:severe, fmtFlag:fmtFlag, strong:strong, medium:medium,
          flagged:lenFlag||fmtFlag, ansLen:al, med:med,
          outlierIdx:(al>med ? ds.map(function(d,i2){ return {d:d,i2:i2,l:String(d).length}; }).sort(function(x,y){ return x.l-y.l; })[0]
                              : ds.map(function(d,i2){ return {d:d,i2:i2,l:String(d).length}; }).sort(function(x,y){ return y.l-x.l; })[0])};
}
function enforceWeakChoices(){
  /* Pin the stream for the whole pass: the one generator this
     pass borrows (genKindDistractors) shuffles its colour list
     with rand(), and the baked bank must equal the fallback bank
     whatever state the stream is in when the pass runs. */
  installSeed("trivia-or-nada-weak-v1");
  var stats={checked:0, flaggedT1:0, flaggedT2:0, flaggedT3:0, flaggedT4:0, flaggedT5:0,
             fixed:0, fixedRedealt:0, fixedAuthored:0, excluded:0, residualShape:0};
  var exclusions=[], arguablyCorrect=[], residuals=[], examples=[];
  /* Twin-stem testimony: every stem's stored answers. */
  var stemAnswers={};
  ALL_MC_QUESTIONS.forEach(function(o){
    if(!o || !Array.isArray(o.choices)) return;
    var k=norm(o.q||"")+"|"+(o.img||"");
    (stemAnswers[k]=stemAnswers[k]||{})[norm(o.choices[o.a])]=1;
  });
  /* Harvest, built once before any set is touched: correct
     answers by kind key (the spec's replacement source), then
     every choice string by subkind (the earlier passes' source). */
  var ansByKind={}, choiceBySub={}, genericByCatW={}, genericAllW={}, candSrcStem={};
  function kindKey(info){ return info.kind+(info.gender?":"+info.gender:""); }
  ALL_MC_QUESTIONS.forEach(function(o){
    if(!o || !Array.isArray(o.choices)) return;
    var aStr=o.choices[o.a];
    if(aStr){ var kk=kindKey(kindInfoAll(aStr)); (ansByKind[kk]=ansByKind[kk]||{})[norm(aStr)]=aStr; }
    o.choices.forEach(function(c){
      if(!candSrcStem[norm(c)]) candSrcStem[norm(c)]=o.q||"";
      var sk=subKindStr(c);
      if(sk){ var per=(choiceBySub[sk]=choiceBySub[sk]||{}); per[norm(c)]=c; }
      else {
        var gm=(genericByCatW[o.cat||""]=genericByCatW[o.cat||""]||{});
        if(!gm[norm(c)]) gm[norm(c)]=c;
        if(!genericAllW[norm(c)]) genericAllW[norm(c)]=c;
      }
    });
  });
  var catAns={}, domMap={}, ansByKindCat={}, srcStem={}, stemWordFreq={}, candWords={};
  ALL_MC_QUESTIONS.forEach(function(o){
    if(!o) return;
    var seenW={};
    norm(o.q||"").split(" ").forEach(function(w){ if(w.length>=5 && !seenW[w]){ seenW[w]=1; stemWordFreq[w]=(stemWordFreq[w]||0)+1; } });
  });
  ALL_MC_QUESTIONS.forEach(function(o){
    if(o && Array.isArray(o.choices) && o.choices[o.a]){
      var an=norm(o.choices[o.a]);
      catAns[an]=o.cat||"";
      srcStem[an]=o.q||"";
      domMap[an]=djDomainOf(o.q||"");
      var cw={};
      norm(o.q||"").split(" ").forEach(function(w){ if(w.length>=5) cw[w]=1; });
      candWords[an]=cw;
      (o.choices||[]).forEach(function(c){ if(!candWords[norm(c)]) candWords[norm(c)]=cw; });
      var kk2=kindKey(kindInfoAll(o.choices[o.a]));
      var bk=(ansByKindCat[kk2+"|"+(o.cat||"")]=ansByKindCat[kk2+"|"+(o.cat||"")]||{});
      bk[an]=o.choices[o.a];
    }
  });
  var allAnswersList=null;
  var mergedCache={}, mergedSetCache={};
  var allAnswers=Object.keys(ansByKind).reduce(function(acc, k){
    Object.keys(ansByKind[k]).forEach(function(n){ acc[n]=ansByKind[k][n]; }); return acc;
  }, {});
  function pureCapName(str){
    var t=String(str).replace(/\(.*?\)/g," ").trim();
    if(!t) return false;
    return t.split(/\s+/).every(function(tok){ return /^[A-Z\u00C0-\u00DE0-9]/.test(tok); });
  }
  function quotedTerm(stem){
    var m=String(stem||"").match(/['\u2018]([^'\u2019]+)['\u2019]/) || String(stem||"").match(/"([^"]+)"/);
    return m ? norm(m[1]) : null;
  }
  function candClean(ctx, cand, used, others){
    if(used[norm(cand)]) return false;
    /* A pure proper name (every word capitalised: a person, a
       people, a named place) is not generic company for a common-
       noun or phrase answer in the authored banks — it reads as
       a different kind of thing and eliminates itself. The DJ
       sheet's generated sets deal its own names by design and
       keep their rule; picture sets likewise. */
    if(!ctx.A && !ctx.q.img && ctx.q.cat!=="Trivia" && ctx.q.cat!=="Comics & Superheroes" &&
       pureCapName(cand) && !pureCapName(ctx.ans)) return false;
    /* A definition phrase harvested from a sibling question whose
       quoted head term is a near-twin of this stem's ('target
       market' for 'target audience') risks being a paraphrase of
       the correct definition — a second correct answer, not a
       distractor. Reject when it also shares two content words
       with the answer. */
    if(ctx.stemType && ctx.candSrcStem){
      var cst=ctx.candSrcStem[norm(cand)]||"";
      var cm2=cst.toLowerCase().match(/what is the (capital|currency|language|symbol|motto|anthem|flower|bird|animal) of/);
      if(cm2 && cm2[1]!==ctx.stemType) return false;
    }
    if(ctx.candSrcStem && String(cand).split(/\s+/).length>=5){
      var qa=ctx.quoted, qb=quotedTerm(ctx.candSrcStem[norm(cand)]);
      if(qa && qb && qa!==qb){
        var qaW=qa.split(" "), qbW=qb.split(" "), share=false;
        qaW.forEach(function(w){ if(qbW.indexOf(w)>-1) share=true; });
        if(share){
          var aToks={}; norm(ctx.ans).split(" ").forEach(function(w){ if(w.length>=5) aToks[w]=1; });
          var shared=0;
          norm(cand).split(" ").forEach(function(w){ if(w.length>=5 && aToks[w]) shared++; });
          if(shared>=2) return false;
        }
      }
    }
    /* The subkind fence is the finer gate: a candidate that
       satisfies it (a president for a president answer, whose
       broad kind may read "other" where the answer reads
       "person" — the name tables do not carry every president)
       is same-kind company even when the broad kinds differ. */
    var kindOk=kindCompatibleQ(ctx.ai, cand, ctx.q, ctx.ans) ||
               (ctx.A && subKindMatch(ctx.q, ctx.A, cand));
    if(!kindOk) return false;
    if(distractorBad(ctx.q, ctx.ans, ctx.A, ctx.dom, cand)) return false;
    if(weakDistance(ctx, cand)) return false;
    var qInd=questionIndustry(ctx.q, ctx.ans), cInd=industryOf(cand);
    if(qInd && cInd && cInd!==qInd) return false;
    if(weakNumeric(ctx, cand)) return false;
    if(weakDead(ctx, cand, others, stemAnswers)) return false;
    if(weakGrammar(ctx, cand)) return false;
    return true;
  }
  function candScore(ctx, cand, wantLen){
    var s=kindCloseness(ctx.ai, ctx.ans, cand);
    if(ctx.catAns && ctx.catAns[norm(cand)]===(ctx.q.cat||"")) s-=120;
    if(ctx.setRegion){ var r=weakRegionOf(cand); if(r===ctx.setRegion) s-=500; else if(r) s+=500; }
    if(ctx.A==="animal"){ var skc=subKindChoice(ctx.q, cand);
      if(skc!=="animal:bird" && skc!=="animal:fish" && skc!=="animal:young"){
        var lw=norm(cand).split(" ").pop();
        if(BIRD_NORM[lw]) skc="animal:bird"; else if(FISH_NORM[lw]) skc="animal:fish";
      }
      if(skc==="animal:bird" || skc==="animal:fish" || skc==="animal:young") s+=150; }
    if(ctx.candWords){ var cw2=ctx.candWords[norm(cand)]; if(cw2){ var bonus=0;
        Object.keys(cw2).forEach(function(w){
          if(!ctx.stemWords[w]) return;
          var f=(ctx.stemWordFreq||{})[w]||999;
          if(f<=40) bonus+=100; else if(f<=200) bonus+=30;
        });
        s-=Math.min(bonus,200); } }
    if(ctx.domMap && (ctx.q.cat==="Trivia" || ctx.q.cat==="Comics & Superheroes")){ var dAns=djDomainOf(ctx.q.q||""), dCand=ctx.domMap[norm(cand)]; if(dAns && dCand){ s+=(dAns===dCand ? -150 : 150); } }
    if(ctx.geoState){ var cs=weakStateCanonOf(cand); if(cs){ var d=ctx.stateDistMap ? (ctx.stateDistMap[cs]===undefined?99:ctx.stateDistMap[cs]) : null; if(d!==null) s+=d*40; } }
    if(ctx.ordinal && ctx.presIdx>-1){ var ix=PRESIDENT_NAMES.indexOf(cand); if(ix>-1) s+=Math.abs(ix-ctx.presIdx)*20; }
    if(wantLen){ s+=Math.abs(String(cand).length-String(ctx.ans).length)*6; }
    s+=weakHash(String(ctx.q.q||"")+""+cand)*3;
    return s;
  }
  function pickWeak(ctx, used, others, opts){
    opts=opts||{};
    /* Generated in-domain neighbours first for the enumerable
       kinds: a year, number, quantity, decade, date, month,
       season or colour is best repaired by its own scale. */
    if(/^(year|decade|fulldate|number|quantity|month|season|color)$/.test(ctx.ai.kind)){
      var gen=genKindDistractors(ctx.ans, ctx.ai, used, 3);
      for(var gi=0; gi<gen.length; gi++){
        if(candClean(ctx, gen[gi], used, others)){ used[norm(gen[gi])]=1; return gen[gi]; }
      }
    }
    var kk=kindKey(ctx.ai);
    var cacheKey=kk+"|"+(ctx.A||"")+"|"+(ctx.q.cat||"");
    var mergedList=mergedCache[cacheKey], merged=mergedSetCache[cacheKey];
    if(!mergedList){
      merged={}; mergedList=[];
      function mergeList(list){ if(!list) return; list.forEach(function(c){ var n=norm(c); if(!merged[n]){ merged[n]=1; mergedList.push(c); } }); }
      var catBucket=ansByKindCat[kk+"|"+(ctx.q.cat||"")];
      if(catBucket) mergeList(Object.keys(catBucket).map(function(n){ return catBucket[n]; }));
      mergeList(Object.keys(ansByKind[kk]||{}).map(function(n){ return ansByKind[kk][n]; }));
      if(ctx.A && choiceBySub[ctx.A]) mergeList(Object.keys(choiceBySub[ctx.A]).map(function(n){ return choiceBySub[ctx.A][n]; }));
      if(ctx.A && SUBKIND_POOLS2[ctx.A]) mergeList(SUBKIND_POOLS2[ctx.A]);
      var qInd2=questionIndustry(ctx.q, ctx.ans);
      if(qInd2 && INDUSTRY_POOLS[qInd2]) mergeList(INDUSTRY_POOLS[qInd2]);
      if(!ctx.A){
        var gw=genericByCatW[ctx.q.cat||""];
        if(gw) mergeList(Object.keys(gw).map(function(n){ return gw[n]; }));
        mergeList(Object.keys(genericAllW).map(function(n){ return genericAllW[n]; }));
      }
      if(!ctx.A){
        mergedList=mergedList.filter(function(c){
          var sk=subKindStr(c);
          return !sk || sk==="animal" || sk==="animal:bird" || sk==="animal:fish" || sk==="animal:young";
        });
        var rebuilt={}; mergedList.forEach(function(c){ rebuilt[norm(c)]=1; });
        merged=rebuilt;
      }
      mergedCache[cacheKey]=mergedList; mergedSetCache[cacheKey]=merged;
    }
    var scored=ctx._scoredPool;
    if(!scored){
      /* Stage 1: the cheap score terms only (closeness, category,
         region, shared-topic words, length), pruned to the best
         400 — the full score's remaining terms (domain, state
         distance, president distance, hash jitter) move a
         candidate by less than the prune margin can hide. */
      var stage1=[];
      for(var ci2=0; ci2<mergedList.length; ci2++){
        var cand=mergedList[ci2], cn2=norm(cand);
        if(!kindCompatibleQ(ctx.ai, cand, ctx.q, ctx.ans) && !(ctx.A && subKindMatch(ctx.q, ctx.A, cand))) continue;
        var s1=kindCloseness(ctx.ai, ctx.ans, cand);
        if(ctx.A && subKindMatch(ctx.q, ctx.A, cand)) s1-=300;
        if(ctx.ordinal && ctx.presIdx>-1){ var pix=PRESIDENT_NAMES.indexOf(cand); if(pix>-1) s1+=Math.abs(pix-ctx.presIdx)*20; }
        if(ctx.geoState){ var scs=weakStateCanonOf(cand); if(scs && ctx.stateDistMap) s1+=(ctx.stateDistMap[scs]===undefined?99:ctx.stateDistMap[scs])*40; }
        if(ctx.catAns && ctx.catAns[cn2]===(ctx.q.cat||"")) s1-=120;
        if(ctx.setRegion){ var rr=weakRegionOf(cand); if(rr===ctx.setRegion) s1-=500; else if(rr) s1+=500; }
        s1+=Math.abs(String(cand).length-String(ctx.ans).length)*6;
        if(ctx.candWords){ var cw9=ctx.candWords[cn2]; if(cw9){ var b9=0;
          Object.keys(cw9).forEach(function(w){ if(!ctx.stemWords[w]) return; var f=(ctx.stemWordFreq||{})[w]||999; if(f<=40) b9+=100; else if(f<=200) b9+=30; });
          s1-=Math.min(b9,200); } }
        stage1.push({c:cand, s:s1});
      }
      stage1.sort(function(x, y){ return x.s-y.s || (x.c<y.c?-1:(x.c>y.c?1:0)); });
      scored=stage1.slice(0, 400).map(function(o){ return {c:o.c, s:candScore(ctx, o.c, true)}; });
      scored.sort(function(x, y){ return x.s-y.s || (x.c<y.c?-1:(x.c>y.c?1:0)); });
      ctx._scoredPool=scored;
    }
    function sharesWord(c2){
      var cw3=ctx.candWords ? ctx.candWords[norm(c2)] : null;
      if(!cw3) return false;
      var ks=Object.keys(cw3);
      for(var wi=0; wi<ks.length; wi++){
        if(ctx.stemWords[ks[wi]] && ((ctx.stemWordFreq||{})[ks[wi]]||999)<=500) return true;
      }
      return false;
    }
    for(var pass2=0; pass2<2; pass2++){
      for(var si=0; si<scored.length; si++){
        var c2=scored[si].c;
        if(used[norm(c2)]) continue;
        if(opts.requireWord && !sharesWord(c2)) continue;
        if(pass2===0 && opts.wantFeat==="init" && !/\b[A-Z]\.\s|\b[A-Z]\.$/.test(c2)) continue;
        if(pass2===0 && opts.wantFeat==="digit" && !/\d/.test(c2)) continue;
        if(pass2===0 && opts.sameRegion && ctx.setRegion && weakRegionOf(c2)!==ctx.setRegion) continue;
        if(pass2===0 && opts.lenWindow){
          var L=String(c2).length, AL=String(ctx.ans).length;
          if(L<AL*opts.lenWindow[0] || L>AL*opts.lenWindow[1]) continue;
        }
        if(!candClean(ctx, c2, used, others)) continue;
        used[norm(c2)]=1;
        return c2;
      }
    }
    /* Last resort: every harvested choice string in the game. */
    if(!allAnswersList) allAnswersList=Object.keys(allAnswers).map(function(n){ return allAnswers[n]; });
    var scored2=[];
    for(var ci3=0; ci3<allAnswersList.length; ci3++){
      var cand3=allAnswersList[ci3], cn3=norm(cand3);
      if(merged[cn3] || used[cn3]) continue;
      if(!kindCompatibleQ(ctx.ai, cand3, ctx.q, ctx.ans) && !(ctx.A && subKindMatch(ctx.q, ctx.A, cand3))) continue;
      scored2.push({c:cand3, s:candScore(ctx, cand3, opts.wantLen)});
    }
    scored2.sort(function(x, y){ return x.s-y.s || (x.c<y.c?-1:(x.c>y.c?1:0)); });
    for(var sj=0; sj<scored2.length; sj++){
      if(!candClean(ctx, scored2[sj].c, used, others)) continue;
      used[norm(scored2[sj].c)]=1;
      return scored2[sj].c;
    }
    var gen2=genKindDistractors(ctx.ans, ctx.ai, used, 1);
    if(gen2.length && candClean(ctx, gen2[0], used, others)){ used[norm(gen2[0])]=1; return gen2[0]; }
    return null;
  }
  ALL_MC_QUESTIONS.forEach(function(q){
    if(!q || !Array.isArray(q.choices) || !mcChoicesValid(q)) return;
    if(q.mcExcluded || q.noDeal) return;
    if(choiceDependentStem(q.q)) return;
    stats.checked++;
    var ctx=weakContext(q); ctx.catAns=catAns; ctx.domMap=domMap; ctx.srcStem=srcStem; ctx.candWords=candWords; ctx.stemWordFreq=stemWordFreq; ctx.candSrcStem=candSrcStem;
    var shape=weakShape(q);
    var flags={}; /* choice index -> [tests] */
    q.choices.forEach(function(c, i){
      if(i===q.a) return;
      var others=q.choices.filter(function(_, j){ return j!==q.a && j!==i; });
      var tests=[];
      if(weakNumeric(ctx, c)) tests.push("T1");
      if(weakDistance(ctx, c)) tests.push("T2");
      var dead=weakDead(ctx, c, others, stemAnswers);
      if(dead) tests.push(dead==="also-correct" ? "T5C" : "T5");
      if(weakGrammar(ctx, c)) tests.push("T4");
      if(tests.length) flags[i]=tests;
    });
    var flaggedIdx=Object.keys(flags);
    var hasHard=flaggedIdx.length>0;
    if(!hasHard && !shape.flagged) return;
    if(flaggedIdx.some(function(i){ return flags[i].indexOf("T1")>-1; })) stats.flaggedT1++;
    if(flaggedIdx.some(function(i){ return flags[i].indexOf("T2")>-1; })) stats.flaggedT2++;
    if(shape.flagged) stats.flaggedT3++;
    if(flaggedIdx.some(function(i){ return flags[i].indexOf("T4")>-1; })) stats.flaggedT4++;
    if(flaggedIdx.some(function(i){ return flags[i].indexOf("T5")>-1 || flags[i].indexOf("T5C")>-1; })) stats.flaggedT5++;
    flaggedIdx.forEach(function(i){
      if(flags[i].indexOf("T5C")>-1)
        arguablyCorrect.push({q:q.q, cat:q.cat||"", answer:ctx.ans, other:q.choices[+i], resolution:"pending"});
    });
    if(ctx.animalMisfire && hasHard){
      /* A person answer the classifier reads as an animal from
         its surname (Michael J. Fox): its only fence-valid
         company is animals, and animals are not plausible
         company for a who — out of MC dealing, as above. */
      q.mcExcluded=true;
      q.mcExcludeReason="person answer read as an animal from its surname; no plausible same-kind MC company (weak pass)";
      exclusions.push({q:q.q, cat:q.cat||"", answer:ctx.ans, tests:"T4 (animal-fenced who-question)"});
      stats.excluded++;
      return;
    }
    if(ctx.titleMisfire && hasHard){
      /* A who-question the stem classifier reads as a title
         question: its only fence-valid company is titles, and
         titles are not plausible company for a who — out of
         multiple-choice dealing (typed use is unaffected). */
      q.mcExcluded=true;
      q.mcExcludeReason="who-question read as a title question; no plausible same-kind MC company (weak pass)";
      exclusions.push({q:q.q, cat:q.cat||"", answer:ctx.ans, tests:"T4 (title-fenced who-question)"});
      stats.excluded++;
      return;
    }
    if(q.img && !hasHard){
      /* Picture rounds: the image is the stimulus and a proper
         name's length is its own — the authored company (same
         era faces, neighbouring countries) is kept, and the
         shape flag is reported as a residual, not repaired by
         trading that company away. */
      stats.residualShape++;
      residuals.push({q:q.q, cat:q.cat||"", answer:ctx.ans, why:"picture round: length/format shape is inherent to proper names; authored company kept"});
      return;
    }
    var before=q.choices.slice(), beforeA=q.a;
    var used={}; q.choices.forEach(function(c){ used[norm(c)]=1; });
    var nc=q.choices.slice(), failed=false, touched=false;
    /* Replace hard-flagged distractors first. */
    flaggedIdx.forEach(function(iStr){
      var i=+iStr;
      var othersNow=nc.filter(function(_, j){ return j!==q.a && j!==i; });
      var repl=pickWeak(ctx, used, othersNow, {sameRegion:true, wantLen:shape.flagged});
      if(repl){ nc[i]=repl; touched=true; }
      else failed=true;
    });
    /* Then the shape: trade outlier distractors for length-true
       company until the shape test passes or candidates run out.
       Picture sets keep their authored company (see above), so
       the shape repair runs for text sets only. */
    if(!failed && shape.flagged && !q.img){
      for(var attempt=0; attempt<3; attempt++){
        var probe={choices:nc, a:q.a, q:q.q, cat:q.cat};
        var sh2=weakShape(probe);
        if(!sh2.flagged) break;
        var al=String(ctx.ans).length;
        /* Target: the distractor farthest from the answer's
           length on the offending side. */
        var target=-1, targetScore=-1;
        nc.forEach(function(c, i){
          if(i===q.a || flaggedIdx.indexOf(String(i))>-1) return;
          var dev=(al>sh2.med) ? (al/Math.max(1,String(c).length)) : (String(c).length/Math.max(1,al));
          if(dev>targetScore){ targetScore=dev; target=i; }
        });
        if(target<0) break;
        var othersT=nc.filter(function(_, j){ return j!==q.a && j!==target; });
        var win=(al>sh2.med) ? [0.5, 2.2] : [0.4, 2.0];
        var featWant=sh2.strong.indexOf("initial")>-1 ? "init" : (sh2.strong.indexOf("digit")>-1 ? "digit" : null);
        var repl2=pickWeak(ctx, used, othersT, {sameRegion:true, wantLen:true, lenWindow:win, wantFeat:featWant, requireWord:!ctx.A});
        if(!repl2) break;
        nc[target]=repl2; touched=true;
      }
    }
    if(touched){
      /* Re-verify: the repaired set must pass every fence and
         every hard test, or the repair is not accepted. */
      var probe2={choices:nc, a:q.a, q:q.q, cat:q.cat, accept:q.accept};
      var ok=mcChoicesValid(probe2);
      if(ok){
        for(var vi=0; vi<nc.length; vi++){
          if(vi===q.a) continue;
          if(distractorBad(q, ctx.ans, ctx.A, ctx.dom, nc[vi])){ ok=false; break; }
          var oth=nc.filter(function(_, j){ return j!==q.a && j!==vi; });
          if(weakNumeric(ctx, nc[vi]) || weakDistance(ctx, nc[vi]) || weakDead(ctx, nc[vi], oth, stemAnswers) || weakGrammar(ctx, nc[vi])){ ok=false; break; }
        }
      }
      if(!ok){ failed=true; }
    }
    var shapeAfter=weakShape({choices:(touched&&!failed)?nc:q.choices, a:q.a, q:q.q, cat:q.cat});
    if(failed){
      if(hasHard){
        q.mcExcluded=true;
        q.mcExcludeReason = ctx.titleMisfire ? "who-question read as a title question; no plausible same-kind MC company (weak pass)"
                                             : "weak distractors could not be made plausible (weak pass)";
        exclusions.push({q:q.q, cat:q.cat||"", answer:ctx.ans, tests:flaggedIdx.map(function(i){ return flags[i].join("/"); }).join(", ")});
        arguablyCorrect.forEach(function(e){ if(e.q===q.q && e.resolution==="pending") e.resolution="question excluded from multiple-choice dealing"; });
        stats.excluded++;
        return;
      }
      /* Shape-only failure: keep the authored set (residual). */
      stats.residualShape++;
      residuals.push({q:q.q, cat:q.cat||"", answer:ctx.ans, why:"length/format shape resists pool repair (proper-name length is inherent)"});
      return;
    }
    if(touched){
      q.choices=shuffleDeterministic(nc, q.q);
      q.a=q.choices.indexOf(ctx.ans);
      stats.fixed++; stats.fixedRedealt++;
      arguablyCorrect.forEach(function(e){ if(e.q===q.q && e.resolution==="pending") e.resolution="also-correct distractor replaced from the verified pool"; });
      if(examples.length<10) examples.push({q:q.q, cat:q.cat||"", before:before, beforeA:beforeA, after:q.choices.slice(), afterA:q.a});
    } else if(shape.flagged){
      stats.residualShape++;
      residuals.push({q:q.q, cat:q.cat||"", answer:ctx.ans, why:"no length-true same-kind candidate in the pools"});
    }
    if(touched && shapeAfter.flagged){
      /* Repaired the hard flags; the soft shape remains. */
      stats.residualShape++;
      residuals.push({q:q.q, cat:q.cat||"", answer:ctx.ans, why:"hard flags fixed; length/format shape partially remains"});
    }
  });
  stats.exclusions=exclusions; stats.arguablyCorrect=arguablyCorrect;
  stats.residuals=residuals; stats.examples=examples;
  return stats;
}
/* Deterministic choice shuffle for repaired sets: order by a
   hash of question + string, so every load and every fallback
   run places the repaired choices identically (no rand draws). */
function shuffleDeterministic(choices, seedStr){
  return choices.slice().sort(function(x, y){
    var hx=weakHash(String(seedStr||"")+"|"+x), hy=weakHash(String(seedStr||"")+"|"+y);
    return hx-hy || (x<y?-1:(x>y?1:0));
  });
}
/* ================= DEAL-TIME INVARIANT GUARD =================
   The load-time passes above repair or exclude every bad set they
   can see — but they see the pool through the classifier, and the
   history of this game is a classifier gap found one screenshot at
   a time: a side dealt brands and acronyms, a dog dealt people, a
   state dealt phrases, a team dealt titles, a phobia definition
   dealt a president, a tower, and a song title. This guard is the
   structural answer: it re-runs the final pass's own violation
   test — the full kind/subkind test (distractorBad over
   subKindAnswer, with its subject-domain test) plus the set-shape
   test — at the moment of dealing, on every question every dealer
   is about to hand out. A set that fails is not dealt and not
   filled: the question is skipped for that deal, exactly as if
   the load-time pass had excluded it. Every multiple-choice deal
   in the game flows through mcDealable or pickPicMixed, so no
   dealing path can bypass the check; a question whose stored set
   is clean is completely untouched by it. */
/* ============ AUDIT-GAUNTLET SET GUARD (2026-11-13) ============
   The acceptance audit (25 dealt Gauntlets, 500 questions, reviewed
   in presented form) found a family the kind classifier cannot
   see: sets whose distractors were filled — by the sheet picker or
   a load-time repair swap — with strings of a different SHAPE from
   the answer (capital cities beside a lowercase word, a phrase
   beside a number, quantities in mismatched units, an author
   beside a flower). Every member shares a mechanical signature,
   tested here at deal time like the rest of the guard:
   - a numeric answer (one containing a digit) deals only beside
     distractors that are numeric too (a digit, or a number word);
   - an ordinal-word answer (Fiftieth) deals only beside ordinals;
   - a quantity answer carrying a unit (miles, minutes, gallons…)
     deals only beside quantities in the same unit;
   - a sheet answer with a known sheet domain (DJ_ANS_DOMAIN)
     deals only beside distractors of the same domain, and a
     distractor with a known domain never sits beside an answer
     whose own domain is different — or, when the answer is a
     lowercase common word with no domain of its own, beside a
     geography-domain distractor or a known author.
   A set that fails is not dealt (mcDealable filters it); the
   question itself is untouched and stays in its bank. */
var AUDIT_ORDINALS={first:1,second:1,third:1,fourth:1,fifth:1,sixth:1,seventh:1,eighth:1,ninth:1,tenth:1,eleventh:1,twelfth:1,thirteenth:1,fourteenth:1,fifteenth:1,sixteenth:1,seventeenth:1,eighteenth:1,nineteenth:1,twentieth:1,thirtieth:1,fortieth:1,fiftieth:1,sixtieth:1,seventieth:1,eightieth:1,ninetieth:1,hundredth:1};
var AUDIT_NUMWORDS={zero:1,one:1,two:1,three:1,four:1,five:1,six:1,seven:1,eight:1,nine:1,ten:1,eleven:1,twelve:1,dozen:1,hundred:1,thousand:1,million:1,billion:1};
var AUDIT_UNITS={miles:1,mile:1,minutes:1,minute:1,hours:1,hour:1,seconds:1,second:1,gallons:1,gallon:1,feet:1,foot:1,inches:1,inch:1,years:1,year:1,days:1,day:1,weeks:1,week:1,bottles:1,bottle:1,litres:1,liters:1,metres:1,meters:1,kilometres:1,kilometers:1,pounds:1,ounces:1,oclock:1,mph:1};
function auditIsOrdinal(s){
  var w=norm(s).split(" ");
  if(w.length===1) return !!AUDIT_ORDINALS[w[0]];
  if(w.length===2) return !!AUDIT_ORDINALS[w[1]] && /^(twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)$/.test(w[0]);
  return false;
}
function auditUnitOf(s){
  var w=norm(s).split(" ");
  for(var i=0;i<w.length;i++) if(AUDIT_UNITS[w[i]]) return w[i];
  return "";
}
function auditSetBad(q){
  var ans=q.choices[q.a];
  if(typeof ans!=="string") return false;
  var na=norm(ans);
  var ansDigit=/\d/.test(ans), ansOrd=auditIsOrdinal(ans), ansUnit=auditUnitOf(ans);
  var ansDom=(typeof DJ_ANS_DOMAIN!=="undefined" && DJ_ANS_DOMAIN) ? (DJ_ANS_DOMAIN[na]||"") : "";
  var ansLowerCommon=/^[a-z]/.test(ans.trim()) && !(typeof AUTHOR_NORM!=="undefined" && AUTHOR_NORM && AUTHOR_NORM[na]);
  /* Known-table membership of the answer: a colour, a person, an
     animal. A distractor tabled as a different one of those kinds
     never belongs beside it (the phenolphthalein set dealt three
     singers beside the colour Pink; the Terry Fox set dealt three
     animals beside a man the classifier had misread as the animal
     in his surname — the pin in part 6 makes him a person here). */
  var ansPerson=!!((typeof GENDER_NORM!=="undefined" && GENDER_NORM && GENDER_NORM[na]) || (typeof GROUP_NORM!=="undefined" && GROUP_NORM && GROUP_NORM[na]));
  var ansAnimal=(typeof animalKindHit==="function") ? animalKindHit(na) : false;
  var ansColor=!!(typeof COLOR_NORM!=="undefined" && COLOR_NORM && COLOR_NORM[na]);
  for(var i=0;i<q.choices.length;i++){
    if(i===q.a) continue;
    var c=q.choices[i];
    if(typeof c!=="string") continue;
    var nc=norm(c);
    if(ansDigit && !/\d/.test(c) && !AUDIT_NUMWORDS[nc]) return true;
    if(ansOrd && !auditIsOrdinal(c)) return true;
    if(ansUnit && /\d/.test(c)){ var cu=auditUnitOf(c); if(cu && cu!==ansUnit) return true; }
    var cPerson=!!((typeof GENDER_NORM!=="undefined" && GENDER_NORM && GENDER_NORM[nc]) || (typeof GROUP_NORM!=="undefined" && GROUP_NORM && GROUP_NORM[nc]));
    var cAnimal=(typeof animalKindHit==="function") ? animalKindHit(nc) : false;
    if(ansPerson && cAnimal) return true;
    if(ansAnimal && cPerson) return true;
    if(ansColor && (cPerson || cAnimal)) return true;
    if(ansPerson && typeof COLOR_NORM!=="undefined" && COLOR_NORM && COLOR_NORM[nc] && !cPerson) return true;
    /* A person distractor beside a non-person answer: a company,
       a place, or a thing does not deal beside people's names
       (the 3M set dealt two presidents/authors beside a company
       name; the Montgomery Ward set did the same). */
    if(!ansPerson && cPerson && !ansAnimal) return true;
    /* A capitalised proper answer never deals beside a bare
       lowercase common word (Kellerman's beside "momentum" and
       "motif"): the word is filler, eliminable on sight. */
    if(/^[A-Z]/.test(ans.trim()) && /^[a-z]+$/.test(c.trim())) return true;
    if(typeof DJ_ANS_DOMAIN!=="undefined" && DJ_ANS_DOMAIN){
      var cDom=DJ_ANS_DOMAIN[nc]||"";
      if(ansDom && cDom && cDom!==ansDom) return true;
      if(!ansDom && cDom==="geography" && ansLowerCommon) return true;
    }
    /* Band answers take band distractors, not named-person pairs. */
    if(typeof MUSIC_BAND_NORM!=="undefined" && MUSIC_BAND_NORM[norm(ans)] && / and /.test(c) && !MUSIC_BAND_NORM[nc]) return true;
    /* Bare-count answers take bare-count distractors — chart-position
       forms ("No. 3", "Number 10 (top 10)") are a different kind. */
    if(/^\d+$/.test(String(ans).trim()) || AUDIT_NUMWORDS[norm(ans)]){
      if(!(/^\d+(\.\d+)?\s*(%|percent)?$/.test(c) || AUDIT_NUMWORDS[nc])) return true;
    }
    /* Converse: a chart-position answer ("No. 2") takes only
       chart-position distractors — a bare count beside it is a
       different form and reads as a different kind of answer. */
    if(/^No\.\s*\d+$/.test(String(ans).trim()) && !/^No\.\s*\d+$/.test(c.trim())) return true;
    /* City/state/country answers take place distractors. */
    var ansPlace=(typeof CITY_NORM!=="undefined" && CITY_NORM[norm(ans)]) || (typeof STATE_NORM!=="undefined" && STATE_NORM[norm(ans)]) || (typeof COUNTRY_NORM!=="undefined" && COUNTRY_NORM[norm(ans)]);
    if(ansPlace){
      var cPlace=(typeof CITY_NORM!=="undefined" && CITY_NORM[nc]) || (typeof STATE_NORM!=="undefined" && STATE_NORM[nc]) || (typeof COUNTRY_NORM!=="undefined" && COUNTRY_NORM[nc]) || (typeof PLACE_NORM!=="undefined" && PLACE_NORM[nc]);
      if(!cPlace) return true;
    }
    /* Paraphrase-duplicate choices: a distractor restating the answer
       in near-identical words makes two choices defensible. */
    if(ans.trim().split(/\s+/).length>=3){
      var stopW={the:1,a:1,an:1,of:1,to:1,in:1,is:1,are:1,for:1,with:1,by:1,on:1,at:1,from:1,that:1,this:1,it:1,as:1,or:1,and:1};
      var aTk={}; ans.toLowerCase().replace(/[^a-z0-9 ]/g," ").split(/\s+/).forEach(function(w){ if(w && !stopW[w]) aTk[w]=1; });
      var aN2=Object.keys(aTk).length;
      if(aN2>=3){
        var cTk={}; c.toLowerCase().replace(/[^a-z0-9 ]/g," ").split(/\s+/).forEach(function(w){ if(w && !stopW[w]) cTk[w]=1; });
        var cN2=Object.keys(cTk).length;
        if(cN2>=3){ var inter2=0; for(var tk2 in aTk) if(cTk[tk2]) inter2++; if(inter2/Math.max(1,(aN2+cN2-inter2))>=0.5) return true; }
      }
    }
    /* Costumed-pair answers take pair-form distractors, never bands. */
    if(/\([^)]*\)[^()]*\band\b/.test(ans) && !/\band\b/.test(c)) return true;
    /* Award-certification answers take certification distractors. */
    if(/-times (Platinum|Gold)/i.test(ans) && !/(Platinum|Gold|Diamond)/i.test(c)) return true;
    /* A plain animal word never distracts a non-animal answer. */
    if(!ansAnimal && !ansPerson && animalKindHit(c)) return true;
    /* Star-name answers take sky distractors, not common nouns. */
    if(typeof SKY_NORM!=="undefined" && SKY_NORM[norm(ans)] && !SKY_NORM[nc]){
      var cWords=c.trim().split(/\s+/);
      if(cWords.length===1) return true;
      if(cWords.length>=2 && /^[a-z]/.test(cWords[1])) return true;
    }
    /* LeAnn album/song answers stay inside her own title families. */
    if(q.cat==="LeAnn Rimes" && typeof LEANN_ALBUM_TITLES!=="undefined"){
      if(LEANN_ALBUM_TITLES.indexOf(ans)>-1 && LEANN_ALBUM_TITLES.indexOf(c)<0 && LEANN_SONG_TITLES.indexOf(c)<0) return true;
      if(LEANN_SONG_TITLES.indexOf(ans)>-1 && LEANN_SONG_TITLES.indexOf(c)<0 && LEANN_ALBUM_TITLES.indexOf(c)<0 && !isLeannSongPair(c)) return true;
    }
    if(ansLowerCommon && typeof AUTHOR_NORM!=="undefined" && AUTHOR_NORM && AUTHOR_NORM[nc]) return true;
  }
  return false;
}
function mcSetValid(q){
  if(!mcChoicesValid(q)) return false;
  if(auditSetBad(q)) return false;
  /* Deal-time backstop for the never-deal classes: a tautology
     (promptContainsAnswer) is rejected here even if a stamp was
     somehow missed, exactly as a subkind-failing set is. An
     instruction clue (instructionCluePrompt — "Spell correctly"
     and its kin) is rejected the same way. */
  if(q.noDeal || promptContainsAnswer(q) || instructionCluePrompt(q)) return false;
  var ans=q.choices[q.a];
  var A=subKindAnswer(q, ans), dom=subKindDom(q, ans);
  for(var i=0;i<q.choices.length;i++){
    if(i===q.a) continue;
    if(distractorBad(q, ans, A, dom, q.choices[i])) return false;
  }
  return true;
}
/* The questions a multiple-choice deal may draw: everything except
   the excluded — and except any set the deal-time guard rejects.
   Round 4's typed conversion never consults the mcExcluded flag —
   that exclusion is from MC dealing only. The noDeal flag is
   stricter (see SUBJECTLESS PROMPTS NEVER DEAL, below): a
   subjectless question is excluded from typed dealing too, and
   buildGauntlet / typedDealReplacement / the finale pick each
   enforce that on their own paths. */
function mcDealable(pool){
  return (pool||[]).filter(function(q){ return q && !q.mcExcluded && !q.noDeal && mcSetValid(q); });
}
function canadaPool(){
  var out=[];
  var caps=CANADA_PAIRS.map(function(p){return p[1];});
  CANADA_PAIRS.forEach(function(p,i){
    var choices=[p[1], caps[(i+4)%13], caps[(i+8)%13], caps[(i+11)%13]];
    var o=cmc("Canada", "What is the capital of "+p[0]+"?", choices, 0, p[1]+" is the capital of "+p[0]+".");
    out.push(o);
  });
  var names=CANADA_PAIRS.map(function(p){return p[0];});
  var all=PICS.easy.concat(PICS.medium, PICS.hard, PICS.vhard);
  all.forEach(function(it){
    if(it.cat!=="Map Shapes") return;
    var ans=it.choices[it.a];
    var ni=names.indexOf(ans);
    if(ni<0) return;
    var choices=[ans, names[(ni+3)%13], names[(ni+6)%13], names[(ni+10)%13]];
    out.push({type:"mc", img:it.img, q:it.q, choices:choices, a:0, cat:"Canada", credit:it.credit, page:it.page, fact:it.fact||""});
  });
  return out.concat(NEWBANKS.canada);
}

/* ================= ANSWER MATCHING ================= */
function norm(s){
  /* Memoised: the load-time enforcement passes classify every choice
     of every question, and norm() sits inside all of their inner
     loops. The function is pure, so caching by input string cannot
     change any result — it only skips recomputation. The cache lives
     on the function object so it exists from the very first call,
     long before this definition's line is reached. */
  var cache=norm._cache||(norm._cache=new Map());
  var key=String(s||"");
  var hit=cache.get(key);
  if(hit!==undefined) return hit;
  var out=key.toLowerCase().trim()
    /* Diacritics fold to their base letters BEFORE the character
       strip below: "Brontë" and "Bronte" are the same name, and
       every comparison in the game — duplicate detection in choice
       sets, the used-sets in every distractor picker and repair
       pass, the deal-time guard, and answer judging — goes through
       norm(), so folding here makes accent variants (and case
       variants) the same string everywhere, and an accent twin can
       never be dealt as a separate choice. Letters decomposition
       does not split are mapped by hand (æ to ae, œ to oe, ß to
       ss, ø to o, đ to d, ł to l, þ to th, ð to d). */
    .normalize("NFD").replace(/[\u0300-\u036f]/g,"")
    .replace(/æ/g,"ae").replace(/œ/g,"oe").replace(/ß/g,"ss").replace(/ø/g,"o")
    .replace(/đ/g,"d").replace(/ł/g,"l").replace(/þ/g,"th").replace(/ð/g,"d")
    .replace(/[''’]/g,"").replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim();
  cache.set(key, out);
  return out;
}
function soundex(word){
  var codes={b:1,f:1,p:1,v:1,c:2,g:2,j:2,k:2,q:2,s:2,x:2,z:2,d:3,t:3,l:4,m:5,n:5,r:6};
  var w=word.replace(/[^a-z]/g,""); if(!w) return "";
  var out=w[0], prev=codes[w[0]]||0;
  for(var i=1;i<w.length;i++){
    var c=codes[w[i]]||0;
    if(c && c!==prev) out+=c;
    if(w[i]!=="h" && w[i]!=="w") prev=c;
  }
  return (out+"000").slice(0,4).toUpperCase();
}
function phoneticKey(s){
  return norm(s).split(" ").filter(Boolean).map(soundex).join("-");
}
function lev(a,b){
  var m=a.length, n=b.length, d=[], i, j;
  for(i=0;i<=m;i++){ d[i]=[i]; }
  for(j=0;j<=n;j++){ d[0][j]=j; }
  for(i=1;i<=m;i++) for(j=1;j<=n;j++)
    d[i][j]=Math.min(d[i-1][j]+1, d[i][j-1]+1, d[i-1][j-1]+(a[i-1]===b[j-1]?0:1));
  return d[m][n];
}
function nameParts(s){
  var toks=norm(s).split(" ").filter(Boolean);
  while(toks.length>1 && NAME_TITLES[toks[0]]) toks.shift();
  var suffix="";
  if(toks.length>1){
    var last=toks[toks.length-1];
    if(REGNAL_SUFFIX[last]) suffix=toks.pop();
    else if(/^[0-9]+$/.test(last) && ROMAN_BY_NUM[last]) suffix=ROMAN_BY_NUM[toks.pop()];
  }
  return {core:toks, suffix:suffix};
}
function nameVariants(s){
  var p=nameParts(s);
  var toks=p.core, suffix=p.suffix;
  if(!toks.length) return [];
  var forms={};
  function add(a){ if(a.length) forms[a.join(" ")]=1; }
  add(toks);
  if(suffix) add(toks.concat([suffix]));
  if(toks.length>=2){
    add([toks[0], toks[toks.length-1]]);
    if(suffix) add([toks[0], toks[toks.length-1], suffix]);
    if(toks[toks.length-1].length>=3) add([toks[toks.length-1]]);
    if(suffix && toks[toks.length-1].length>=3) add([toks[toks.length-1], suffix]);
  }
  return Object.keys(forms);
}
function isPersonAnswer(q){
  var toks=String(q.answer||"").split(/\s+/).filter(Boolean);
  var cap=0, i;
  for(i=0;i<toks.length;i++){ if(/^[A-Z]/.test(toks[i])) cap++; }
  if(cap>=2) return true;
  if(toks.length && NAME_TITLES[norm(toks[0])]) return true;
  if(q.rule && /name/i.test(q.rule)) return true;
  return false;
}
/* Sound-alike folding for Round 1 partial names: letters that sound the
   same to a player typing from memory are folded together (v/w as in
   Beethoven heard as "Bethowen", f/ph), so a misspelled partial is
   compared on how it sounds, not on its exact letters. */
function nameSoundFold(s){
  return s.replace(/ph/g,"f").replace(/v/g,"w");
}
/* Levenshtein distance with a single adjacent transposition costing 1,
   so a swapped-letter spelling ("Beethvoen") is a near miss, not two
   edits. Used only by the Round 1 partial-name check. */
function levDamerau(a,b){
  var m=a.length, n=b.length, d=[], i, j;
  for(i=0;i<=m;i++){ d[i]=[i]; }
  for(j=0;j<=n;j++){ d[0][j]=j; }
  for(i=1;i<=m;i++) for(j=1;j<=n;j++){
    var cost=(a[i-1]===b[j-1])?0:1;
    d[i][j]=Math.min(d[i-1][j]+1, d[i][j-1]+1, d[i-1][j-1]+cost);
    if(i>1 && j>1 && a[i-1]===b[j-2] && a[i-2]===b[j-1])
      d[i][j]=Math.min(d[i][j], d[i-2][j-2]+1);
  }
  return d[m][n];
}
function partialNameCorrect(q, input){
  if(!isPersonAnswer(q)) return false;
  var givenForms=nameVariants(input);
  if(!givenForms.length) return false;
  var givenSuffix=nameParts(input).suffix;
  var targets=[q.answer].concat(q.accept||[]);
  var gi, ti, g, t;
  for(ti=0;ti<targets.length;ti++){
    /* A regnal suffix the player actually typed must agree with the
       answer's: "Elizabeth I" is a different monarch from Elizabeth II,
       even though dropping the suffix altogether is fine. */
    var tSuffix=nameParts(targets[ti]).suffix;
    if(givenSuffix && tSuffix && givenSuffix!==tSuffix) continue;
    var tForms=nameVariants(targets[ti]);
    for(gi=0;gi<givenForms.length;gi++){
      g=givenForms[gi];
      for(var fi=0;fi<tForms.length;fi++){
        t=tForms[fi];
        if(g===t) return true;
        /* Keep Round 1's sound-alike tolerance on partial names too,
           but require the spelling to be genuinely close so a different
           person (Lennon for Lenin) never slips through. */
        if(phoneticKey(g)===phoneticKey(t) && lev(g,t)<=(t.length>=7?2:1)) return true;
        /* A MISSPELLED partial must score in Round 1 as well: the two
           Round 1 leniencies combine, so the near-miss check runs on the
           partial candidates themselves, not just the full answer.
           Soundex alone misses cases like "Bethowen" for Beethoven
           (the heard v-as-w drops a whole code), so compare sound-folded
           spellings and allow up to 2 edits on longer names — "Bethowen",
           "Bethoven" and "Beethowen" all count for Beethoven, while a
           different person (Bach, Mozart, Handel, Schubert, or Lennon
           for Lenin) sits far beyond the tolerance and still fails. */
        var fg=nameSoundFold(g), ft=nameSoundFold(t);
        if(fg===ft) return true;
        if(levDamerau(fg,ft)<=(t.length>=7?2:1)) return true;
      }
    }
  }
  return false;
}
/* ---- Numeric judging ----
   A numeric answer is judged as a NUMBER, never by spelling or
   sound: Soundex and string distance are meaningless on digits (the
   old judge normalised "26.2" to "26 2" and then demanded the exact
   string "26 2 miles", so typing 26.2 for the marathon question was
   marked wrong). numParts reads a string as a number plus, at most,
   a short unit/label tail ("26.2", "26.20", "26.2 miles", "1,912",
   "No. 2" all read as their number); anything else returns null and
   is judged by the ordinary text rules. */
function numParts(s){
  var raw=String(s||"").toLowerCase().replace(/[$£€]/g,"")
    .replace(/(\d),(?=\d)/g,"$1").replace(/[.!?]+$/,"").trim();
  var m=raw.match(/^(?:no\.?|number|#)?\s*(-?\d+(?:\.\d+)?)\s*(.*)$/);
  if(!m) return null;
  var rest=m[2].trim();
  if(rest && !/^[a-z]+( [a-z]+)?$/.test(rest)) return null;
  return parseFloat(m[1]);
}
/* Returns true/false when the question has a numeric answer and the
   player typed a number, or null when numeric judging doesn't apply.
   Numeric equality is exact in EVERY mode — an exact number is
   exact, strict Round 4 included — and a different number is simply
   wrong, with no phonetic or near-miss rescue. */
function numericVerdict(q, input){
  var targets=[q.answer].concat(q.accept||[]);
  var iv=numParts(input), anyNum=false, i, tv;
  for(i=0;i<targets.length;i++){
    tv=numParts(targets[i]);
    if(tv===null) continue;
    anyNum=true;
    if(iv!==null && Math.abs(iv-tv)<1e-9) return true;
  }
  if(anyNum && iv!==null) return false;
  return null;
}
function cardinalValue(s){
  var toks=norm(s).split(" ").filter(Boolean);
  if(toks.length && toks[0]==="the") toks=toks.slice(1);
  if(!toks.length || toks.length>2) return null;
  if(toks.length===1){
    var t=toks[0];
    if(/^[0-9]+$/.test(t)) return parseInt(t,10);
    if(t==="zero") return 0;
    if(CARDINAL_WORDS[t]!==undefined && CARDINAL_WORDS[t]<20) return CARDINAL_WORDS[t];
    if(CARDINAL_TENS[t]!==undefined) return CARDINAL_TENS[t];
    if(t==="hundred") return 100;
    return null;
  }
  if(CARDINAL_TENS[toks[0]]!==undefined && CARDINAL_WORDS[toks[1]]!==undefined && CARDINAL_WORDS[toks[1]]<10)
    return CARDINAL_TENS[toks[0]]+CARDINAL_WORDS[toks[1]];
  if((toks[0]==="one" || toks[0]==="a") && toks[1]==="hundred") return 100;
  return null;
}
function cardinalVerdict(q, input){
  var targets=[q.answer].concat(q.accept||[]);
  var tv=null, i, v;
  for(i=0;i<targets.length;i++){ v=cardinalValue(targets[i]); if(v!==null){ tv=v; break; } }
  if(tv===null) return null;
  var iv=cardinalValue(input);
  if(iv===null) return null;
  return iv===tv;
}
function ordinalCoreInfo(s){
  var toks=norm(s).split(" ").filter(Boolean);
  if(!toks.length) return null;
  var hasAmendment=false, i;
  for(i=0;i<toks.length;i++){ if(toks[i]==="amendment"||toks[i]==="amendments") hasAmendment=true; }
  var f=toks.filter(function(t){ return !ORDINAL_FILLER[t]; });
  if(f.length>1 && (f[0]==="no"||f[0]==="number")) f=f.slice(1);
  if(!f.length) return null;
  if(f.length===2 && /^[0-9]+$/.test(f[0]) && /^(st|nd|rd|th)$/.test(f[1])) f=[f[0]+f[1]];
  var m;
  if(f.length===1){
    var tok=f[0];
    if(/^[0-9]+$/.test(tok)) return {value:parseInt(tok,10), isOrdinal:false, hasAmendment:hasAmendment};
    m=tok.match(/^([0-9]+)(st|nd|rd|th)$/);
    if(m) return {value:parseInt(m[1],10), isOrdinal:true, hasAmendment:hasAmendment};
    if(ORDINAL_WORDS[tok]) return {value:ORDINAL_WORDS[tok], isOrdinal:true, hasAmendment:hasAmendment};
    if(CARDINAL_WORDS[tok]) return {value:CARDINAL_WORDS[tok], isOrdinal:false, hasAmendment:hasAmendment};
    m=tok.match(/^(twenty|thirty)(first|second|third|fourth|fifth|sixth|seventh|eighth|ninth)$/);
    if(m) return {value:CARDINAL_WORDS[m[1]]+ORDINAL_WORDS[m[2]], isOrdinal:true, hasAmendment:hasAmendment};
    m=tok.match(/^(twenty|thirty)(one|two|three|four|five|six|seven|eight|nine)$/);
    if(m) return {value:CARDINAL_WORDS[m[1]]+CARDINAL_WORDS[m[2]], isOrdinal:false, hasAmendment:hasAmendment};
    return null;
  }
  if(f.length===2 && (f[0]==="twenty"||f[0]==="thirty")){
    var tens=CARDINAL_WORDS[f[0]];
    if(ORDINAL_WORDS[f[1]] && ORDINAL_WORDS[f[1]]<10) return {value:tens+ORDINAL_WORDS[f[1]], isOrdinal:true, hasAmendment:hasAmendment};
    if(CARDINAL_WORDS[f[1]] && CARDINAL_WORDS[f[1]]<10) return {value:tens+CARDINAL_WORDS[f[1]], isOrdinal:false, hasAmendment:hasAmendment};
  }
  return null;
}
/* Returns true/false when the correct answer is an ordinal and the
   player typed an ordinal/number form, or null when ordinal judging
   doesn't apply. Like numeric equality, an equivalent ordinal form
   is exact in EVERY mode — strict Round 4 included, because "2nd"
   is not a loose spelling of "Second", it is the same answer — and
   a different ordinal ("1st", "3rd", "First", "Third" for "Second")
   is simply wrong, with no phonetic or near-miss rescue. A target
   only counts as an ordinal when it is written as one (an ordinal
   word or a suffixed number), carries "Amendment", or the question
   itself asks about an amendment and the answer is the bare
   number — so regnal names and other answer types never enter this
   path. An input that is not a number form at all returns null,
   leaving the forgiving near-miss spelling checks to judge it. */
function ordinalVerdict(q, input){
  var targets=[q.answer].concat(q.accept||[]);
  var qAmend=!!(q.q && /amendment/i.test(q.q));
  var targetVal=null, i, info;
  for(i=0;i<targets.length;i++){
    info=ordinalCoreInfo(targets[i]);
    if(!info) continue;
    if(info.isOrdinal || info.hasAmendment || qAmend){ targetVal=info.value; break; }
  }
  if(targetVal===null) return null;
  var iv=ordinalCoreInfo(input);
  if(!iv) return null;
  return iv.value===targetVal;
}
function aliasTargets(q){
  var out=[], seen={}, base=[q.answer].concat(q.accept||[]), i, j, al, n;
  for(i=0;i<base.length;i++){
    al=ANSWER_ALIASES[norm(base[i])];
    if(!al) continue;
    for(j=0;j<al.length;j++){ n=norm(al[j]); if(!seen[n]){ seen[n]=1; out.push(al[j]); } }
  }
  return out;
}
function singularForm(tok){
  if(!/^[a-z]+$/.test(tok)) return tok;
  if(PLURAL_PAIRS[tok]) return PLURAL_PAIRS[tok];
  if(NOT_PLURAL[tok]) return tok;
  if(tok.length>=5 && /[^aeiou]ies$/.test(tok)) return tok.slice(0,-3)+"y";
  if(/(ss|x|z|ch|sh)es$/.test(tok)) return tok.slice(0,-2);
  if(tok.length>=4 && /s$/.test(tok) && !/(ss|us|is)$/.test(tok)) return tok.slice(0,-1);
  return tok;
}
function numberCanon(s){
  return norm(s).split(" ").filter(Boolean).map(singularForm).join(" ");
}
/* Returns true when the input is the same word(s) as a target in
   the other grammatical number, or null when number equivalence
   does not apply — it never returns false, so a genuinely
   different word falls through to the ordinary judging. */
function numberFormVerdict(q, input){
  if(isPersonAnswer(q)) return null;
  var targets=[q.answer].concat(q.accept||[], aliasTargets(q));
  var ci=numberCanon(input), i;
  for(i=0;i<targets.length;i++){ if(numberCanon(targets[i])===ci) return true; }
  return null;
}
/* ---- Prompt-echo judging (owner ruling 2026-11-12) ----
   When the question itself already names the trailing part of the
   answer — "Oxygen is carried around the body by which type of
   blood cell?" names the category "blood cell(s)" — the player
   should not have to type that part again: the distinguishing
   leading part alone ("Red" for "red blood cells") is a complete
   answer. echoRemainders derives those remainders: for each target
   (the stored answer and its authored accepts), the longest
   trailing word sequence that appears in the prompt — compared
   token-by-token after singular/plural folding, the same number
   equivalence numberFormVerdict treats as exact everywhere, so
   the prompt's singular "blood cell" matches the answer's plural
   "blood cells" — leaves a leading remainder the player may type
   on its own. Guards, so the rule can never widen an answer into
   a different one:
   - exact-flagged questions (chemical symbols/formulas and every
     other exact answer) get NO remainders: their gate is untouched;
   - numeric and cardinal targets get none: numbers are judged
     numerically, ordinals ordinally, and those verdicts run before
     this rule in typedCorrect and still decide first;
   - person answers get none: the partial-name rules are the only
     partial credit a person's name ever gets, unchanged;
   - the remainder must be non-empty, must not end in a filler word
     ("Treaty of…" / "Great Wall of…" remainders are rejected), and
     a single-word remainder must be a real distinguishing word —
     never a bare category noun ("blood" alone for "blood cells"
     changes the meaning, so it is not a remainder);
   - the echoed tail alone is never a remainder, so typing just
     the part the prompt already gave ("blood cells") still fails.
   Judging of a remainder follows the round's normal rules, applied
   in typedCorrect: an exactly-spelled remainder scores in every
   mode, strict finales included; the phonetic / near-miss rescue
   on a remainder runs only where it runs for a full answer. */
var ECHO_FILLER={the:1,a:1,an:1,of:1,and:1,or:1,to:1,in:1,on:1,for:1,with:1,by:1};
var ECHO_GENERIC_SINGLE={blood:1,cell:1,cells:1,type:1,kind:1,species:1,genus:1,family:1,group:1,part:1,name:1,city:1,country:1,state:1,province:1,capital:1,river:1,ocean:1,sea:1,lake:1,mountain:1,island:1,planet:1,star:1,animal:1,plant:1,tree:1,flower:1,bird:1,fish:1,insect:1,sport:1,game:1,instrument:1,language:1,colour:1,color:1,day:1,month:1,year:1,season:1,food:1,drink:1,metal:1,element:1,gas:1,liquid:1,solid:1,organ:1,bone:1,muscle:1,disease:1,vitamin:1,protein:1,acid:1};
function echoSeqIn(hay, needle){
  if(!needle.length || needle.length>hay.length) return false;
  for(var i=0;i+needle.length<=hay.length;i++){
    var ok=true;
    for(var j=0;j<needle.length;j++){ if(hay[i+j]!==needle[j]){ ok=false; break; } }
    if(ok) return true;
  }
  return false;
}
function echoRemainders(q){
  var out=[], seen={};
  if(!q || typeof q.q!=="string" || q.exact) return out;
  if(isPersonAnswer(q)) return out;
  var pCanon=norm(q.q).split(" ").filter(Boolean).map(singularForm);
  if(!pCanon.length) return out;
  var targets=[q.answer].concat(q.accept||[]);
  for(var ti=0;ti<targets.length;ti++){
    var raw=targets[ti];
    if(typeof raw!=="string") continue;
    if(numParts(raw)!==null || cardinalValue(raw)!==null) continue;
    var toks=norm(raw).split(" ").filter(Boolean);
    if(toks.length<2) continue;
    var canon=toks.map(singularForm);
    for(var sLen=toks.length-1;sLen>=1;sLen--){
      var suffix=canon.slice(toks.length-sLen);
      if(sLen===1 && suffix[0].length<3) continue;
      var suffixAllFiller=true, si;
      for(si=0;si<suffix.length;si++){ if(!ECHO_FILLER[suffix[si]]){ suffixAllFiller=false; break; } }
      if(suffixAllFiller) continue;
      if(!echoSeqIn(pCanon, suffix)) continue;
      var remToks=toks.slice(0, toks.length-sLen);
      if(!remToks.length) continue;
      if(ECHO_FILLER[remToks[remToks.length-1]]) continue;
      if(remToks.length===1 && (remToks[0].length<3 || ECHO_FILLER[remToks[0]] || ECHO_GENERIC_SINGLE[remToks[0]])) continue;
      var rem=remToks.join(" ");
      if(!seen[rem]){ seen[rem]=1; out.push(rem); }
      if(remToks.length>1 && (remToks[0]==="the" || remToks[0]==="a" || remToks[0]==="an")){
        var bare=remToks.slice(1).join(" ");
        if(bare && !seen[bare]){ seen[bare]=1; out.push(bare); }
      }
      break;
    }
  }
  return out;
}
function typedCorrect(q, input, forgiving, forceStrict, partialNames){
  var given = norm(input);
  if(!given) return false;
  var targets = [q.answer].concat(q.accept||[], aliasTargets(q)).map(norm);
  var i, t;
  for(i=0;i<targets.length;i++){ if(given===targets[i]) return true; }
  /* Ordinal equivalence comes before every spelling path, strict
     included: "2nd" IS "Second", so no mode may fail it. */
  var ordVerdict=ordinalVerdict(q, input);
  if(ordVerdict!==null) return ordVerdict;
  var numVerdict=numericVerdict(q, input);
  if(numVerdict!==null) return numVerdict;
  /* Cardinal equivalence comes before the strict cut-off too:
     "1" IS "One" — a number word and its digits are the same
     answer in every mode, strict Round 4 included. */
  var cardVerdict=cardinalVerdict(q, input);
  if(cardVerdict!==null) return cardVerdict;
  /* Singular/plural equivalence comes before the strict cut-off
     too: "Capillary" IS "Capillaries" in the other number. */
  var pluVerdict=numberFormVerdict(q, input);
  if(pluVerdict!==null) return pluVerdict;
  /* Prompt-echo remainders (see echoRemainders): the exact gates
     above have already decided every symbol, number, ordinal, and
     full answer, and exact-flagged questions derive no remainders
     at all, so nothing here loosens them. An exactly-spelled
     remainder scores in EVERY mode — a strict finale still gets
     its exact spelling, of the distinguishing part the prompt did
     not already give. */
  var echoRems=echoRemainders(q);
  for(i=0;i<echoRems.length;i++){ if(given===echoRems[i] || numberCanon(given)===numberCanon(echoRems[i])) return true; }
  /* A finale designated strict for this Gauntlet (Round 4 always, and
     exactly one of Rounds 2/3) requires the exact spelling — no
     sound-alike or near-miss credit, whatever the question. */
  /* Name particles in strict judging (owner rule, 2026-11-12,
     from his Q15 loss): in a strict context a name particle (de,
     van, von, der, del, de la and kin) may be present or absent
     when every other part of the answer is spelled exactly right —
     "Miguel Cervantes" scores for "Miguel de Cervantes" and
     "Ludwig Beethoven" for "Ludwig van Beethoven". The distinctive
     parts stay fully strict: a misspelling ("Cervantez",
     "Bethowen") still fails, and a partial answer (surname alone)
     still fails, because the particle-stripped forms must match
     token for token and at least one particle must actually have
     been dropped or added. Forgiving judging is unchanged. */
  if(forceStrict){
    var PT={de:1,del:1,della:1,di:1,da:1,dos:1,van:1,von:1,der:1,den:1,ter:1,ten:1,le:1,la:1};
    var stripP=function(s){ return s.split(" ").filter(function(w){ return !PT[w]; }).join(" "); };
    var gS=stripP(given);
    for(i=0;i<targets.length;i++){
      var tS=stripP(targets[i]);
      if(tS && tS===gS && tS.indexOf(" ")>-1 && (tS!==targets[i] || gS!==given)) return true;
    }
  }
  if(forceStrict) return false;
  /* Round 1 only: a distinctive partial person name scores (surname
     alone, name without its title, no middle names, suffix optional). */
  if(partialNames && partialNameCorrect(q, input)) return true;
  /* An exact-flagged answer is judged by its exact letter sequence
     in EVERY mode — chemical element symbols above all. "Rd" is not
     a sound-alike spelling of the Rhodium symbol "Rh", it is a
     different (in fact nonexistent) symbol: one letter different
     is a different element, so no phonetic, Soundex or near-miss
     rescue may score it, not even on a forgiving finale whose stake
     box says spelling doesn't count. The exact-match loop above
     has already had its chance; anything else is simply wrong.
     This gate sits above the forgiving fall-through on purpose —
     it used to live only in the non-forgiving branch, which is how
     a forgiving Round 3 finale scored "Rd" for "Rh" and doubled
     the player's total. */
  if(q.exact) return false;
  /* A forgiving finale (Round 1 always, and the other one of Rounds 2/3)
     is always judged sound-alike friendly, even for names, numbers,
     short words and acronyms that would normally demand exact spelling. */
  if(forgiving) { /* fall through to the phonetic / near-miss checks below */ }
  else {
    /* Exact-only for numbers, short words, acronyms */
    for(i=0;i<targets.length;i++){
      t=targets[i];
      if(/^[0-9]+$/.test(t) || t.replace(/ /g,"").length<=4) return false;
    }
  }
  /* The forgiving sound-alike / near-miss checks run over the full
     targets and then over any prompt-echo remainders, under the
     same tolerances — a forgiving round forgives a near-miss on
     the distinguishing part exactly as it forgives one on the
     whole answer. */
  var fuzzyTargets=targets.concat(echoRems);
  for(i=0;i<fuzzyTargets.length;i++){
    t=fuzzyTargets[i];
    if(phoneticKey(given)===phoneticKey(t)) return true;
    var dist = lev(given, t);
    var tol = t.length>=9 ? 2 : 1;
    if(dist<=tol) return true;
    /* allow dropping a leading "the" */
    if(norm(input).replace(/^the /,"")===t.replace(/^the /,"")) return true;
  }
  return false;
}
function legendTierName(item){
  if(item && item.kind==="finale" && item.round===3) return "Genius Level";
  return LEGEND_TIERS[item.round]||"";
}
function legendRoundName(item){
  return "Round "+(item.round+1)+" · "+legendTierName(item);
}
function paceKey(pace){ return pace==="relaxed" ? "relaxed" : "standard"; }
function paceTimes(){
  var pk=paceKey(state ? state.pace : coverPace);
  if(state && state.mode==="legend") return LEGEND_TIMES[pk];
  return PACE_TIMES[pk];
}
function setCoverPace(pace){
  coverPace=paceKey(pace);
  var relaxed=coverPace==="relaxed";
  var bs=$("paceStandard"), br=$("paceRelaxed");
  if(bs){ bs.classList.toggle("sel", !relaxed); bs.setAttribute("aria-pressed", String(!relaxed)); }
  if(br){ br.classList.toggle("sel", relaxed); br.setAttribute("aria-pressed", String(relaxed)); }
  /* The boards-area pace switch is the same setting in a second
     place: its highlight is synced here too, so the two controls
     can never disagree. Every path that sets or restores the pace
     (either control's click, page load, game-start and resume
     restores) funnels through this one function, so both controls
     always reflect the current value. */
  var bbs=$("boardPaceStandard"), bbr=$("boardPaceRelaxed");
  if(bbs){ bbs.classList.toggle("sel", !relaxed); bbs.setAttribute("aria-pressed", String(!relaxed)); }
  if(bbr){ bbr.classList.toggle("sel", relaxed); bbr.setAttribute("aria-pressed", String(relaxed)); }
  /* The cover boards follow this picker (see applyPaceBoardFilter
     below): flipping the pace flips which boards show with it. */
  applyPaceBoardFilter();
}
function hsStore(){
  try{
    var s=window.localStorage, probe="__tn_hs_probe__";
    s.setItem(probe,"1"); s.removeItem(probe);
    return s;
  }catch(e){ return null; }
}
/* Standard scores keep the original storage key, so boards saved
   before the pace picker existed stay exactly as they were.
   Relaxed scores live under their own key: a separate board with
   separate ranks, never mixed into the Standard list.
   Sudden Death scores live under their OWN keys again — one per
   pace — so a Sudden Death score never sits on (or ranks against)
   the regular Gauntlet board, and a Relaxed Sudden Death score
   never competes with a Standard one. The optional second argument
   to hsKeyFor selects the board: "sd" for Sudden Death, anything
   else (or nothing) for the regular board. */
function hsKeyFor(pace, board){
  var relaxed=paceKey(pace)==="relaxed";
  if(board==="sd") return relaxed ? HS_KEY+".suddendeath.relaxed" : HS_KEY+".suddendeath";
  return relaxed ? HS_KEY+".relaxed" : HS_KEY;
}
/* A saved entry is a Sudden Death entry when its stored mode label
   is the Sudden Death label (a Relaxed one carries the extra
   " · Relaxed pace" tag after it, so this is a prefix test). */
function isSuddenDeathEntry(e){
  return !!(e && typeof e.m==="string" && (e.m==="Sudden Death" || e.m.indexOf("Sudden Death · ")===0 || e.m.indexOf("Sudden Death —")===0));
}
/* ---------- Score ranking (every board the player sees) ----------
   One order for all of them — device-local boards, the shared
   ALL TIME HIGH SCORES and THIS WEEK lists, and the Perfect /
   Legend lists:
     1. score, highest first;
     2. at equal score, a TRUE perfect game (flagged perfect —
        earned without the bonus round) ranks above a game the
        bonus round capped at the same score;
     3. at equal score, the faster game ranks above: time used,
        fewest seconds first. An entry with NO recorded time (every
        score saved before times were kept) ranks below a timed
        entry at the same score — it cannot prove a time;
     4. anything still tied keeps the order the entries were
        already in (the existing date order) — this comparator
        returns 0 and the stable sort leaves them as they were.
   Local entries carry their points in .s and new ones their time
   in .timeSecs (whole seconds); shared entries carry .score and
   .timeSecs. Both shapes read through the helpers below. */
function scorePointsOf(e){ return e ? (isFinite(e.s) ? +e.s : (isFinite(e.score) ? +e.score : 0)) : 0; }
function entryTimeSecs(e){
  if(!e || typeof e.timeSecs!=="number" || !isFinite(e.timeSecs) || e.timeSecs<0) return null;
  return e.timeSecs;
}
function compareScoreEntries(a, b){
  var ds=scorePointsOf(b)-scorePointsOf(a); if(ds) return ds;
  var dp=(b && b.perfect ? 1 : 0)-(a && a.perfect ? 1 : 0); if(dp) return dp;
  var ta=entryTimeSecs(a), tb=entryTimeSecs(b);
  if(ta!==null && tb!==null){ if(ta!==tb) return ta-tb; }
  else if(ta!==null) return -1;
  else if(tb!==null) return 1;
  return 0;
}
/* Compact M:SS + " min" for board rows and the results screen. */
function fmtTimeUsed(secs){
  var t=Math.max(0, Math.round(+secs||0));
  var m=Math.floor(t/60), r=t%60;
  return m+":"+(r<10 ? "0" : "")+r+" min";
}
function loadBoardScores(pace, board){
  var s=hsStore(); if(!s) return null;
  try{
    var raw=s.getItem(hsKeyFor(pace, board));
    if(!raw) return [];
    var arr=JSON.parse(raw);
    if(!arr || arr.constructor!==Array) return [];
    return arr.filter(function(e){ return e && typeof e.n==="string" && isFinite(e.s); })
      .sort(compareScoreEntries);
  }catch(e){ return null; }
}
function migrateSuddenDeathScores(){
  if(hsSdMigrated) return;
  hsSdMigrated=true;
  var s=hsStore(); if(!s) return;
  ["standard","relaxed"].forEach(function(pace){
    try{
      var raw=s.getItem(hsKeyFor(pace));
      if(!raw) return;
      var arr=JSON.parse(raw);
      if(!arr || arr.constructor!==Array) return;
      var sd=arr.filter(isSuddenDeathEntry);
      if(!sd.length) return;
      var main=arr.filter(function(e){ return !isSuddenDeathEntry(e); });
      var sdList=loadBoardScores(pace, "sd")||[];
      var seen={};
      sdList.forEach(function(e){ seen[scoreEntryKey(e)]=1; });
      sd.forEach(function(e){
        var k=scoreEntryKey(e);
        if(!seen[k]){ seen[k]=1; sdList.push(e); }
      });
      sdList.sort(compareScoreEntries);
      main.sort(compareScoreEntries);
      s.setItem(hsKeyFor(pace, "sd"), JSON.stringify(sdList.slice(0,HS_KEEP)));
      s.setItem(hsKeyFor(pace), JSON.stringify(main.slice(0,HS_KEEP)));
    }catch(e){ /* leave this pace's boards untouched */ }
  });
}
function loadLocalScores(pace){
  migrateSuddenDeathScores();
  return loadBoardScores(pace);
}
function loadSuddenDeathScores(pace){
  migrateSuddenDeathScores();
  return loadBoardScores(pace, "sd");
}
/* Short label for the board a score lives on, used by the results
   screen's rank line so a Sudden Death rank names its own board. */
function rankBoardNote(pace, isSD){
  if(isSD) return paceKey(pace)==="relaxed"
    ? " — Sudden Death board, Relaxed pace (kept separate from other scores)"
    : " — Sudden Death board (kept separate from regular Gauntlet scores)";
  return paceKey(pace)==="relaxed" ? " — Relaxed board (kept separate from Standard scores)" : "";
}
function modeLabel(mode){
  if(mode==="gauntlet") return "Trivia Gauntlet";
  if(mode==="daily") return "Daily Gauntlet";
  if(mode==="suddendeath") return "Sudden Death";
  if(mode==="challenge") return "Trivia Gauntlet · Challenge";
  if(mode==="legend") return "Legend Gauntlet";
  for(var i=0;i<MODES.length;i++) if(MODES[i].id===mode) return MODES[i].name;
  return "Practice";
}
/* Scores saved before the rename carry the old "Jackpot Gauntlet"
   label in their stored mode string. They are relabelled here, at
   display time only — the stored entries themselves are never
   rewritten. "Legend Gauntlet" entries, and the " · Relaxed pace"
   tag a Relaxed entry carries, pass through untouched. */
function displayModeLabel(m){
  if(typeof m!=="string" || !m) return "";
  if(m==="Jackpot Gauntlet") return "Trivia Gauntlet";
  if(m.indexOf("Jackpot Gauntlet · ")===0) return "Trivia Gauntlet · "+m.slice("Jackpot Gauntlet · ".length);
  return m;
}
function recordLocalScore(name, score, mode, pace, perfect, timeSecs, sdQ){
  var s=hsStore(); if(!s) return null;
  /* Sudden Death games save to the Sudden Death board for their
     pace — never onto the regular Gauntlet board — so the rank
     returned here is the rank on that Sudden Death board. */
  var isSD=(mode==="suddendeath");
  var board=isSD ? "sd" : undefined;
  var list=isSD ? loadSuddenDeathScores(pace) : loadLocalScores(pace); if(!list) return null;
  /* Relaxed entries also carry a "Relaxed pace" mode tag, so a
     Relaxed score is labelled as one wherever its entry is shown.
     Standard entries keep the plain mode label they always had. */
  var entry={n:name, s:score, m:modeLabel(mode)+(paceKey(pace)==="relaxed" ? " · Relaxed pace" : ""), d:new Date().toISOString().slice(0,10)};
  /* A TRUE perfect Gauntlet — 1,280 earned with no bonus round —
     is flagged on the entry itself. A bonus game capped at the
     same 1,280 saves an otherwise identical entry, so this flag is
     the only thing that tells the two apart later; the Legends
     Hall of Fame below reads it. Same board, same storage key —
     just one extra field on perfect entries. */
  if(perfect) entry.perfect=true;
  /* Time used (whole seconds) rides on new entries only; entries
     saved before times were kept have no timeSecs field at all
     and read as time-less in compareScoreEntries. */
  if(typeof timeSecs==="number" && isFinite(timeSecs)) entry.timeSecs=Math.max(0, Math.round(timeSecs));
  /* Sudden Death only: the question the run ended on (1–20; the
     full 20 for a cleared run), so the Sudden Death boards can
     mark how far the run got with a compact "· Q6" unit. New
     entries only — historical Sudden Death entries carry no
     sdQ and show no marker; nothing is backfilled. */
  if(isSD && typeof sdQ==="number" && isFinite(sdQ)) entry.sdQ=Math.min(20, Math.max(1, Math.floor(sdQ)));
  list.push(entry);
  list.sort(compareScoreEntries);
  var rank=list.indexOf(entry)+1, total=list.length;
  try{ s.setItem(hsKeyFor(pace, board), JSON.stringify(list.slice(0,HS_KEEP))); }catch(e){ return null; }
  return {rank:rank, total:total, entry:entry};
}
/* Post-game name fix: a game started with no name at the cover is
   saved under the default "Player". If the player adds their name on
   the results screen, rename THAT game's saved entry in place —
   same points, mode, and date, no duplicate entry — and report the
   entry's rank in the updated board. Returns null when storage is
   unavailable or the entry can't be found (e.g. it fell beyond the
   kept list), in which case the caller leaves the entry as-is. */
function renameLocalScore(entry, newName, pace){
  var s=hsStore(); if(!s||!entry) return null;
  /* The entry lives on the board its mode label names — a Sudden
     Death entry on the Sudden Death board, anything else on the
     regular board. That board is searched first; the other board
     is tried as a fallback so a rename never fails just because
     an entry predates the Sudden Death split. */
  var boards=isSuddenDeathEntry(entry) ? ["sd", undefined] : [undefined, "sd"];
  for(var b=0;b<boards.length;b++){
    var board=boards[b];
    var list=(board==="sd") ? loadSuddenDeathScores(pace) : loadLocalScores(pace); if(!list) return null;
    for(var i=0;i<list.length;i++){
      var e=list[i];
      if(e.n===entry.n && e.s===entry.s && e.m===entry.m && e.d===entry.d){
        e.n=newName;
        try{ s.setItem(hsKeyFor(pace, board), JSON.stringify(list.slice(0,HS_KEEP))); }catch(err){ return null; }
        return {rank:i+1, total:list.length};
      }
    }
  }
  return null;
}
/* Board-row metadata units (2026-11-11): mode, pace, date, and
   time each render as one unbreakable .mdunit span (see the CSS)
   so the info line wraps only between whole units — a date or a
   time can never split across lines. Empty units are dropped,
   and the CSS draws the "·" separators between the units that
   remain. */
function boardMdUnits(units){
  return units.filter(function(u){ return u; }).map(function(u){ return '<span class="mdunit">'+u+'</span>'; }).join("");
}
/* ---------- Board trim: the cover boards follow the pace picker ----------
   Display only — no board data, rankings, or submissions change.
   Each pace owns a set of cover boards (its device-local board,
   its Sudden Death board, its shared board); only the SELECTED
   pace's set shows. The trim rides on its own .pace-off class so
   it never fights the hide-while-empty .hidden state the board
   renderers below own: a board is visible only when it is both
   non-empty AND for the picked pace. Pace-agnostic boards — the
   Legends Hall of Fame (derived from both paces) and the shared
   Best Score Per Player list (the backend does not split it by
   pace) — are not in either set and show under either pace,
   unchanged. Re-applied wherever the boards render or the picker
   moves: setCoverPace, renderScoreBoard, and the shared-board
   fetch landing. */
var PACE_BOARD_SETS={
  standard:["scoreBoard", "scoreBoardSD", "sharedBoardStandard", "sharedWeeklyBoardStandard", "sharedHofBoardStandard", "sharedSDBoardStandard"],
  relaxed:["scoreBoardRelaxed", "scoreBoardSDRelaxed", "sharedBoardRelaxed", "sharedWeeklyBoardRelaxed", "sharedHofBoardRelaxed", "sharedSDBoardRelaxed"]
};
function applyPaceBoardFilter(){
  var sel=paceKey(coverPace);
  for(var pace in PACE_BOARD_SETS){
    var off=(pace!==sel);
    PACE_BOARD_SETS[pace].forEach(function(id){
      var el=$(id); if(el) el.classList.toggle("pace-off", off);
    });
  }
  /* The ticker follows the same selected pace, and the More
     Boards section's visibility depends on which of its
     pace-specific boards are currently in the picked set. */
  if(typeof renderTopTicker==="function") renderTopTicker();
  if(typeof updateMoreBoardsVisibility==="function") updateMoreBoardsVisibility();
}
/* ---------- More Boards dropdown visibility ----------
   The More Boards section at the foot of the boards area holds
   the Best Per Player board, both Sudden Death boards (device
   and shared, per pace), and the Closest Wins board. It follows
   the same hide-while-empty rule as every board it contains:
   while every board inside is empty — or trimmed away by the
   pace filter — the whole section, toggle line included, stays
   hidden and leaves no blank space. Re-checked after every
   board render and every pace flip. */
function updateMoreBoardsVisibility(){
  var wrap=$("moreBoardsSection"); if(!wrap) return;
  var ids=["sharedBestBoard", "scoreBoardSD", "scoreBoardSDRelaxed", "sharedSDBoardStandard", "sharedSDBoardRelaxed", "cwBoard"];
  var any=false;
  for(var i=0;i<ids.length;i++){
    var el=$(ids[i]);
    if(el && !el.classList.contains("hidden") && !el.classList.contains("pace-off")){ any=true; break; }
  }
  wrap.classList.toggle("hidden", !any);
}
/* ---------- Top-10 ticker (cover only) ----------
   The old-school LED strip that forms the cover card's top
   band, directly above the TRIVIA OR NADA lockup, fed by
   the same shared-leaderboard fetch as the boards: the shared
   All Time top 10 for the CURRENTLY SELECTED pace. It renders
   when the fetch lands and re-renders on every pace flip; a
   pace with no shared scores — and a failed fetch, which clears
   both lists — hides the strip entirely. It lives inside
   #screen-cover, so starting any game hides it with the cover
   and it never shows during questions or on results. */
var sharedTickerTop={standard:[], relaxed:[]};
function renderTopTicker(){
  var el=$("topTicker"); if(!el) return;
  var list=(sharedTickerTop[paceKey(coverPace)]||[]).slice();
  list.sort(compareScoreEntries);
  list=list.slice(0,10);
  if(!list.length){ el.classList.add("hidden"); return; }
  var parts=list.map(function(e,i){
    var pts=isFinite(e.score) ? +e.score : (isFinite(e.s) ? +e.s : 0);
    return (i+1)+". "+(e.name||e.n||"Player")+" "+pts.toLocaleString("en-US");
  });
  var text="\u2605 TOP SCORES \u2605 "+parts.join(" \u2022 ")+" \u2022 ";
  var t1=$("topTickerText"), t2=$("topTickerText2");
  if(t1) t1.textContent=text;
  if(t2) t2.textContent=text;
  var track=$("topTickerTrack");
  if(track) track.style.animationDuration=Math.max(18, Math.round(text.length*0.45))+"s";
  el.classList.remove("hidden");
}
function renderScoreBoard(){
  /* The cover boards rendering is also the pending shared-rename
     retry point (this runs on every page load): a rename that
     failed earlier — offline, endpoint not yet deployed — is
     sent again here. Defined with the shared block below; a
     no-op when nothing is pending. */
  if(typeof retryPendingSharedRename==="function") retryPendingSharedRename();
  /* Question-flag retry point: this runs on every page load, so a
     flag report that failed to send earlier (offline, endpoint not
     there yet) is retried here — silently, like the rename above. */
  try{ flagFlushQueue(); }catch(e){ /* flagging never touches the boards */ }
  renderOneScoreBoard("standard", "scoreBoard", "scoreList", "scoreEmpty");
  renderOneScoreBoard("relaxed", "scoreBoardRelaxed", "scoreListRelaxed", "scoreEmptyRelaxed");
  renderOneScoreBoard("standard", "scoreBoardSD", "scoreListSD", "scoreEmptySD", "sd");
  renderOneScoreBoard("relaxed", "scoreBoardSDRelaxed", "scoreListSDRelaxed", "scoreEmptySDRelaxed", "sd");
  if(typeof renderHallOfFame==="function") renderHallOfFame();
  if(typeof refreshBackupUI==="function") refreshBackupUI();
  if(typeof refreshDailyCover==="function") refreshDailyCover();
  applyPaceBoardFilter();
}
/* ---------- Cover board collapse: top 3 + tap to expand ----------
   Every list rendered on the cover — the device boards, both
   Sudden Death boards, the Hall of Fame's two lists, every
   shared-leaderboard section, and Best Score Per Player — shows
   its title and its TOP 3 rows only. When a list holds more
   than 3 rows, a "Show all ▾" line sits directly under it;
   tapping expands the full list in place and the line becomes
   "Show less ▴"; tapping again folds it back. A list of 3 or
   fewer rows gets no line at all. Each board renderer calls
   applyBoardCollapse right after it fills its list, so every
   render — page load, a finished game, the shared fetch
   landing — starts collapsed; expansion never persists across
   renders, and each list folds independently of the others.
   Display only: the rows, their order, and their formatting
   are exactly what the renderers built. It composes with the
   two standing display rules because it only ever touches the
   list itself — hide-while-empty still hides the whole board
   (expander included), and the pace filter still hides the
   non-picked pace's boards (.pace-off) expanded or not. */
var BOARD_COLLAPSE_SHOW=3;
function applyBoardCollapse(listEl){
  if(!listEl || !listEl.parentNode) return;
  /* Drop any expander left behind by a previous render of this
     list, and start from the expanded row set before deciding. */
  var old=listEl.nextElementSibling;
  if(old && old.classList && old.classList.contains("boardmore")) old.parentNode.removeChild(old);
  listEl.classList.remove("board-collapsed");
  if(listEl.children.length<=BOARD_COLLAPSE_SHOW) return;
  listEl.classList.add("board-collapsed");
  var btn=document.createElement("button");
  btn.type="button";
  btn.className="boardmore";
  btn.setAttribute("aria-expanded","false");
  btn.textContent="Show all \u25BE";
  btn.addEventListener("click", function(){
    var open=listEl.classList.toggle("board-collapsed")===false;
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.textContent= open ? "Show less \u25B4" : "Show all \u25BE";
  });
  listEl.parentNode.insertBefore(btn, listEl.nextSibling);
}
function renderOneScoreBoard(pace, boardId, listId, emptyId, boardKind){
  var board=$(boardId); if(!board) return;
  var isSD=(boardKind==="sd");
  var list=isSD ? loadSuddenDeathScores(pace) : loadLocalScores(pace);
  if(!list){ board.classList.add("hidden"); return; }
  /* Every board on the cover follows the same rule: while its
     list is empty, the whole board — heading, note, and empty
     message included — stays hidden, with no blank space left
     behind. The moment a score is saved to that list, the board
     appears. That holds for the Standard board, the Relaxed
     board, and both Sudden Death boards alike. */
  if(!list.length){ board.classList.add("hidden"); return; }
  board.classList.remove("hidden");
  var top=list.slice(0,HS_SHOW);
  var emptyEl=$(emptyId); if(emptyEl) emptyEl.style.display="none";
  $(listId).innerHTML=top.map(function(e,i){
    var tSecs=entryTimeSecs(e);
    return "<li><span class=\"rk\">#"+(i+1)+"</span><span class=\"nmwrap\"><span class=\"nm\">"+escapeHtml(e.n)+"</span>"+
      "<span class=\"md\">"+boardMdUnits([escapeHtml(displayModeLabel(e.m)), (e.d?escapeHtml(e.d):""), (tSecs!==null ? '<span class="btime">'+fmtTimeUsed(tSecs)+"</span>" : ""), (isSD && typeof e.sdQ==="number" && isFinite(e.sdQ) ? "Q"+Math.floor(e.sdQ) : "")])+"</span></span>"+
      "<span class=\"pts\">"+e.s+" pts</span></li>";
  }).join("");
  applyBoardCollapse($(listId));
}
/* ---------- Legends Hall of Fame (this device only) ----------
   Not a board of its own: the Hall of Fame is DERIVED from the
   same saved scores the two pace boards above show, so it needs
   no storage key of its own and the score backup below covers it
   automatically. An entry belongs here when it is a Legend
   Gauntlet game (its saved mode label says so) or a true perfect
   Gauntlet (flagged "perfect" when it was recorded — a bonus game
   capped at 1,280 carries no flag and never qualifies, and
   neither does any regular game). Both pace boards feed it.
   It renders as two sections — Perfect Games and Legend
   Games — each ranked best first within itself, so a Legend
   score ranks against Legend scores, not under the perfects.
   Like every score here it lives in this browser
   only — there is no shared board for other players to see. */
function hallOfFameEntries(){
  var perfect=[], legend=[];
  ["standard","relaxed"].forEach(function(pace){
    /* Both the regular boards and the Sudden Death boards feed
       the Hall — a true perfect Sudden Death game (flagged
       perfect, like any perfect Gauntlet) still counts here even
       though its score now lives on the Sudden Death board. */
    [loadLocalScores(pace), loadSuddenDeathScores(pace)].forEach(function(list){
      if(!list) return;
      list.forEach(function(e){
        var m=e.m||"";
        if(m.indexOf("Legend Gauntlet")===0) legend.push({n:e.n, s:e.s, kind:"Legend Gauntlet", d:e.d||"", perfect:!!e.perfect, timeSecs:(entryTimeSecs(e)!==null ? entryTimeSecs(e) : undefined)});
        else if(e.perfect) perfect.push({n:e.n, s:e.s, kind:"Perfect", d:e.d||"", perfect:true, timeSecs:(entryTimeSecs(e)!==null ? entryTimeSecs(e) : undefined)});
      });
    });
  });
  /* Each section ranks within itself, best first — a Legend score
     is never buried under the perfect 1,280s. */
  perfect.sort(compareScoreEntries);
  legend.sort(compareScoreEntries);
  return {perfect:perfect, legend:legend};
}
function renderHofSection(sectionEl, listEl, emptyEl, entries){
  if(!listEl || !emptyEl) return;
  /* Same hide-while-empty rule as the score boards: an empty
     section hides entirely — its heading, its list, and its
     empty message — and appears the moment it has an entry. */
  if(sectionEl) sectionEl.classList.toggle("hidden", !entries.length);
  emptyEl.style.display="none";
  listEl.innerHTML=entries.map(function(e,i){
    var tSecs=entryTimeSecs(e);
    return "<li><span class=\"rk\">#"+(i+1)+"</span><span class=\"nmwrap\"><span class=\"nm\">"+escapeHtml(e.n)+"</span>"+
      "<span class=\"md\">"+boardMdUnits([e.kind, (e.d?escapeHtml(e.d):""), (tSecs!==null ? '<span class="btime">'+fmtTimeUsed(tSecs)+"</span>" : "")])+"</span></span>"+
      "<span class=\"pts\">"+e.s+" pts</span></li>";
  }).join("");
  applyBoardCollapse(listEl);
}
function renderHallOfFame(){
  var sections=hallOfFameEntries();
  renderHofSection($("hofPerfectSection"), $("hofPerfectList"), $("hofPerfectEmpty"), sections.perfect);
  renderHofSection($("hofLegendSection"), $("hofLegendList"), $("hofLegendEmpty"), sections.legend);
  /* The Hall itself follows the rule too: with no Perfect and
     no Legend entries, the whole board — its heading and note
     included — stays hidden and leaves no blank space. */
  var board=$("hofBoard");
  if(board) board.classList.toggle("hidden", !sections.perfect.length && !sections.legend.length);
}
function dailyDateString(d){
  d=d||new Date();
  var m=String(d.getMonth()+1); if(m.length<2) m="0"+m;
  var day=String(d.getDate()); if(day.length<2) day="0"+day;
  return d.getFullYear()+"-"+m+"-"+day;
}
function dailyPrevDateString(dateStr){
  var parts=String(dateStr).split("-");
  var dt=new Date(+parts[0], (+parts[1]||1)-1, +parts[2]||1);
  dt.setDate(dt.getDate()-1);
  return dailyDateString(dt);
}
function dailySeedFor(dateStr){ return "daily-"+dateStr; }
function loadDaily(){
  if(dailyCache) return dailyCache;
  dailyCache={lastPlayedDate:null, currentStreak:0, bestStreak:0};
  var s=hsStore(); if(!s) return dailyCache;
  try{
    var raw=s.getItem(DAILY_KEY); if(!raw) return dailyCache;
    var d=JSON.parse(raw);
    if(d && typeof d==="object"){
      if(typeof d.lastPlayedDate==="string" && /^\d{4}-\d{2}-\d{2}$/.test(d.lastPlayedDate)) dailyCache.lastPlayedDate=d.lastPlayedDate;
      if(isFinite(d.currentStreak)) dailyCache.currentStreak=Math.max(0, Math.floor(d.currentStreak));
      if(isFinite(d.bestStreak)) dailyCache.bestStreak=Math.max(0, Math.floor(d.bestStreak));
    }
  }catch(e){ /* unreadable store — streak starts fresh this session */ }
  return dailyCache;
}
function saveDaily(d){
  dailyCache={lastPlayedDate:d.lastPlayedDate, currentStreak:d.currentStreak, bestStreak:d.bestStreak};
  var s=hsStore(); if(!s) return;
  try{ s.setItem(DAILY_KEY, JSON.stringify(dailyCache)); }catch(e){ /* full/blocked — session copy still applies */ }
}
function dailyCompletedOn(dateStr){ return loadDaily().lastPlayedDate===dateStr; }
/* Record a finished daily against its own date and return the
   resulting streak. A date that already counted changes nothing. */
function recordDailyCompletion(dateStr){
  var d=loadDaily();
  if(d.lastPlayedDate===dateStr) return {current:d.currentStreak, best:d.bestStreak, already:true};
  var cur=(d.lastPlayedDate===dailyPrevDateString(dateStr)) ? d.currentStreak+1 : 1;
  var nd={lastPlayedDate:dateStr, currentStreak:cur, bestStreak:Math.max(d.bestStreak, cur)};
  saveDaily(nd);
  return {current:nd.currentStreak, best:nd.bestStreak, already:false};
}
/* Cover state for the Daily button: today's daily already scored
   reads Done and is disabled; an unfinished daily in the progress
   save offers a resume; the streak shows only while one is alive. */
function refreshDailyCover(){
  var btn=$("dailyGauntletBtn"); if(!btn) return;
  var today=dailyDateString();
  var d=loadDaily();
  var done=d.lastPlayedDate===today;
  var prog=null;
  try{ prog=loadProgress(); }catch(e){ prog=null; }
  var resumable=!!(prog && prog.daily);
  btn.disabled=done;
  btn.textContent = done ? "Daily Gauntlet \u2713 Done" : (resumable ? "Resume Daily Gauntlet" : "Daily Gauntlet");
  var sl=$("dailyStreakLine");
  if(sl){
    if(d.currentStreak>=1){ sl.textContent="\uD83D\uDD25 "+d.currentStreak+"-day streak"; sl.classList.remove("hidden"); }
    else { sl.textContent=""; sl.classList.add("hidden"); }
  }
}
/* Start the Daily Gauntlet for a local date: re-install its seed
   so the deal starts from the same point in the stream on every
   device, build it with the seen-question memory bypassed and the
   strict finale taken from the stream (the challenge-deal path,
   under the daily namespace), then play it as its own mode at the
   pace picked on the cover. A date that already scored never
   starts again. */
function startDailyGauntlet(dateStr){
  var date=(typeof dateStr==="string" && /^\d{4}-\d{2}-\d{2}$/.test(dateStr)) ? dateStr : dailyDateString();
  if(dailyCompletedOn(date)){ refreshDailyCover(); return; }
  var seed=dailySeedFor(date);
  installSeed(seed);
  dealBypassSeen=true; challengeDeal=true;
  var qs;
  try{ qs=buildGauntlet(); }
  finally{ dealBypassSeen=false; challengeDeal=false; }
  pendingFlags={daily:true, dailyDate:date, seed:seed};
  startGame("daily", qs);
}
function validSharedId(id){ return typeof id==="string" && /^[A-Za-z0-9-]{6,64}$/.test(id); }
function loadPendingRename(){
  var s=hsStore(); if(!s) return null;
  try{
    var raw=s.getItem(PENDING_RENAME_KEY); if(!raw) return null;
    var d=JSON.parse(raw);
    if(d && validSharedId(d.id) && typeof d.name==="string" && d.name.trim() && d.name.trim()!=="Player")
      return {id:d.id, name:d.name.trim()};
  }catch(e){ /* unreadable store — no pending rename this session */ }
  return null;
}
function storePendingRename(id, name){
  var s=hsStore(); if(!s) return;
  try{ s.setItem(PENDING_RENAME_KEY, JSON.stringify({id:id, name:name})); }catch(e){ /* blocked — in-session rename still fires */ }
}
function clearPendingRename(){
  var s=hsStore(); if(!s) return;
  try{ s.removeItem(PENDING_RENAME_KEY); }catch(e){}
}
/* Rename one shared-board row from "Player" to name. The pending
   rename is stored BEFORE the request is sent, so a page that
   closes mid-flight (or a request that fails — offline, endpoint
   not yet deployed) is retried on the next load / cover render.
   Success clears it, and so does the backend's definitive 404 —
   identified by its structured JSON error body ({ok:false,
   error:"Score not found, …"}: row gone, already named, or older
   than 48 hours). A bare 404 with no such body means the endpoint
   itself isn't deployed yet, so the pending rename is kept and
   retried like any other failure. */
function requestSharedRename(id, name){
  try{
    name=(typeof name==="string" ? name.trim() : "");
    if(!validSharedId(id) || !name || name==="Player") return;
    storePendingRename(id, name);
    if(typeof fetch!=="function") return;
    var key=id+"|"+name;
    if(sharedRenameInFlightKey===key) return;
    sharedRenameInFlightKey=key;
    fetch(SHARED_RENAME_URL,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({id:id, name:name})
    }).then(function(r){
        var status=(r && typeof r.status==="number") ? r.status : 0;
        return r.json().then(function(d){ return {status:status, d:d}; }, function(){ return {status:status, d:null}; });
      })
      .then(function(res){
        sharedRenameInFlightKey=null;
        if(res.d && res.d.ok){ clearPendingRename(); fetchSharedLeaderboard(); noteSharedRenamed(name); }
        else if(res.status===404 && res.d && res.d.ok===false && typeof res.d.error==="string"){ clearPendingRename(); }
        /* Any other answer keeps the pending rename — it is
           retried on the next load. That includes a bare 404 with
           no structured backend error (endpoint not deployed yet),
           a 429, a 500, and an unreadable body. */
      })
      .catch(function(){
        sharedRenameInFlightKey=null;
        /* Offline or endpoint not there yet: the pending rename
           stays stored and is retried on the next page load /
           cover render. The device score already stands. */
      });
  }catch(e){ /* best-effort: never let this touch the game */ }
}
/* Retry a stored pending rename, if any. Called when the cover
   boards render (which includes every page load): a no-op when
   nothing is pending or that exact rename is already in flight. */
function retryPendingSharedRename(){
  var p=loadPendingRename();
  if(p) requestSharedRename(p.id, p.name);
}
/* When a shared rename lands while its results screen is still
   up, say so on that screen — the saved line can then name both
   boards instead of this device only. */
function noteSharedRenamed(name){
  try{
    var msg=$("lateNameMsg"); if(!msg) return;
    if(state && state.name===name && msg.textContent && msg.textContent.indexOf("Saved!")===0)
      msg.textContent="Saved! This score is now under \u201C"+name+"\u201D on this device and on the shared leaderboard.";
  }catch(e){}
}
function submitSharedScore(name, score, mode, pace, perfect, timeSecs, sdQ){
  try{
    if(typeof fetch!=="function") return;
    var label=modeLabel(mode);
    if(!SHARED_MODES[label]) return;
    /* The game this submission belongs to, captured now: the
       response may land after a newer game has replaced the
       global state, and the returned row id belongs to THIS one. */
    var gs=(typeof state!=="undefined") ? state : null;
    var submittedName=name;
    /* §6: the stable anonymous player id from the profile record,
       created on the spot when this device has none yet (a player
       who never played Practice), and NEVER regenerated once it
       exists — the same id rides every submission from this
       device. Null when storage is unavailable: the field is then
       omitted and the backend stores NULL, exactly as it does for
       every historical row. */
    var pid=null;
    try{ pid=ensureAnonPlayerId(); }catch(e){ pid=null; }
    fetch(SHARED_SUBMIT_URL,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        name:name, score:score, mode:label,
        pace:paceKey(pace)==="relaxed" ? "Relaxed" : "Standard",
        perfect:!!perfect,
        /* Time used, whole seconds — a new optional field: older
           backends ignore it, and once the backend keeps it the
           shared boards rank by it via compareScoreEntries. */
        timeSecs:(typeof timeSecs==="number" && isFinite(timeSecs)) ? Math.max(0, Math.round(timeSecs)) : undefined,
        /* §6: additive and optional — older backends ignore it,
           and the §6 backend validates its shape itself, storing
           NULL for anything it does not accept; the submission is
           never rejected over this field. */
        playerId:(typeof pid==="string" && pid) ? pid : undefined,
        /* Sudden Death only: the question the run ended on
           (1–20; 20 for a clear), so the shared Sudden Death
           lists can mark it "· Q6" the same way the device
           boards do. Additive and optional, like timeSecs —
           older backends ignore it, rows without it show no
           marker, and it is never sent for other modes. */
        sdQ:(mode==="suddendeath" && typeof sdQ==="number" && isFinite(sdQ)) ? Math.min(20, Math.max(1, Math.floor(sdQ))) : undefined
      })
    }).then(function(r){ return r.json(); })
      .then(function(d){
        if(d && d.ok){
          if(d.id && validSharedId(String(d.id))){
            var sid=String(d.id);
            if(gs){ gs.sharedId=sid; if(gs.hsEntry) gs.hsEntry.sharedId=sid; }
            /* The player already saved their name on the results
               screen while this submit was in flight: rename the
               row now that its id is known. A wanted rename left
               over from a different game is stale — drop it. */
            if(sharedRenameWanted){
              if(sharedRenameWanted.game===gs && submittedName==="Player") requestSharedRename(sid, sharedRenameWanted.name);
              sharedRenameWanted=null;
            }
          }
          fetchSharedLeaderboard();
        }
      })
      .catch(function(){
        /* best-effort: the local score already saved. A wanted
           rename for this game can never be sent without its row
           id, so it is dropped rather than left to misfire later. */
        if(sharedRenameWanted && sharedRenameWanted.game===gs) sharedRenameWanted=null;
      });
  }catch(e){ /* best-effort: never let this touch the game */ }
}
function sharedEntryHtml(e, i){
  var tSecs=entryTimeSecs(e);
  /* The backend sends each score's full ISO timestamp; the board
     shows the date alone — YYYY-MM-DD, exactly as the device
     boards list it next to the name and the type of trivia. */
  var d=e.date ? String(e.date) : "";
  if(/^\d{4}-\d{2}-\d{2}/.test(d)) d=d.slice(0,10);
  /* Sudden Death rows that carry the ending question show it as
     one compact metadata unit ("· Q6"); rows without the value —
     every historical row — show no marker, and no other mode's
     rows ever do. */
  var sdUnit=(/sudden/i.test(e.mode||"") && typeof e.sdQ==="number" && isFinite(e.sdQ)) ? "Q"+Math.min(20, Math.max(1, Math.floor(e.sdQ))) : "";
  var meta=boardMdUnits([escapeHtml(displayModeLabel(e.mode||"")), (e.pace==="Relaxed" ? "Relaxed pace" : ""), (d ? escapeHtml(d) : ""), (tSecs!==null ? '<span class="btime">'+fmtTimeUsed(tSecs)+"</span>" : ""), sdUnit]);
  return "<li><span class=\"rk\">#"+(i+1)+"</span><span class=\"nmwrap\"><span class=\"nm\">"+escapeHtml(e.name||"Player")+"</span>"+
    "<span class=\"md\">"+meta+"</span></span>"+
    "<span class=\"pts\">"+(+e.score||0)+" pts</span></li>";
}
function renderSharedSection(sectionId, listId, entries){
  var sec=$(sectionId), list=$(listId); if(!sec || !list) return 0;
  var ranked=(entries && entries.constructor===Array ? entries : []).slice();
  ranked.sort(compareScoreEntries);
  var top=ranked.slice(0,10);
  /* Same hide-while-empty rule as every other board: a section
     with no scores hides entirely, heading included. */
  sec.classList.toggle("hidden", !top.length);
  list.innerHTML=top.map(sharedEntryHtml).join("");
  applyBoardCollapse(list);
  return top.length;
}
/* Boards reorganization (2026-11-13): the shared sections no
   longer share one panel per pace. Each visible board is its
   own panel — All Time, This Week, the shared Hall of Fame
   (Perfect + Legend), and the shared Sudden Death board inside
   More Boards — and each follows the same hide-while-empty
   rule: a panel with no scores in any of its sections hides
   entirely, heading and note included, leaving no blank space. */
function renderSharedSplitBoard(boardId, sections){
  var board=$(boardId); if(!board) return 0;
  var shown=0;
  for(var i=0;i<sections.length;i++)
    shown+=renderSharedSection(sections[i][0], sections[i][1], sections[i][2]);
  board.classList.toggle("hidden", !shown);
  return shown;
}
function renderSharedPaceBoard(boardId, noteId, paceLabel, total, sections){
  var shown=renderSharedSplitBoard(boardId, sections);
  var note=$(noteId);
  if(note && typeof total==="number" && total>0)
    note.textContent=paceLabel+" pace scores from everyone playing — "+total+" score"+(total===1?"":"s")+" shared so far at "+paceLabel+" pace, from all players, not just this device.";
  return shown;
}
/* Best Score Per Player board (Update 1.2 §6): one section fed
   by the response's bestPerPlayer list, spanning both paces —
   each row keeps its own pace tag and perfect flag through
   sharedEntryHtml, and compareScoreEntries still ranks a true
   perfect above a bonus-assisted one at the same score. The
   grouping itself happened on the backend, by player_id only:
   this client never groups, merges, or dedupes rows by display
   name. Same hide-while-empty rule as every other board — until
   the §6 backend is deployed AND players post new scores with
   ids, this board is legitimately empty and stays hidden; a
   response with no bestPerPlayer field at all (the pre-§6
   backend) reads as an empty list here, not an error. */
function renderSharedBestBoard(entries){
  var board=$("sharedBestBoard"); if(!board) return 0;
  var shown=renderSharedSection("sharedBestSection", "sharedBestList", entries);
  board.classList.toggle("hidden", !shown);
  if(typeof updateMoreBoardsVisibility==="function") updateMoreBoardsVisibility();
  return shown;
}
function fetchSharedLeaderboard(){
  var boardStd=$("sharedBoardStandard"), boardRel=$("sharedBoardRelaxed"), boardBest=$("sharedBestBoard");
  if(!boardStd && !boardRel) return;
  var linkNote=$("sharedLinkNote");
  function hideSharedBoards(){
    ["sharedBoardStandard", "sharedBoardRelaxed", "sharedWeeklyBoardStandard", "sharedWeeklyBoardRelaxed",
     "sharedHofBoardStandard", "sharedHofBoardRelaxed", "sharedSDBoardStandard", "sharedSDBoardRelaxed",
     "sharedBestBoard"].forEach(function(id){ var el=$(id); if(el) el.classList.add("hidden"); });
    /* No shared scores reachable — no ticker either. */
    sharedTickerTop={standard:[], relaxed:[]};
    renderTopTicker();
    if(typeof updateMoreBoardsVisibility==="function") updateMoreBoardsVisibility();
  }
  function showLinkNote(){
    /* The shared board isn't reachable from this page — on the
       Muse public link the game runs inside a frame that blocks
       this call entirely, so the shared sections can never appear
       there. Hide them as before, and point those players at the
       real site instead of leaving a High Scores button that
       leads nowhere shared. */
    hideSharedBoards();
    if(linkNote) linkNote.classList.remove("hidden");
  }
  if(typeof fetch!=="function"){
    showLinkNote();
    return;
  }
  /* An ~8-second guard around the board fetch: a request that
     hangs silently (the frame swallowing the call without ever
     answering) must land in the same place as an outright
     failure. Whichever of the fetch and the timer settles first
     wins; the loser is ignored, so a late answer can never
     resurrect the boards over the note or vice versa. */
  var settled=false, ctrl=null;
  if(typeof AbortController==="function"){ try{ ctrl=new AbortController(); }catch(e){ ctrl=null; } }
  var timer=setTimeout(function(){
    if(settled) return; settled=true;
    if(ctrl){ try{ ctrl.abort(); }catch(e){} }
    showLinkNote();
  }, 8000);
  fetch(SHARED_BOARD_URL, ctrl ? {signal:ctrl.signal} : undefined).then(function(r){ return r.json(); }).then(function(d){
    if(settled) return;
    if(!d || !d.ok) throw new Error("shared board unavailable");
    settled=true; clearTimeout(timer);
    if(linkNote) linkNote.classList.add("hidden");
    /* Pace-separated lists only: topStandard / topRelaxed and the
       matching Perfect, Legend, and Sudden Death lists, with each
       pace's own total. The combined top / perfect / legend /
       suddenDeath / total fields are deliberately not read, so
       Standard and Relaxed never share a board. */
    /* Ticker data first: the cover strip carries the All Time
       top 10 of whichever pace is selected, from these same
       lists — renderTopTicker runs again inside
       applyPaceBoardFilter below. */
    sharedTickerTop={
      standard:(d.topStandard && d.topStandard.constructor===Array) ? d.topStandard.slice() : [],
      relaxed:(d.topRelaxed && d.topRelaxed.constructor===Array) ? d.topRelaxed.slice() : []
    };
    /* Prestige order: the shared Perfect / Legend lists render
       in the Hall of Fame panels, All Time and This Week in
       their own visible panels, and Sudden Death inside More
       Boards — each panel hiding while its own lists are empty. */
    renderSharedSplitBoard("sharedHofBoardStandard", [
      ["sharedPerfectSectionStandard", "sharedPerfectListStandard", d.perfectStandard],
      ["sharedLegendSectionStandard", "sharedLegendListStandard", d.legendStandard]
    ]);
    renderSharedSplitBoard("sharedHofBoardRelaxed", [
      ["sharedPerfectSectionRelaxed", "sharedPerfectListRelaxed", d.perfectRelaxed],
      ["sharedLegendSectionRelaxed", "sharedLegendListRelaxed", d.legendRelaxed]
    ]);
    renderSharedPaceBoard("sharedBoardStandard", "sharedTotalNoteStandard", "Standard", d.totalStandard, [
      ["sharedTopSectionStandard", "sharedTopListStandard", d.topStandard]
    ]);
    renderSharedPaceBoard("sharedBoardRelaxed", "sharedTotalNoteRelaxed", "Relaxed", d.totalRelaxed, [
      ["sharedTopSectionRelaxed", "sharedTopListRelaxed", d.topRelaxed]
    ]);
    renderSharedSplitBoard("sharedWeeklyBoardStandard", [
      ["sharedWeeklySectionStandard", "sharedWeeklyListStandard", d.topWeeklyStandard]
    ]);
    renderSharedSplitBoard("sharedWeeklyBoardRelaxed", [
      ["sharedWeeklySectionRelaxed", "sharedWeeklyListRelaxed", d.topWeeklyRelaxed]
    ]);
    renderSharedSplitBoard("sharedSDBoardStandard", [
      ["sharedSDSectionStandard", "sharedSDListStandard", d.suddenDeathStandard]
    ]);
    renderSharedSplitBoard("sharedSDBoardRelaxed", [
      ["sharedSDSectionRelaxed", "sharedSDListRelaxed", d.suddenDeathRelaxed]
    ]);
    /* Best Score Per Player (§6) — deliberately read AFTER the
       two pace boards and from its own field only: a missing
       field (pre-§6 backend) is an empty list, so the board
       hides and the pace boards above render exactly as before. */
    renderSharedBestBoard(d.bestPerPlayer);
    /* Board trim: the shared boards just rendered for both paces —
       show only the picked pace's set. */
    applyPaceBoardFilter();
  }).catch(function(){
    if(settled) return; settled=true; clearTimeout(timer);
    /* Offline or the backend isn't there: hide the shared boards
       gracefully — no error, no gap; the local boards still show,
       and the note points players at the site where the shared
       board lives. */
    showLinkNote();
  });
}
/* ---------- Score backup: export / import (this device only) ----------
   The boards above live in this browser's storage only, so a player
   who plays in Safari and in the Muse app ends up with two boards
   that never meet — and a cleared browser takes its board with it.
   Export bundles ALL boards (Standard and Relaxed, plus both
   Sudden Death boards) into one small
   JSON backup, offered two ways for phones: a downloaded file, and
   a copyable code in the textarea (for moving between browsers on
   the same phone, where a file is awkward). Import MERGES: entries
   already on a board are skipped as duplicates, new ones are added,
   each board is re-sorted and kept to the usual HS_KEEP — importing
   can never delete or replace scores already saved here. Entries
   are validated to the same shape loadLocalScores accepts
   (name string + finite points; mode/date kept when strings). */
function cleanBackupEntry(e){
  if(!e || typeof e.n!=="string" || !e.n.trim() || !isFinite(e.s)) return null;
  var out={n:e.n, s:Number(e.s), m:(typeof e.m==="string"?e.m:""), d:(typeof e.d==="string"?e.d:"")};
  /* The true-perfect flag rides along, so a backup moved to
     another browser keeps its Legends Hall of Fame entries. */
  if(e.perfect) out.perfect=true;
  if(typeof e.timeSecs==="number" && isFinite(e.timeSecs) && e.timeSecs>=0) out.timeSecs=Math.round(e.timeSecs);
  /* The Sudden Death ending question rides along too, so a
     backup moved to another browser keeps its "· Q6" markers.
     Entries without it stay without it. */
  if(typeof e.sdQ==="number" && isFinite(e.sdQ) && e.sdQ>=1) out.sdQ=Math.min(20, Math.floor(e.sdQ));
  return out;
}
function scoreEntryKey(e){ return e.n+"|"+e.s+"|"+(e.m||"")+"|"+(e.d||""); }
function collectBackup(){
  var std=loadLocalScores("standard"), rel=loadLocalScores("relaxed");
  var sdStd=loadSuddenDeathScores("standard"), sdRel=loadSuddenDeathScores("relaxed");
  if(!std || !rel || !sdStd || !sdRel) return null;
  return {
    app:"trivia-or-nada", kind:"highscores-backup", version:2,
    exportedAt:new Date().toISOString().slice(0,10),
    standard:std.map(cleanBackupEntry).filter(Boolean),
    relaxed:rel.map(cleanBackupEntry).filter(Boolean),
    suddenDeathStandard:sdStd.map(cleanBackupEntry).filter(Boolean),
    suddenDeathRelaxed:sdRel.map(cleanBackupEntry).filter(Boolean)
  };
}
function backupTotal(data){
  if(!data) return 0;
  return (data.standard||[]).length+(data.relaxed||[]).length+(data.suddenDeathStandard||[]).length+(data.suddenDeathRelaxed||[]).length;
}
function backupBreakdown(data){
  var sd=(data.suddenDeathStandard||[]).length+(data.suddenDeathRelaxed||[]).length;
  return data.standard.length+" Standard, "+data.relaxed.length+" Relaxed, "+sd+" Sudden Death";
}
function backupMsg(text){
  var m=$("backupMsg"); if(m) m.textContent=text||"";
}
function refreshBackupUI(){
  var el=$("backupSummary"); if(!el) return;
  var std=loadLocalScores("standard"), rel=loadLocalScores("relaxed");
  var sdStd=loadSuddenDeathScores("standard"), sdRel=loadSuddenDeathScores("relaxed");
  if(!std || !rel || !sdStd || !sdRel){
    el.textContent="Score saving isn't available in this browser, so there's nothing to back up here.";
    return;
  }
  var sdTotal=sdStd.length+sdRel.length;
  var total=std.length+rel.length+sdTotal;
  el.textContent = total
    ? "Saved in this browser: "+std.length+" Standard score"+(std.length===1?"":"s")+" · "+rel.length+" Relaxed score"+(rel.length===1?"":"s")+" · "+sdTotal+" Sudden Death score"+(sdTotal===1?"":"s")+" ("+sdStd.length+" Standard, "+sdRel.length+" Relaxed)."
    : "No saved scores in this browser yet — finish a game and your backup will include it.";
}
function fillBackupCode(){
  var data=collectBackup();
  if(!data) return null;
  var code=JSON.stringify(data, null, 2);
  var ta=$("backupCode"); if(ta) ta.value=code;
  return {data:data, code:code};
}
function exportScoresFile(){
  var filled=fillBackupCode();
  if(!filled){ backupMsg("Couldn't read your scores — score saving isn't available in this browser."); return; }
  var total=backupTotal(filled.data);
  if(!total){ backupMsg("No scores to back up yet — finish a game first, then export."); return; }
  try{
    var blob=new Blob([filled.code], {type:"application/json"});
    var url=URL.createObjectURL(blob);
    var a=document.createElement("a");
    a.href=url; a.download="trivia-or-nada-scores.json";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function(){ URL.revokeObjectURL(url); }, 60000);
    backupMsg("Backup downloaded: "+total+" score"+(total===1?"":"s")+" ("+backupBreakdown(filled.data)+"). Import that file in the other browser to move them. The same backup is also in the code box below.");
  }catch(e){
    backupMsg("The download didn't start in this browser — use “Copy backup code” instead and paste the code into the other browser.");
  }
}
function copyBackupCode(){
  var filled=fillBackupCode();
  if(!filled){ backupMsg("Couldn't read your scores — score saving isn't available in this browser."); return; }
  var total=backupTotal(filled.data);
  if(!total){ backupMsg("No scores to back up yet — finish a game first, then copy your backup code."); return; }
  var ta=$("backupCode");
  function done(){ backupMsg("Backup code copied: "+total+" score"+(total===1?"":"s")+". Open the game in the other browser, paste the code into its backup box, and tap “Import pasted code”."); }
  function fallback(){
    if(ta){ ta.focus(); ta.select(); }
    try{
      if(document.execCommand && document.execCommand("copy")){ done(); return; }
    }catch(e){}
    backupMsg("The code is in the box above — press and hold it, Select All, then Copy, and paste it into the other browser's backup box.");
  }
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(filled.code).then(done, fallback);
  } else fallback();
}
function parseBackup(text){
  var obj;
  try{ obj=JSON.parse(String(text||"").trim()); }catch(e){ return null; }
  if(!obj) return null;
  var std=null, rel=null, sdStd=null, sdRel=null;
  if(Array.isArray(obj)){ std=obj; rel=[]; }
  else if(Array.isArray(obj.standard) || Array.isArray(obj.relaxed) || Array.isArray(obj.suddenDeathStandard) || Array.isArray(obj.suddenDeathRelaxed)){
    std=obj.standard||[]; rel=obj.relaxed||[];
    sdStd=obj.suddenDeathStandard||obj.sdStandard||[];
    sdRel=obj.suddenDeathRelaxed||obj.sdRelaxed||[];
  }
  else if(obj.scores && (Array.isArray(obj.scores.standard) || Array.isArray(obj.scores.relaxed))){
    std=obj.scores.standard||[]; rel=obj.scores.relaxed||[];
    sdStd=obj.scores.suddenDeathStandard||[];
    sdRel=obj.scores.suddenDeathRelaxed||[];
  }
  else return null;
  /* Backups made before the Sudden Death split (version 1) carry
     Sudden Death scores inside the regular Standard / Relaxed
     lists. Split any Sudden Death-labelled entry out of those
     lists here, so importing an old backup lands it on the
     Sudden Death board — never back on the regular board. */
  function splitSD(list, sdList){
    var main=[];
    (list||[]).map(cleanBackupEntry).filter(Boolean).forEach(function(e){
      if(isSuddenDeathEntry(e)) sdList.push(e); else main.push(e);
    });
    return main;
  }
  var outSdStd=(sdStd||[]).map(cleanBackupEntry).filter(Boolean);
  var outSdRel=(sdRel||[]).map(cleanBackupEntry).filter(Boolean);
  return {
    standard:splitSD(std, outSdStd),
    relaxed:splitSD(rel, outSdRel),
    suddenDeathStandard:outSdStd,
    suddenDeathRelaxed:outSdRel
  };
}
function mergeBackupInto(pace, incoming, board){
  var s=hsStore(); if(!s) return -1;
  var list=(board==="sd") ? loadSuddenDeathScores(pace) : loadLocalScores(pace); if(!list) return -1;
  var seen={};
  list.forEach(function(e){ seen[scoreEntryKey(e)]=1; });
  var added=0;
  incoming.forEach(function(e){
    var k=scoreEntryKey(e);
    if(!seen[k]){ seen[k]=1; list.push(e); added++; }
  });
  if(added){
    list.sort(compareScoreEntries);
    try{ s.setItem(hsKeyFor(pace, board), JSON.stringify(list.slice(0,HS_KEEP))); }catch(e){ return -1; }
  }
  return added;
}
function importBackupText(text){
  var parsed=parseBackup(text);
  if(!parsed){ backupMsg("That doesn't look like a Trivia or Nada backup. Paste the whole backup code, or import the downloaded backup file."); return; }
  var found=backupTotal(parsed);
  if(!found){ backupMsg("That backup has no scores in it — nothing was imported."); return; }
  var aStd=mergeBackupInto("standard", parsed.standard);
  var aRel=mergeBackupInto("relaxed", parsed.relaxed);
  var aSdStd=mergeBackupInto("standard", parsed.suddenDeathStandard, "sd");
  var aSdRel=mergeBackupInto("relaxed", parsed.suddenDeathRelaxed, "sd");
  if(aStd<0 || aRel<0 || aSdStd<0 || aSdRel<0){ backupMsg("Couldn't save the imported scores — score saving isn't available in this browser."); return; }
  renderScoreBoard();
  var added=aStd+aRel+aSdStd+aSdRel;
  if(!added){
    backupMsg("Already up to date — all "+found+" score"+(found===1?"":"s")+" in that backup are already on this browser's boards. Nothing was changed.");
  } else {
    backupMsg("Imported "+added+" new score"+(added===1?"":"s")+" ("+aStd+" Standard, "+aRel+" Relaxed, "+(aSdStd+aSdRel)+" Sudden Death). Duplicates were skipped and no existing scores were removed. Your boards above now show the combined top 10.");
  }
}
function saveProgress(){
  var s=hsStore(); if(!s || !state) return;
  try{
    s.setItem(PROG_KEY, JSON.stringify({
      v:1, mode:state.mode, pace:paceKey(state.pace), name:state.name, startedNameless:!!state.startedNameless,
      idx:state.idx, score:state.score, streak:state.streak, bestStreak:state.bestStreak,
      timeUsed:(typeof state.timeUsed==="number" && isFinite(state.timeUsed) ? state.timeUsed : 0),
      roundBank:state.roundBank, finalWager:(typeof state.finalWager==="number"?state.finalWager:null),
      qs:state.qs,
      phase:state.phase||"main", bonusEarned:state.bonusEarned||0,
      bonusBase:(typeof state.bonusBase==="number"?state.bonusBase:null),
      bonusDoubled:!!state.bonusDoubled, bonusIntro:!!state.bonusIntro,
      history:state.history.map(function(h){ return {status:h.status, yourAnswer:h.yourAnswer}; }),
      reveal:state.lastReveal||null,
      suddenDeath:!!state.suddenDeath, sdOut:!!state.suddenDeathOut,
      challenge:!!state.challenge, seed:state.seed||null, challengePayload:state.challengePayload||null,
      daily:!!state.daily, dailyDate:state.dailyDate||null,
      creator:!!state.creator, creatorKind:state.creatorKind||null
    }));
  }catch(e){ /* storage full or blocked — the game continues in memory */ }
}
function clearProgress(){
  var s=hsStore(); if(!s) return;
  try{ s.removeItem(PROG_KEY); }catch(e){}
}
function loadProgress(){
  var s=hsStore(); if(!s) return null;
  var raw; try{ raw=s.getItem(PROG_KEY); }catch(e){ return null; }
  if(!raw) return null;
  var d; try{ d=JSON.parse(raw); }catch(e){ return null; }
  if(!d || d.v!==1 || typeof d.mode!=="string" || !Array.isArray(d.qs) || !d.qs.length) return null;
  if(!isFinite(d.idx) || Math.floor(d.idx)!==d.idx || d.idx<0 || d.idx>=d.qs.length) return null;
  if(!isFinite(d.score) || !isFinite(d.streak)) return null;
  /* A restored score is clamped to the game's real range: no game
     can score below 0 or above a perfect 1,280, so a hand-edited
     save can never put an impossible score on the device board. */
  d.score=Math.max(0, Math.min(1280, d.score));
  if(d.finalWager!==null && d.finalWager!==undefined && !isFinite(d.finalWager)) return null;
  if(!Array.isArray(d.history) || (d.history.length!==d.idx && d.history.length!==d.idx+1)) return null;
  for(var i=0;i<d.qs.length;i++){
    var it=d.qs[i];
    if(!it || !it.data || typeof it.data.q!=="string" || !isFinite(it.pts)) return null;
    if(it.data.type==="mc"){ if(!Array.isArray(it.data.choices) || !isFinite(it.data.a)) return null; }
    else if(it.data.type==="typed"){ if(typeof it.data.answer!=="string") return null; }
    else return null;
  }
  for(var j=0;j<d.history.length;j++){
    var h=d.history[j];
    if(!h || (h.status!=="correct" && h.status!=="wrong" && h.status!=="pass")) return null;
  }
  return d;
}
function restoreProgress(){
  var d=loadProgress(); if(!d) return false;
  var idx=d.idx;
  /* The current question was already answered when the page went
     away, but its reveal note wasn't saved — step past it rather
     than letting it be answered (and scored) twice. */
  var steppedPast=false;
  if(d.history.length===idx+1 && !d.reveal){
    idx=d.history.length; steppedPast=true;
    if(idx>=d.qs.length){ clearProgress(); return false; }
  }
  /* RESUME-TIMEOUT (approved 2026-11-10): if the session ended
     with the current question LIVE — presented, clock running,
     still unanswered, so the history has no entry for it — that
     question is settled as a timeout the moment the game comes
     back (the hook at the end of renderQuestion fires the game's
     own timeout paths). Between-questions saves stay untouched:
     an answered question showing its reveal (history idx+1), the
     step-past case above (that next question was never
     presented), the Q20 wager picker (no wager locked yet, the
     question still hidden), and the bonus intro screen all
     resume exactly as before. Detection reads only fields the
     save has always carried — nothing new is stored, and older
     saves restore under the same fields they were written with. */
  var liveItem=d.qs[idx];
  var settleLive=!steppedPast && d.history.length===idx && !!liveItem
    && !(liveItem.kind==="bonus" && d.bonusIntro)
    && !(isJackpotMode(d.mode) && liveItem.kind==="finale" && liveItem.round===3
         && idx===d.qs.length-1 && typeof d.finalWager!=="number");
  state={
    /* The pace the game started with comes back with it — a
       resumed game never silently switches clocks. Saves written
       before the pace picker existed carry no pace and restore
       as Standard, which is what they were played at. */
    mode:d.mode, pace:paceKey(d.pace), qs:d.qs, idx:idx, score:d.score, streak:d.streak, bestStreak:d.bestStreak||0,
    timeUsed:(typeof d.timeUsed==="number" && isFinite(d.timeUsed) && d.timeUsed>0 ? d.timeUsed : 0),
    roundBank:d.roundBank||0, history:[], name:(typeof d.name==="string" && d.name) ? d.name : "Player",
    startedNameless:!!d.startedNameless, hsEntry:null, endedEarly:false,
    finalWager:(typeof d.finalWager==="number" ? d.finalWager : null),
    phase:(d.phase==="bonus" ? "bonus" : "main"),
    bonusEarned:(isFinite(d.bonusEarned) ? d.bonusEarned : 0),
    bonusBase:(typeof d.bonusBase==="number" ? d.bonusBase : null),
    bonusDoubled:!!d.bonusDoubled, bonusIntro:!!d.bonusIntro,
    lastReveal:(d.history.length===idx+1 ? (d.reveal||null) : null),
    settleRestoredTimeout:settleLive,
    suddenDeath:!!d.suddenDeath, suddenDeathOut:!!d.sdOut,
    challenge:!!d.challenge, seed:(typeof d.seed==="string" ? d.seed : null),
    challengePayload:(typeof d.challengePayload==="string" ? d.challengePayload : null),
    daily:!!d.daily, dailyDate:(typeof d.dailyDate==="string" ? d.dailyDate : null),
    /* A resumed creator game stays a creator game — practice
       only, never saved — exactly as it started. Saves written
       before creator access existed carry no flag and restore
       as ordinary games. */
    creator:!!d.creator, creatorKind:(typeof d.creatorKind==="string" ? d.creatorKind : null)
  };
  state.history=d.history.map(function(h, i){
    return {item:state.qs[i], status:h.status, yourAnswer:h.yourAnswer};
  });
  /* Keep the cover picker showing the pace this game is running
     at, so quitting back to the cover doesn't mislabel it. */
  setCoverPace(state.pace);
  show("screen-game");
  renderQuestion();
  prefetchGamePacks();
  return true;
}
/* Re-show the current question in its already-answered state after
   a resume: controls locked, the correct choice lit, the player's
   own pick marked, and the same reveal that was on screen before
   the reload — the player continues from the Next button, exactly
   where they were. */
function applyRestoredReveal(item){
  var rev=state.lastReveal; if(!rev) return;
  locked=true; stopTimer();
  var q=item.data;
  if(q.type==="mc"){
    var btns=$("qAnswerArea").querySelectorAll(".choice");
    btns.forEach(function(b){
      b.disabled=true;
      var ci=parseInt(b.getAttribute("data-ci"),10);
      if(ci===q.a) b.classList.add("correct");
      else if(rev.status!=="correct" && q.choices[ci]===rev.yourAnswer) b.classList.add("wrong");
      else b.classList.add("dim");
    });
  } else {
    var input=$("typedInput"); if(input){ input.disabled=true; if(rev.yourAnswer) input.value=rev.yourAnswer; }
    var sb=$("typedSubmit"); if(sb) sb.disabled=true;
    var pb=$("passBtn"); if(pb) pb.disabled=true;
  }
  sfxSilent=true;
  finishReveal(item, rev.status, rev.yourAnswer, rev.note);
  sfxSilent=false;
}

function $(id){ return document.getElementById(id); }
function loadGameCount(){
  if(gameCountCache!==null) return gameCountCache;
  gameCountCache=0;
  var s=hsStore(); if(!s) return gameCountCache;
  try{
    var n=parseInt(s.getItem(GAMECOUNT_KEY),10);
    if(isFinite(n) && n>0) gameCountCache=Math.floor(n);
  }catch(e){ /* unreadable store — count from zero this session */ }
  return gameCountCache;
}
/* Advance the games-started counter: called once per game, by
   startGame, before that game's questions are stamped. */
function bumpGameCount(){
  var n=loadGameCount()+1;
  gameCountCache=n;
  var s=hsStore(); if(!s) return n;
  try{ s.setItem(GAMECOUNT_KEY, String(n)); }catch(e){ /* full/blocked — memory copy still applies this session */ }
  return n;
}
function seenKeyOf(q){
  if(!q || typeof q.q!=="string") return "";
  var ans = q.type==="mc" ? (Array.isArray(q.choices) ? q.choices[q.a] : "") : (q.answer||"");
  /* The key is the question text plus its correct answer (plus the
     image path for picture questions, whose prompt text can repeat
     across items) — the same identity whichever mode deals the
     question, and the same for a Round 4 typed conversion, which
     keeps the original prompt, answer, and image. A typed
     conversion may append a form statement ("First and last
     name." / "Give the full answer.") to its prompt — see
     withTypedForm) — that is display wording, not identity, so it
     is stripped here to keep the converted question's key
     identical to its MC original's. */
  return norm(q.q.replace(/\s+(?:First and last name\.|Give the full answer\.)\s*$/i,""))+"||"+norm(ans)+"||"+(q.img||"");
}
function loadSeen(){
  if(seenSet) return seenSet;
  seenSet={};
  var s=hsStore(); if(!s) return seenSet;
  try{
    var raw=s.getItem(SEEN_KEY); if(!raw) return seenSet;
    var data=JSON.parse(raw);
    if(data && data.constructor===Array){
      /* Legacy shape (a plain list of keys, no dates): every entry
         migrates as long-ago — eligible again at once, and oldest
         in any least-recently-dealt fallback. */
      data.forEach(function(k){ if(typeof k==="string") seenSet[k]=SEEN_LONG_AGO; });
    } else if(data && typeof data==="object"){
      Object.keys(data).forEach(function(k){
        var v=data[k];
        if(typeof v==="number" && isFinite(v)) seenSet[k]=v;
      });
    }
  }catch(e){ /* unreadable store — start the cycle fresh */ }
  return seenSet;
}
/* The game index that last dealt this question, or -Infinity when
   no game ever dealt it (legacy entries read as SEEN_LONG_AGO). */
function lastDealtOf(q){
  var v=loadSeen()[seenKeyOf(q)];
  return (typeof v==="number" && isFinite(v)) ? v : -Infinity;
}
/* Is this question inside its 25-game cooldown for the game now
   being dealt (the next game index, loadGameCount()+1)? While a
   challenge deal is being built, every question counts as
   outside its cooldown: the deal must come out identical on the
   friend's device, whose seen store is different (see CHALLENGE
   DEALS). */
function isSeenQ(q){
  if(dealBypassSeen) return false;
  var last=lastDealtOf(q);
  if(last===-Infinity) return false;
  /* Strict boundary: the difference counts the stamping game
     itself, so a difference of exactly SEEN_COOLDOWN means only
     24 full games have been played since the dealing — the
     question is still cooling. It becomes eligible only when
     the difference exceeds SEEN_COOLDOWN, i.e. once 25 full
     games separate this deal from the last one. */
  return (loadGameCount()+1)-last <= SEEN_COOLDOWN;
}
/* The least-recently-dealt members of a list: the only fallback a
   dealer may use when everything in a pool is inside its
   cooldown, so a starved narrow pool reaches for its oldest
   questions, never its recent ones. */
function oldestOnly(list){
  var m=null;
  (list||[]).forEach(function(x){ var l=lastDealtOf(x); if(m===null || l<m) m=l; });
  if(m===null || m===-Infinity) return list;
  return list.filter(function(x){ return lastDealtOf(x)===m; });
}
/* ============ FACT TWINS IN THE FINALE POOLS (2026-11-13) ============
   Owner report: the gold chemical-symbol question "keeps coming
   up as a finale". Measurement (1,000 simulated Gauntlets through
   this dealer, harness, 2026-11-13): the per-question dealer and
   its 25-game cooldown are sound — zero cooldown violations, and
   every finale item dealt within noise of its pool-uniform rate.
   The repeat is FACT-level, not item-level: the gold/symbol fact
   is TWO finale questions in the same Q20 pool — "Which element
   has the chemical symbol 'Au'?" (answer: gold) and "Gold is
   written with which chemical symbol?" (answer: Au) — each with
   its own seen key, so the fact dealt 13 times in 1,000 games
   against ~5 for a single-item fact, and either item could deal
   the game right after its twin. The fix is at the fact level:
   typed questions that state the same fact in reverse directions
   are TWINS, and the seen memory treats them as one question.
   Twins are detected structurally, not hand-listed: item A's
   answer appears in item B's prompt AND item B's answer appears
   in item A's prompt (word-boundary matches on the normalised
   text) — the signature of a reversed pair ("What is the capital
   of France?" / "Paris is the capital of which country?" pairs
   the same way). The same fact duplicated in the SAME direction
   (two wordings, one answer — the silver symbol pair) pairs on a
   shared answer, topic word, and subject word instead. When a question is dealt — as a finale or
   anywhere else, in any mode that stamps — its twins are
   stamped with it, so neither direction can re-deal in any slot
   until the shared cooldown passes; and inside one Gauntlet a
   finale whose twin was already dealt in that game is held back
   (see buildGauntlet). Standing check for the audit loop: in
   simulated Gauntlets, no finale FACT (twins counted together)
   may appear materially above its pool-uniform rate. */
var FINALE_TWIN_MAP=null;
function finaleTwinMap(){
  if(FINALE_TWIN_MAP) return FINALE_TWIN_MAP;
  FINALE_TWIN_MAP={};
  if(typeof TYPED==="undefined") return FINALE_TWIN_MAP;
  var items=[];
  ["easy","medium","hard","vhard"].forEach(function(t){
    (TYPED[t]||[]).forEach(function(q){ if(q && q.type==="typed") items.push(q); });
  });
  function mentions(prompt, ans){
    var a=norm(ans);
    if(!a || a.length<2) return false;
    return (" "+norm(prompt)+" ").indexOf(" "+a+" ")>-1;
  }
  /* The same fact can also be duplicated in the SAME direction:
     two wordings of one question with the same answer ("What is
     the chemical symbol for silver?" / "In chemistry, the symbol
     for silver is what?"). Those pair when they share an answer,
     a topic word (symbol / capital), and a subject word — the
     thing both prompts are about. Generic wording is excluded
     from subject words so two different facts that merely share
     a format never pair. */
  var TWIN_GENERIC={what:1,which:1,name:1,type:1,symbol:1,capital:1,chemical:1,element:1,written:1,country:1,city:1,please:1,answer:1,question:1,known:1,called:1,that:1,this:1,with:1,from:1,have:1,does:1,were:1,was:1,are:1,the:1,for:1,its:1};
  function subjectTokens(p){
    return norm(p).split(" ").filter(function(w){ return w.length>=4 && !TWIN_GENERIC[w]; });
  }
  function pairUp(A, B){
    var ka=seenKeyOf(A), kb=seenKeyOf(B);
    if(!ka || !kb || ka===kb) return;
    (FINALE_TWIN_MAP[ka]=FINALE_TWIN_MAP[ka]||[]).push(kb);
    (FINALE_TWIN_MAP[kb]=FINALE_TWIN_MAP[kb]||[]).push(ka);
  }
  for(var i=0;i<items.length;i++){
    for(var j=i+1;j<items.length;j++){
      var A=items[i], B=items[j];
      if(norm(A.answer)===norm(B.answer)){
        var na=norm(A.q), nb=norm(B.q);
        var sameTopic=(/\bsymbol\b/.test(na) && /\bsymbol\b/.test(nb)) || (/\bcapital\b/.test(na) && /\bcapital\b/.test(nb));
        if(!sameTopic) continue;
        var ta=subjectTokens(A.q), shared=false;
        for(var t=0;t<ta.length;t++){ if((" "+nb+" ").indexOf(" "+ta[t]+" ")>-1){ shared=true; break; } }
        if(shared) pairUp(A, B);
        continue;
      }
      if(mentions(A.q, B.answer) && mentions(B.q, A.answer)) pairUp(A, B);
    }
  }
  return FINALE_TWIN_MAP;
}
/* Is this candidate's fact twin already dealt in this game? */
function finaleTwinBlocked(t, used){
  var tw=finaleTwinMap()[seenKeyOf(t)];
  if(!tw || !tw.length) return false;
  for(var i=0;i<(used||[]).length;i++){
    if(tw.indexOf(seenKeyOf(used[i]))>-1) return true;
  }
  return false;
}
function markGameSeen(questions){
  var set=loadSeen(), gi=loadGameCount(), changed=false;
  var twins=finaleTwinMap();
  function stamp(k){
    /* Every deal re-stamps: a question dealt again restarts its
       cooldown from this game. A stamp never moves BACKWARD —
       a Daily Gauntlet stamps with the current counter (it does
       not advance it, see startGame), and an older stamp must
       not shorten a cooldown a later game already started. */
    if(!k) return;
    if(typeof set[k]!=="number" || set[k]<gi){ set[k]=gi; changed=true; }
  }
  (questions||[]).forEach(function(it){
    var q=it && it.data; if(!q) return;
    var k=seenKeyOf(q);
    if(!k) return;
    stamp(k);
    /* Fact twins share the stamp (see FACT TWINS above): dealing
       one direction of a fact cools down the other with it. */
    var tw=twins[k];
    if(tw) tw.forEach(stamp);
  });
  if(!changed) return;
  var s=hsStore(); if(!s) return;
  try{ s.setItem(SEEN_KEY, JSON.stringify(set)); }catch(e){ /* full/blocked — memory copy still applies this session */ }
}
/* Deal n questions from a pool, cooldown-first: the questions
   outside their cooldown in shuffled order, then — only if the
   pool has fewer than n of those left — the cooling ones,
   least-recently-dealt first, so the pool cycles instead of ever
   dealing short or repeating inside the round. Used by the
   practice dealer; the Gauntlet and Mixed Bag get the same rule
   inside pick(). */
function seenFirstDeal(pool, n){
  var fresh=[], seen=[];
  shuffle(pool||[]).forEach(function(q){ (isSeenQ(q) ? seen : fresh).push(q); });
  seen.sort(function(a,b){ return lastDealtOf(a)-lastDealtOf(b); });
  return fresh.concat(seen).slice(0, n);
}
  function practiceStampOf(poolId, q){
    var v=loadSeen()[PRACTICE_PREFIX+poolId+"::"+seenKeyOf(q)];
    return (typeof v==="number" && isFinite(v) && v>0) ? v : 0;
  }
  function markPracticeDealt(poolId, questions){
    var set=loadSeen();
    var counter=set[PRACTICE_COUNTER_KEY];
    if(typeof counter!=="number" || !isFinite(counter) || counter<0) counter=0;
    var changed=false;
    (questions||[]).forEach(function(q){
      if(!q) return;
      counter++;
      set[PRACTICE_PREFIX+poolId+"::"+seenKeyOf(q)]=counter;
      changed=true;
    });
    if(!changed) return;
    set[PRACTICE_COUNTER_KEY]=counter;
    var s=hsStore(); if(!s) return;
    try{ s.setItem(SEEN_KEY, JSON.stringify(set)); }catch(e){ /* full/blocked — memory copy still applies this session */ }
  }
  /* Deal n questions from a practice pool in least-recently-dealt
     order: never-dealt questions first (shuffled among themselves,
     so a fresh pool's first cycle is not just the bank read top to
     bottom), then the dealt ones oldest-stamp first. The pool is
     de-duplicated by question identity first, so a round can never
     contain the same question twice. */
  function practiceDeal(poolId, pool, n){
    var seenKeys={}, items=[];
    (pool||[]).forEach(function(q){
      var k=seenKeyOf(q);
      if(k && !seenKeys[k]){ seenKeys[k]=1; items.push(q); }
    });
    var groups={}, stamps=[];
    items.forEach(function(q){
      var s=practiceStampOf(poolId, q);
      if(!groups[s]){ groups[s]=[]; stamps.push(s); }
      groups[s].push(q);
    });
    stamps.sort(function(a,b){ return a-b; });
    var ordered=[];
    stamps.forEach(function(s){ ordered=ordered.concat(shuffle(groups[s])); });
    return ordered.slice(0, n);
  }

function shuffle(arr){
  var a=arr.slice();
  for(var i=a.length-1;i>0;i--){ var j=Math.floor(rand()*(i+1)); var t=a[i]; a[i]=a[j]; a[j]=t; }
  return a;
}
function pick(arr, used){
  var pool=arr.filter(function(x){ return used.indexOf(x)===-1; });
  if(!pool.length) pool=arr.slice();
  /* Cooldown first: while this pool still has questions outside
     their 25-game cooldown, the pick comes from those. Only when
     a pool is entirely inside its cooldown — a narrow pool that
     would otherwise deal short — does the pick fall back, and
     then only to the pool's least-recently-dealt questions. The
     rule is per pick, so a small pool cycling never forces a
     repeat out of a big one. */
  var fresh=pool.filter(function(x){ return !isSeenQ(x); });
  if(fresh.length) pool=fresh;
  else if(pool.length) pool=oldestOnly(pool);
  /* Practice Mixed Bag only (practiceLruPool is set just for the
     duration of a Mixed Bag deal, and is null for every Gauntlet,
     daily, challenge, and bonus deal): within the candidate set
     narrowed exactly as above, the pick is the pool's
     least-recently-dealt question in that practice pool (a random
     one among ties at the oldest stamp) — so Mixed Bag cycles its
     pool like every other practice round instead of re-shuffling. */
  if(practiceLruPool && pool.length>1){
    var minStamp=null;
    pool.forEach(function(x){ var s=practiceStampOf(practiceLruPool, x); if(minStamp===null || s<minStamp) minStamp=s; });
    var lruPool=pool.filter(function(x){ return practiceStampOf(practiceLruPool, x)===minStamp; });
    if(lruPool.length) pool=lruPool;
  }
  var item=pool[Math.floor(rand()*pool.length)];
  used.push(item); return item;
}
function show(id){
  ["screen-cover","screen-game","screen-results"].forEach(function(s){ $(s).classList.add("hidden"); });
  /* Any cover overlay (How to play / Practice / Back up) closes
     silently on a screen change, so starting a game from the
     Practice list — or coming back to the cover afterwards —
     always lands clean. */
  ["howToPlay","practicePanel","backupPanel"].forEach(function(oid){ var o=$(oid); if(o) o.classList.add("hidden"); });
  document.body.classList.remove("overlay-open");
  ["howToPlayBtn","practiceBtn","backupBtn"].forEach(function(bid){ var b=$(bid); if(b) b.setAttribute("aria-expanded","false"); });
  $(id).classList.remove("hidden");
  /* Music follows the screens: the underscore belongs to the
     game screen alone, so it starts when a game does and stops
     on the cover and the results screen. */
  musicGameWanted = (id==="screen-game");
  musicSync();
  window.scrollTo(0,0);
}
function stopTimer(){ timerGen++; if(timerId){ clearInterval(timerId); timerId=null; } musicSetTension(false); }
function startTimer(seconds, onTimeout){
  stopTimer(); timeTotal=seconds; timeLeft=seconds; renderTimer();
  timerTimeoutFn=onTimeout;
  qClockAllotted=seconds; qClockSettled=false;
  lastTickSec=99;
  var gen=timerGen;
  timerId=setInterval(function(){
    if(gen!==timerGen) return; /* stale clock — its question is settled or superseded */
    timeLeft-=0.1; renderTimer();
    /* Countdown tick: one short tick per whole second through the
       last 5 seconds of the clock. The same window fades in the
       soft tension pulse under the music (musicSetTension) — the
       tick and the pulse are one mechanism, and stopTimer clears
       both the moment the question resolves. */
    if(timeLeft>0 && timeLeft<=5.05){
      musicSetTension(true);
      var cs=Math.ceil(timeLeft);
      if(cs!==lastTickSec){ lastTickSec=cs; sfxTick(); }
    }
    if(timeLeft<=0){ stopTimer(); onTimeout(); }
  },100);
}
/* Game-show reskin (visual only): the countdown ring beside the
   pill sweeps the fraction of the clock that is left. It reads the
   same timeLeft / timeTotal the pill text uses and changes no
   timing, judging, or timeout behaviour. */
function syncTimerRing(frac, low){
  var fg=$("timerRingFg"); if(!fg) return;
  var f=Math.max(0,Math.min(1,frac||0));
  fg.style.strokeDashoffset=(169.65*(1-f)).toFixed(1);
  fg.style.stroke=low ? "#ff4757" : "#2ee6c8";
}
function renderTimer(){
  /* The clock is a countdown pill in the single progress line —
     text seconds only, never a second bar. The reskin's ring is a
     decorative sweep of the same values, driven from here. */
  var pill=$("timerPill");
  if(pill){
    pill.textContent="⏱ "+Math.max(0,Math.ceil(timeLeft));
    pill.classList.toggle("low", timeLeft<=5);
  }
  syncTimerRing((typeof timeTotal==="number" && timeTotal>0) ? timeLeft/timeTotal : 0, timeLeft<=5);
}
function audioCtx(){
  if(!actx){
    var AC=window.AudioContext||window.webkitAudioContext;
    if(!AC) return null;
    try{ actx=new AC(); }catch(e){ return null; }
  }
  /* Any state that is not "running" gets a resume attempt: iOS
     Safari parks a fresh context in "suspended" and, after an
     interruption (a call, a tab switch), in its own non-standard
     "interrupted" state — testing only for "suspended" misses it.
     A resume only counts when it is asked for inside a real tap,
     which is exactly where this gets called from (the gesture
     listeners below, the answer taps, the sound toggles). */
  if(actx.state!=="running"){ try{ actx.resume(); }catch(e){} }
  return actx;
}
/* The iOS unlock prime. Creating and resuming the context inside a
   tap is NOT enough on iPad/iPhone Safari: the context can sit
   "suspended" indefinitely, silently swallowing every scheduled
   tone (they queue against a clock that never advances), unless a
   sound source is actually STARTED during that same tap. So every
   unlocking tap also starts one silent buffer — inaudible, but it
   is the step that flips the context to "running" on iOS. */
function primeAudio(){
  var ctx=audioCtx(); if(!ctx) return;
  try{
    var buf=ctx.createBuffer(1, 1, ctx.sampleRate||22050);
    var src=ctx.createBufferSource();
    src.buffer=buf; src.connect(ctx.destination); src.start(0);
  }catch(e){ /* best effort — the resume in audioCtx may suffice */ }
}
/* One synthesized tone: frequency, start delay, duration, wave
   shape, volume, and an optional glide to a second frequency. */
function sfxTone(freq, delay, dur, type, vol, slideTo){
  if(soundMuted) return;
  var ctx=audioCtx(); if(!ctx) return;
  try{
    var t0=ctx.currentTime+(delay||0);
    var o=ctx.createOscillator(), g=ctx.createGain();
    o.type=type||"sine";
    o.frequency.setValueAtTime(freq, t0);
    if(slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t0+dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol||0.16, t0+0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t0+dur);
    o.connect(g); g.connect(ctx.destination);
    o.start(t0); o.stop(t0+dur+0.05);
  }catch(e){ /* audio is decoration — never break the game for it */ }
}
function sfxCorrect(){ /* pleasant two-note chime */
  sfxTone(880, 0, 0.16, "sine", 0.18);
  sfxTone(1318.5, 0.09, 0.3, "sine", 0.18);
}
function sfxWrong(){ /* low buzz */
  sfxTone(150, 0, 0.34, "sawtooth", 0.10, 105);
  sfxTone(75, 0, 0.34, "square", 0.05, 60);
}
function sfxWagerWin(){ /* rising arpeggio */
  sfxTone(523.25, 0, 0.14, "triangle", 0.2);
  sfxTone(659.25, 0.09, 0.14, "triangle", 0.2);
  sfxTone(783.99, 0.18, 0.14, "triangle", 0.2);
  sfxTone(1046.5, 0.27, 0.34, "triangle", 0.22);
}
function sfxWagerLose(){ /* descending slide of notes */
  sfxTone(392, 0, 0.16, "triangle", 0.18);
  sfxTone(329.63, 0.13, 0.16, "triangle", 0.18);
  sfxTone(261.63, 0.26, 0.16, "triangle", 0.18);
  sfxTone(196, 0.39, 0.36, "triangle", 0.18, 164.8);
}
function sfxTick(){ sfxTone(1050, 0, 0.05, "square", 0.05); }
function sfxFanfare(){ /* perfect game / Legend unlock flourish */
  sfxTone(523.25, 0, 0.13, "triangle", 0.2);
  sfxTone(523.25, 0.14, 0.13, "triangle", 0.2);
  sfxTone(523.25, 0.28, 0.13, "triangle", 0.2);
  sfxTone(659.25, 0.42, 0.2, "triangle", 0.22);
  sfxTone(783.99, 0.62, 0.2, "triangle", 0.22);
  sfxTone(1046.5, 0.82, 0.55, "triangle", 0.24);
  sfxTone(1318.5, 0.82, 0.55, "sine", 0.12);
}
function updateSoundBtns(){
  var cover=$("soundBtn"), game=$("soundBtnGame");
  if(cover){
    cover.textContent = soundMuted ? "🔇 Sound: Off" : "🔊 Sound: On";
    cover.setAttribute("aria-pressed", String(soundMuted));
    cover.title = soundMuted ? "Sound is off — tap to turn it back on" : "Sound is on — tap to silence the game sounds";
  }
  if(game){
    game.textContent = soundMuted ? "🔇" : "🔊";
    game.setAttribute("aria-pressed", String(soundMuted));
    var lbl = soundMuted ? "Sound off — tap to turn sound on" : "Sound on — tap to mute";
    game.setAttribute("aria-label", lbl); game.title=lbl;
  }
}
function setSoundMuted(m){
  soundMuted=!!m;
  var s=hsStore(); if(s){ try{ s.setItem(SOUND_KEY, soundMuted?"off":"on"); }catch(e){ /* blocked — applies this session only */ } }
  updateSoundBtns();
  /* Unmuting is itself a tap: unlock right away, and play the
     two-note chime on the spot — turning sound on IS the sound
     test, so the player hears immediately that sound works,
     without having to answer a question first. */
  if(!soundMuted){ primeAudio(); sfxCorrect(); }
  musicSync();
}

/* ================= MUSIC — SYNTHESIZED LOOPS (2026-11-12) =================
   Two gentle Web Audio loops join the one-shot effects above,
   synthesized the same way — no audio files. A soft game-show
   underscore (marimba-style plucked melody, light bass, soft
   shaker; C major, unhurried) runs under the questions for the
   whole game — every mode that plays on the game screen, Sudden
   Death, Daily, Legend, and the bonus round included — and stops
   on the results screen. A separate bouncier pizzicato loop
   plays only while the Trophy Room (the profile panel's avatar
   collection) is open. Both loops are mixed well below the
   answer chimes (which peak at 0.18–0.24; the music's loudest
   voice peaks at 0.05) so they never compete. The existing
   Sound setting governs everything — muted means no music and
   no effects — and there are no new controls. A lookahead
   scheduler keeps each loop seamless. musicSync() is the one
   state machine, driven by the screen changes (show), the
   Trophy Room's open and close (openOverlay / closeOverlay),
   the mute toggle (setSoundMuted), and tab visibility: hidden
   silences the music, and returning resumes it only when what
   it belongs to is still on screen — the same rule the game's
   own clock follows. */
var musicGameWanted=false, musicTrophyWanted=false;
var musTimer=null, musMode=null, musStepIdx=0, musNextTime=0, musBus=null, musNoiseBuf=null;
var tensionNodes=null;
function musFreq(midi){ return 440*Math.pow(2,(midi-69)/12); }
function musBusNode(ctx){
  if(!musBus){ musBus=ctx.createGain(); musBus.gain.value=0; musBus.connect(ctx.destination); }
  return musBus;
}
function musNoise(ctx){
  if(musNoiseBuf) return musNoiseBuf;
  var len=Math.floor(ctx.sampleRate*0.5), buf=ctx.createBuffer(1, len, ctx.sampleRate), d=buf.getChannelData(0);
  for(var i=0;i<len;i++) d[i]=Math.random()*2-1;
  musNoiseBuf=buf; return buf;
}
/* Marimba-style pluck: a sine fundamental with a faint fourth
   harmonic, fast attack, short exponential decay. */
function musPluck(ctx, t, freq, vol, dur){
  try{
    var g=ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t+0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t+dur);
    var o=ctx.createOscillator(); o.type="sine"; o.frequency.setValueAtTime(freq, t);
    var o2=ctx.createOscillator(); o2.type="sine"; o2.frequency.setValueAtTime(freq*4, t);
    var g2=ctx.createGain(); g2.gain.value=0.18;
    o.connect(g); o2.connect(g2); g2.connect(g); g.connect(musBusNode(ctx));
    o.start(t); o.stop(t+dur+0.05); o2.start(t); o2.stop(t+dur+0.05);
  }catch(e){ /* audio is decoration — never break the game for it */ }
}
/* Pizzicato pluck for the Trophy Room: shorter and brighter. */
function musPizz(ctx, t, freq, vol){
  try{
    var g=ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t+0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t+0.14);
    var o=ctx.createOscillator(); o.type="triangle"; o.frequency.setValueAtTime(freq, t);
    o.connect(g); g.connect(musBusNode(ctx));
    o.start(t); o.stop(t+0.2);
  }catch(e){ /* audio is decoration — never break the game for it */ }
}
function musBass(ctx, t, freq, vol, dur){
  try{
    var g=ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t+0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t+dur);
    var o=ctx.createOscillator(); o.type="sine"; o.frequency.setValueAtTime(freq, t);
    var o2=ctx.createOscillator(); o2.type="triangle"; o2.frequency.setValueAtTime(freq, t);
    var g2=ctx.createGain(); g2.gain.value=0.25;
    o.connect(g); o2.connect(g2); g2.connect(g); g.connect(musBusNode(ctx));
    o.start(t); o.stop(t+dur+0.05); o2.start(t); o2.stop(t+dur+0.05);
  }catch(e){ /* audio is decoration — never break the game for it */ }
}
function musShaker(ctx, t, vol){
  try{
    var src=ctx.createBufferSource(); src.buffer=musNoise(ctx);
    var f=ctx.createBiquadFilter(); f.type="highpass"; f.frequency.value=6500;
    var g=ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t+0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t+0.055);
    src.connect(f); f.connect(g); g.connect(musBusNode(ctx));
    src.start(t); src.stop(t+0.09);
  }catch(e){ /* audio is decoration — never break the game for it */ }
}
/* The two loops as eighth-note step tables (MIDI notes, 0 =
   rest, 32 steps each). Gameplay: C major I–vi–IV–V, one chord
   per bar, a gentle plucked melody over soft bass, a quiet
   chord-tone harmony pluck, and shaker on the off-steps.
   Trophy: F major, a hopping pizzicato melody and bass. */
var MUS_LOOPS={
  game:{ bpm:92, steps:32,
    mel:[76,0,79,0,81,0,79,0, 76,0,81,0,84,0,81,0, 81,0,84,0,81,0,77,0, 79,0,83,0,86,0,83,0],
    bass:[48,0,0,0,55,0,0,0, 45,0,0,0,52,0,0,0, 41,0,0,0,48,0,0,0, 43,0,0,0,50,0,0,0],
    harm:[60,0,0,0,64,0,0,0, 57,0,0,0,60,0,0,0, 53,0,0,0,57,0,0,0, 55,0,0,0,59,0,0,0] },
  trophy:{ bpm:126, steps:32,
    mel:[77,0,81,0,84,0,81,0, 82,0,81,0,79,0,81,0, 77,0,81,0,84,0,88,0, 86,0,84,0,81,0,79,0],
    bass:[41,0,0,48,0,0,41,0, 46,0,0,50,0,0,46,0, 41,0,0,48,0,0,41,0, 48,0,0,43,0,0,48,0],
    harm:[0,0,65,0,0,0,65,0, 0,0,65,0,0,0,65,0, 0,0,65,0,0,0,65,0, 0,0,67,0,0,0,67,0] }
};
function musStep(mode, step, t){
  var ctx=actx; if(!ctx) return;
  var L=MUS_LOOPS[mode]; if(!L) return;
  var m=L.mel[step];
  if(m){ if(mode==="trophy") musPizz(ctx, t, musFreq(m), 0.055); else musPluck(ctx, t, musFreq(m), 0.05, 0.3); }
  var b=L.bass[step];
  if(b) musBass(ctx, t, musFreq(b), 0.05, mode==="trophy"?0.22:0.55);
  var h=L.harm[step];
  if(h){ if(mode==="trophy") musPizz(ctx, t, musFreq(h), 0.028); else musPluck(ctx, t, musFreq(h), 0.028, 0.25); }
  if(mode==="game" && step%2===0) musShaker(ctx, t, step%8===4?0.014:0.009);
}
function musSchedulerTick(){
  var ctx=actx; if(!ctx || ctx.state!=="running") return;
  var L=MUS_LOOPS[musMode]; if(!L) return;
  /* A suspended context (before the first tap, or after an iOS
     interruption) freezes currentTime; when it resumes, drop
     any stale schedule point and restart from just ahead. */
  if(musNextTime < ctx.currentTime-0.25) musNextTime=ctx.currentTime+0.05;
  var spb=60/L.bpm/2;
  while(musNextTime < ctx.currentTime+0.35){
    musStep(musMode, musStepIdx, musNextTime);
    musNextTime+=spb;
    musStepIdx=(musStepIdx+1)%L.steps;
  }
}
function musStart(mode){
  if(musTimer && musMode===mode) return;
  musStop();
  if(soundMuted) return;
  var ctx=audioCtx(); if(!ctx) return;
  musMode=mode; musStepIdx=0; musNextTime=ctx.currentTime+0.06;
  var bus=musBusNode(ctx);
  try{
    bus.gain.cancelScheduledValues(ctx.currentTime);
    bus.gain.setTargetAtTime(0.9, ctx.currentTime, 0.12);
  }catch(e){}
  musTimer=setInterval(musSchedulerTick, 120);
}
function musStop(){
  if(musTimer){ clearInterval(musTimer); musTimer=null; }
  musMode=null;
  if(actx && musBus){
    try{
      musBus.gain.cancelScheduledValues(actx.currentTime);
      musBus.gain.setTargetAtTime(0.0001, actx.currentTime, 0.05);
    }catch(e){}
  }
}
/* The running-out-of-time layer: in the last 5 seconds of a
   question clock, the existing per-second tick gains a soft,
   slow pulse under the music — the system's one moment of
   tension, and only at the end of the countdown. startTimer's
   countdown turns it on inside the same last-5-seconds window
   the tick already uses; stopTimer — called the moment any
   question resolves, by answer, pass, wager lock, or timeout —
   turns it off. One mechanism, driven from the timer itself. */
function musicSetTension(on){
  if(on){
    if(tensionNodes || soundMuted) return;
    var ctx=audioCtx(); if(!ctx) return;
    try{
      var g=ctx.createGain();
      g.gain.setValueAtTime(0.0001, ctx.currentTime);
      g.gain.setTargetAtTime(0.05, ctx.currentTime, 0.35);
      var o=ctx.createOscillator(); o.type="sine"; o.frequency.setValueAtTime(98, ctx.currentTime);
      var lfo=ctx.createOscillator(); lfo.type="sine"; lfo.frequency.setValueAtTime(2, ctx.currentTime);
      var lg=ctx.createGain(); lg.gain.value=0.022;
      lfo.connect(lg); lg.connect(g.gain);
      o.connect(g); g.connect(ctx.destination);
      o.start(); lfo.start();
      tensionNodes={g:g, o:o, lfo:lfo};
    }catch(e){ tensionNodes=null; }
  }else{
    if(!tensionNodes) return;
    var tn=tensionNodes; tensionNodes=null;
    if(!actx) return;
    try{
      tn.g.gain.cancelScheduledValues(actx.currentTime);
      tn.g.gain.setTargetAtTime(0.0001, actx.currentTime, 0.06);
      var stopAt=actx.currentTime+0.3;
      tn.o.stop(stopAt); tn.lfo.stop(stopAt);
    }catch(e){}
  }
}
function musicSync(){
  var wantGame=musicGameWanted && !musicTrophyWanted;
  var wantTrophy=musicTrophyWanted;
  if(soundMuted || document.hidden){ wantGame=false; wantTrophy=false; }
  if(wantTrophy) musStart("trophy");
  else if(wantGame) musStart("game");
  else { musStop(); musicSetTension(false); }
}
document.addEventListener("visibilitychange", function(){ musicSync(); }, false);
function playerName(){
  var v=$("playerName").value.trim();
  return v||"Player";
}

/* Every question shows a category pill while it is played, so the
   player always knows what kind of answer is being asked for. Pools
   whose questions were authored without a category are stamped here:
   the classic text trivia and the typed finales are General
   Knowledge, and the capital-city pools are Capitals. (Picture
   questions already carry their picture type — Famous Faces,
   Landmarks, World Flags, Map Shapes, Paintings, Movie Stills — the
   DJ and LeAnn collections carry their labels, and the category
   banks carry their bank name.) */
function stampCat(pool, cat){ pool.forEach(function(q){ if(q && !q.cat) q.cat=cat; }); }

/* ================= CHOICE-DEPENDENT STEMS STAY MULTIPLE-CHOICE =================
   Some stems only make sense with the choices on screen — "Which of
   these is a chemical compound?" has many correct answers in the
   abstract (water, salt, glucose…), so exactly one hidden answer can
   be judged. A typed question must be self-contained with a unique
   correct answer, so a choice-dependent stem must never be converted
   to typed: not in Round 4 (Q16–Q20), and not anywhere else a typed
   presentation is built. Such questions stay in the multiple-choice
   rounds, where their choices are shown and the question is fair.
   choiceDependentStem is the detector; typedDealReplacement swaps a
   flagged Round 4 pick for an unused, self-contained question from
   the SAME pool, so the category mix and the geography cap are
   exactly as dealt. (Native typed questions — the TYPED finale pools
   — are authored self-contained and are not touched by this.) */
function choiceDependentStem(text){
  if(typeof text!=="string") return false;
  return /\bwhich of (these|those|the following|the options|the choices)\b/i.test(text)
      || /\bwhich one of (these|those|the following)\b/i.test(text)
      || /\ball of the following\b/i.test(text)
      || /\bwhich is not\b/i.test(text);
}
/* ================= ANSWER-LEAKING PROMPTS STAY MULTIPLE-CHOICE =================
   The same fairness rule covers a prompt that prints its own answer:
   "How many moons does Jupiter have … (95)?" hands a typed player the
   answer to copy, for free strict-Round-4 points. A prompt leaks when
   the answer itself appears in it — the full answer as a word sequence
   (a DJ clue that names its answer, a self-titled-album question), or,
   for a purely numeric answer, the same number printed anywhere in the
   prompt. Leaking questions are never converted to typed; they stay in
   the multiple-choice rounds, where the answer sits among its choices
   by design. (The one authored Jupiter question was also fixed at the
   source — date-locked to its verified February 2023 snapshot, answer
   still 95 — so the pools scan clean; this guard keeps any future or
   sheet-imported leak out of typed dealing. Native typed questions are
   authored for typing and are not touched by this.) */
function promptLeaksAnswer(q){
  if(!q || typeof q.q!=="string") return false;
  var ans = q.type==="typed" ? q.answer : (Array.isArray(q.choices) ? q.choices[q.a] : q.answer);
  if(typeof ans!=="string" || !ans.trim()) return false;
  if(/^\d[\d,\.]*$/.test(ans.trim())){
    var target=parseFloat(ans.replace(/,/g,""));
    var nums=q.q.match(/\d[\d,]*\.?\d*/g)||[];
    for(var n=0;n<nums.length;n++){ if(parseFloat(nums[n].replace(/,/g,""))===target) return true; }
    return false;
  }
  var pToks=q.q.toLowerCase().replace(/['\u2019]/g,"").match(/[a-z0-9]+/g)||[];
  var aToks=ans.toLowerCase().replace(/['\u2019]/g,"").match(/[a-z0-9]+/g)||[];
  if(!aToks.length) return false;
  if(aToks.length===1 && aToks[0].length<3) return false;
  for(var i=0;i+aToks.length<=pToks.length;i++){
    var ok=true;
    for(var j=0;j<aToks.length;j++){ if(pToks[i+j]!==aToks[j]){ ok=false; break; } }
    if(ok) return true;
  }
  return false;
}
/* ============ TAUTOLOGY PROMPTS NEVER DEAL ============
   A stricter class than the leak above, with a stricter
   disposition. promptLeaksAnswer keeps a question multiple-choice:
   fair enough when the answer sits among its choices. But a prompt
   that CONTAINS its answer — in full, or as the very initials that
   are the answer — is not a question at all: the sheet row
   ("JT picture", "JT") dealt Joe Lewis / einstein / roosevelt / JT
   and paid +20 for copying two letters out of the clue. There is
   nothing to rewrite (no fuller clue exists in the sheet, and none
   may be invented), so the disposition is the subjectless one:
   excluded from ALL dealing — multiple choice AND typed, Gauntlet
   AND practice (q.noDeal) — while staying in its bank, undeleted
   and unrewritten. (This version covers the person through Famous
   Faces instead: Justin Timberlake is already a face there.)

   The detector is promptLeaksAnswer plus the one case that
   function deliberately skips: a single-token answer of two
   characters. promptLeaksAnswer ignores those because a two-letter
   token is usually a coincidence of wording; when the token IS the
   whole answer and it stands in the prompt as its own token, it is
   the JT shape exactly. The audit's other "initials" hits are a
   different, legitimate shape — acronym-expansion questions
   ("CRM stands for what?", the sheet's HVAC / DNS / ARDS clues):
   the prompt holds the abbreviation being asked about, not the
   answer, and the expansion still has to be known. Those are not
   tautologies and are not touched. */
function promptContainsAnswer(q){
  if(!q || typeof q.q!=="string") return false;
  /* Owner-approved exception (2026-11-12), exactly one question:
     the Parr question's prompt names the "parr marks" because that
     is the scientific name of the bars the clue describes — the
     wording was approved with the term in it, and the question is
     unaskable without it. It is exempt from the noDeal tautology
     disposition ONLY (exact prompt match; any other wording or
     question is untouched). promptLeaksAnswer still flags it, so
     it stays multiple-choice-only and is never converted to a
     typed question, where the prompt would give the answer away. */
  if(q.q==="What is a young salmon with dark vertical bars (parr marks) along its sides, living in freshwater streams, called?") return false;
  if(promptLeaksAnswer(q)) return true;
  var ans = q.type==="typed" ? q.answer : (Array.isArray(q.choices) ? q.choices[q.a] : q.answer);
  if(typeof ans!=="string" || !ans.trim()) return false;
  var pToks=q.q.toLowerCase().replace(/['\u2019]/g,"").match(/[a-z0-9]+/g)||[];
  var aToks=ans.toLowerCase().replace(/['\u2019]/g,"").match(/[a-z0-9]+/g)||[];
  if(aToks.length!==1 || aToks[0].length!==2) return false;
  return pToks.indexOf(aToks[0])>-1;
}
/* ============ VAGUE ASSOCIATION PROMPTS STAY MULTIPLE-CHOICE ============
   The same unique-answer rule covers association prompts: "what goes
   with Mickey Mouse" has no single correct answer — Disney World,
   Walt Disney, and Minnie Mouse are all defensible — so it can only
   be asked with its choices on screen, where the four options pin
   down which association is meant. The Trivia Sheet's fragment clues are
   this class by construction: djQuestionText frames every bare clue
   fragment as 'Trivia Clue: "…" — what answer goes with this clue?',
   and a fragment never determines one unique typed answer (a place,
   a person, a character, and a brand can all "go with" the same
   fragment). Explicit association wording anywhere else — "goes
   with", "associated with", "pairs with", … — is flagged the same
   way. Flagged questions are never converted to typed: not in Round 4
   (Q16–Q20) and not anywhere else a typed presentation is built. They
   stay fully playable in the multiple-choice rounds, unchanged — not
   deleted, and never rewritten into a different question to force
   them into typed dealing. vagueAssociationPrompt is the detector;
   the load-time pass below stamps every flagged pool item mcOnly,
   and the deal-time checks in buildGauntlet / typedDealReplacement
   test both the stamp and the detector, so no flagged question can
   slip back into a typed deal. (Native typed questions — the TYPED
   finale pools — are authored as complete questions with one answer
   and carry no association framing; they are not touched by this.) */
function vagueAssociationPrompt(text){
  if(typeof text!=="string") return false;
  var t=text.trim();
  if(/^Trivia Clue:/i.test(t)) return true;
  return /\bgoes with\b/i.test(t)
      || /\bgoes (along|together) with\b/i.test(t)
      || /\bassociat\w+ with\b/i.test(t)
      || /\bpairs? with\b/i.test(t)
      || /\bpaired with\b/i.test(t)
      || /\bgoes hand in hand with\b/i.test(t);
}
/* ============ BARE FRAGMENTS STAY MULTIPLE-CHOICE ============
   The framed DJ fragments were covered by the association rule
   above — djQuestionText wraps them as 'Trivia Clue: "…" —'. But a
   sheet fragment that happens to START with an interrogative word
   escapes the framing: djQuestionText just appends "?", and the
   result wears the shape of a question without being one. "When
   the lights go dim?" is a subordinate clause (a song lyric) with
   no main clause, no subject beyond "the lights", and no word
   saying what kind of answer is wanted — "Carrie" could be a film,
   a novel, a character, or a song — yet it dealt as a strict typed
   Round 4 question, where the player had to produce that one word
   from nothing. The same shape covers lyric lines ("What a fool
   believes, he sees?") and bare phrases with no interrogative at
   all ("In the heat of the night?").

   bareFragmentPrompt is the detector: a subordinate-clause opener
   with no interrogative auxiliary doing the asking (When did…? is
   a real question; When the lights go dim? is not), an exclamative
   "What a …" lyric line, or a prompt with no interrogative or
   instruction word anywhere in it. Flagged questions are stamped
   mcOnly by the same load-time pass and re-tested at deal time,
   exactly like the classes above: multiple choice only, never
   typed, never a finale, never a Round 4 conversion. In multiple
   choice they deal only if their set passes the kind/subkind/
   domain guard like any other set. (A framed 'Trivia Clue:'
   prompt returns false here — the association rule already owns
   it, and double-counting the same question in two classes would
   corrupt both audits.) */
function bareFragmentPrompt(text){
  if(typeof text!=="string") return false;
  var t=text.trim();
  if(/^Trivia Clue:/i.test(t)) return false;
  var body=t.replace(/\?+\s*$/,"").trim();
  /* A subordinate-clause opener is a fragment only when nothing
     after it asks anything: "When the lights go dim?" never
     reaches a main clause, while "When iron rusts, it reacts with
     oxygen and what else?" completes its question in the main
     clause and is a real, typed-fair question. */
  if(body.indexOf("\u2026")===-1 &&
     /^(when|while|once|until|before|after|if|because|since)\s/i.test(body) &&
     !/^(when|while|once|until|before|after|if|because|since)\s+(did|do|does|was|were|is|are|can|could|will|would|has|have|had|should)\b/i.test(body) &&
     !/\b(who|what|which|why|how|whose|whom|where)\b/i.test(body.replace(/^(when|while|once|until|before|after|if|because|since)\s+/i,""))) return true;
  if(/^what a\b/i.test(body)) return true;
  /* No interrogative or instruction word anywhere: a bare phrase.
     A completion prompt — "… is called…", "refers to a court's…"
     is NOT this class — the ellipsis states exactly what kind of
     completion is expected, and those authored questions are
     complete, unique-answer questions. */
  if(body.indexOf("\u2026")===-1 && !/\b(who|what|when|where|which|why|how|name|whose|whom)\b/i.test(body)) return true;
  return false;
}
/* ============ DEFINITION-SENTENCE ANSWERS STAY MULTIPLE-CHOICE ============
   The same unique-answer fairness rule, on the answer side. A typed
   question is judged against ONE stored answer string, and in
   strict company (Round 4, strict finales) it is judged exactly —
   so the stored answer has to be something a player can actually
   type: a term, a name, a number, a symbol. The reported case
   (Round 4, strict): "A 'subpoena' is a court order that does
   what?" stored the full definition sentence "Compels a person to
   appear or produce evidence" as its answer. The player's
   "Notice to appear in court" — the same idea in their own words —
   could never match a definition sentence verbatim, so the
   question was unwinnable as typed however well it was known. The
   definition banks (Law, Marketing, and their kin in the other
   pools) are built this way throughout: the question asks what a
   term means and the "answer" is the meaning, written as a clause
   or a descriptive phrase.

   definitionSentenceAnswer is the detector: the correct answer is
   a definition sentence when it runs five words or more, carries
   no digit (numbers, quantities, and measurements stay typeable —
   the numeric judge handles them), and is not name/title-shaped.
   Name/title shape means every content word is capitalised, the
   way proper names, legal case names ("Brown v. Board of
   Education"), and song / book / film titles ("Sittin' on Top of
   the World", "The Great Wall of China") are written — those are
   single typeable answers and are NOT this class. Flagged
   questions are stamped mcOnly by the same load-time pass as the
   classes above and re-tested at deal time in the same places:
   never a finale, never a Round 4 conversion, never any other
   typed conversion. They stay fully playable as multiple choice,
   unchanged — not rewritten into term questions, and not deleted.
   (Native typed questions are authored with term/name/number
   answers and scan clean under this detector; the finale-pool
   filter in buildGauntlet still tests them, so the rule holds
   there by construction as well.) */
function definitionSentenceAnswer(q){
  if(!q) return false;
  var ans = q.type==="typed" ? q.answer : (Array.isArray(q.choices) ? q.choices[q.a] : q.answer);
  if(typeof ans!=="string") return false;
  var a=ans.trim();
  if(!a || /\d/.test(a)) return false;
  var words=a.split(/\s+/);
  if(words.length<5) return false;
  var CONN={of:1,and:1,the:1,a:1,an:1,in:1,on:1,at:1,to:1,for:1,or:1,de:1,la:1,le:1,vs:1,v:1,with:1,off:1,bout:1};
  for(var i=0;i<words.length;i++){
    var w=words[i].replace(/^[^A-Za-z]+/,"").replace(/[^A-Za-z'.]+$/,"");
    if(!w) continue;
    if(/^[A-Z]/.test(w)) continue;
    if(i>0 && CONN[w.toLowerCase()]) continue;
    return true; /* a lower-case content word: prose, not a name or title */
  }
  return false;
}
/* ============ INSTRUCTION CLUES NEVER DEAL ============
   A different defect from the fragment classes above: the sheet
   row's "clue" is not a clue at all but a leftover instruction
   from the pub quiz — "Spell correctly" — a directive with no
   subject, no topic, and nothing that connects it to any one of
   its choices. The reported deal (owner, 2026-11-12): 'Trivia
   Clue: "Spell correctly" — what answer goes with this clue?'
   over Wile E. Coyote / Kermit the Frog / Hong Kong Phooey /
   Peter Griffin, with Wile E. Coyote stored as the answer. No
   defensible intended answer exists — a hard question should
   require more knowledge, not require guessing what the writer
   meant — so the disposition is the subjectless one: never deal
   (q.noDeal), in every mode, while the row stays in the bank.

   instructionCluePrompt is the detector: a framed 'Trivia Clue:'
   item whose quoted clue is a bare directive — an imperative
   with no subject matter ("spell correctly", "true or false",
   "name both", "give the full name"), or a one-to-three-word
   imperative with nothing after the verb phrase. A directive
   that DOES name its subject ("Spell Zach's name correctly" —
   displayed as "How is Zach Galifianakis's last name spelled,
   letter by letter?") states what is being asked and is not
   this class; a topic fragment, however short ("Fungus" is
   excluded by the stamp below on its own audit, not by this
   detector), is the association class's business, not this
   one's. The load-time stamp in part 6 excludes the audited
   rows by key, and mcSetValid re-tests this detector at deal
   time, so an instruction clue can never deal even if a stamp
   is missed. */
function instructionCluePrompt(q){
  if(!q || typeof q.q!=="string") return false;
  if(!/^Trivia Clue:/i.test(q.q.trim())) return false;
  var clue=djRawClue(q).toLowerCase().replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim();
  if(!clue) return true;
  if(/^(spell correctly|true or false|false or true|name both|name all|give the full name|give the name|full name|both names|spell)$/.test(clue)) return true;
  if(/^(spell|name|give|list|state|tell)\b/.test(clue) && clue.split(" ").length<=3) return true;
  return false;
}
/* ================= SUBJECTLESS PROMPTS NEVER DEAL =================
   A different defect class from the answer-kind rules above: a set
   can be perfectly kind-clean and still be unanswerable, because
   the PROMPT gives the player nothing to answer from. The reported
   case (Round 1, fresh game): the prompt was the whole question —
   "What country?" — with Singapore / Greece / Peru / Afghanistan
   as choices. All four are countries, so the kind rule passed the
   set, but no clue, subject, or picture says WHICH country is
   meant: a pure 25% guess, breaking the standing rule that every
   question shows a complete, unambiguous prompt.

   The class: a text-only prompt of two words or fewer — no clue,
   no subject, no instruction ("What country?", "What city?",
   "Who?", a bare name standing alone). A picture question is NOT
   in this class: the image itself is the clue. A DJ fragment clue
   is not in this class either: djQuestionText frames it as
   'Trivia Clue: "…" — what answer goes with this clue?', so the
   fragment is the clue and the framing is the instruction.

   Disposition: such a question is excluded from ALL dealing —
   multiple choice AND typed, Gauntlet AND practice (q.noDeal).
   It is NOT rewritten: no clue is invented for it, and none is
   guessed from its answer. If the original sheet row held a fuller
   clue that dealing had dropped, restoring that exact clue would
   be allowed — for the one question this audit found, the sheet
   row itself is just ["What country", "Afghanistan"], so there is
   nothing to restore. The question stays in its bank; it simply
   never deals. The load-time stamp below covers every pool (MC
   and native typed alike), and the dealers double-check: every MC
   pick passes through mcDealable, pickPicMixed filters the flag
   too, buildGauntlet swaps a flagged Round 4 pick out and filters
   the finale pools, and typedDealReplacement refuses a flagged
   replacement — stamp and detector both tested, like mcOnly. */
function subjectlessPrompt(q){
  if(!q || typeof q.q!=="string") return false;
  if(q.img) return false; /* the image itself supplies the subject */
  var t=q.q.trim();
  if(/^Trivia Clue:/i.test(t)) return false; /* framed DJ clue: fragment is the clue, framing is the instruction */
  var w=t.split(/\s+/).filter(Boolean);
  return w.length<=2;
}
/* The pool an item was dealt from, so a swapped-out Round 4 item is
   replaced like-for-like: same bank, same tier, same kind. */
function poolOfItem(item){
  var pools=[DJ_MC, LEANN_MC];
  TIERS.forEach(function(t){ pools.push(TEXT[t], CAPITALS[t], PICS[t]); });
  Object.keys(NEWCAT).forEach(function(k){ pools.push(NEWCAT[k]); });
  Object.keys(NEWBANKS).forEach(function(k){ pools.push(NEWBANKS[k]); });
  for(var i=0;i<pools.length;i++){ if(pools[i].indexOf(item)>-1) return pools[i]; }
  return null;
}
function capAnswerOf(item){
  if(!item) return "";
  if(item.type==="typed") return String(item.answer||"");
  if(Array.isArray(item.choices) && item.choices[item.a]!=null) return String(item.choices[item.a]);
  return String(item.answer||"");
}
function isLeAnnQ(item){
  if(!item) return false;
  if(item===LEANN_PIC) return true;
  if(item.cat==="LeAnn Rimes") return true;
  if(LEANN_MC.indexOf(item)>-1) return true;
  if(/\bleann\b|\brimes\b/i.test(String(item.q||""))) return true;
  if(norm(capAnswerOf(item))==="leann rimes") return true;
  return false;
}
function isVideoGameQ(item){
  if(!item) return false;
  if(/video ?games?|videogames?|\bgaming\b/i.test(String(item.cat||""))) return true;
  var ans=capAnswerOf(item);
  if(VG_ANSWER_NORM[norm(ans)]) return true;
  if(typeof SHEET_BRAND_ALL!=="undefined" && SHEET_BRAND_ALL[norm(ans)]==="gaming") return true;
  var stem=String(item.q||"");
  if(VG_STEM_RE.test(stem)) return true;
  if(VG_SUBJECT_RE.test(stem) || VG_SUBJECT_RE.test(ans)) return true;
  return false;
}
/* The running tally for one mixed game: {leann, vg}. Every mixed
   pick passes through capAllows before it is dealt and noteCap
   after, so no dealing path — bank rotation, DJ, picture, classic
   text, capital flex, Round 4 swap, or typed finale — can push
   either subject past its cap. */
function newCapState(){ return {leann:0, vg:0}; }
function capAllows(capState, item){
  if(!capState || !item) return true;
  if(isLeAnnQ(item) && capState.leann>=LEANN_GAME_CAP) return false;
  if(isVideoGameQ(item) && capState.vg>=VIDEOGAME_GAME_CAP) return false;
  return true;
}
function noteCap(capState, item){
  if(!capState || !item) return;
  if(isLeAnnQ(item)) capState.leann++;
  if(isVideoGameQ(item)) capState.vg++;
}
function unnoteCap(capState, item){
  if(!capState || !item) return;
  if(isLeAnnQ(item) && capState.leann>0) capState.leann--;
  if(isVideoGameQ(item) && capState.vg>0) capState.vg--;
}
/* pick() with the subject caps applied: the capped-out questions
   are filtered from the pool before the pick, and the pick is
   tallied. Every pool this is used on is deep in uncapped
   questions, so the filtered pool is never empty in practice; if
   it somehow were, the unfiltered pick stands rather than dealing
   short. */
function pickCapped(pool, used, capState){
  var p=pool||[];
  if(capState){
    var f=p.filter(function(x){ return capAllows(capState, x); });
    if(f.length) p=f;
  }
  var item=pick(p, used);
  noteCap(capState, item);
  return item;
}
function typedDealReplacement(item, used, geoState, tier, capState){
  var wasGeo=isGeoPic(item)||isCapitalItem(item);
  /* The subject-cap budget for the replacement: the tally without
     the swapped-out item's own contribution, so a capped subject
     may be replaced by another question of the same subject (the
     slot keeps its one allowed question) but never by a second
     one on top of a cap already spent elsewhere in the game. */
  var leannBase=(capState?capState.leann:0)-(isLeAnnQ(item)?1:0);
  var vgBase=(capState?capState.vg:0)-(isVideoGameQ(item)?1:0);
  function ok(c){
    if(!c || c===item || used.indexOf(c)>-1) return false;
    if(c.noDeal || subjectlessPrompt(c)) return false; /* subjectless prompts never deal, typed included */
    if(c.type!=="mc" || c.mcOnly || choiceDependentStem(c.q) || promptLeaksAnswer(c) || vagueAssociationPrompt(c.q) || promptContainsAnswer(c) || bareFragmentPrompt(c.q) || definitionSentenceAnswer(c)) return false;
    /* A geography replacement for a non-geography pick is allowed
       only while the Gauntlet's combined geography cap has room —
       the swap must never push capitals + maps + flags past it. */
    if(!wasGeo && (isGeoPic(c)||isCapitalItem(c)) && geoState.count>=GEO_GAUNTLET_CAP) return false;
    if(capState){
      if(isLeAnnQ(c) && leannBase>=LEANN_GAME_CAP) return false;
      if(isVideoGameQ(c) && vgBase>=VIDEOGAME_GAME_CAP) return false;
    }
    return true;
  }
  var pool=poolOfItem(item);
  var cands=pool ? pool.filter(ok) : [];
  if(!cands.length){
    /* Widen beyond the item's own pool: this round's classic text
       pool, then the rotating category banks. */
    var wide=[TEXT[tier]];
    MIX_BANKS.forEach(function(b){ wide.push(b.pool()); });
    for(var i=0;i<wide.length && !cands.length;i++) cands=wide[i].filter(ok);
  }
  if(!cands.length) return item; /* every pool is deep — unreachable in practice */
  /* Cooldown first, like every other dealer (see pick()): outside
     the cooldown when anything is, else the least-recently-dealt. */
  var freshRepl=cands.filter(function(c){ return !isSeenQ(c); });
  if(freshRepl.length) cands=freshRepl;
  else cands=oldestOnly(cands);
  var repl=cands[Math.floor(rand()*cands.length)];
  used.push(repl);
  if(!wasGeo && (isGeoPic(repl)||isCapitalItem(repl))) geoState.count++;
  return repl;
}
function nameShapedAnswer(a){
  var words=String(a).trim().split(/\s+/).filter(Boolean);
  if(words.length<2) return false;
  var caps=0;
  for(var i=0;i<words.length;i++){
    var w=words[i];
    if(/^[A-ZÀ-Þ]/.test(w) || /^([A-Z]\.)+$/.test(w)) caps++;
    else if(NAME_FORM_PARTICLES[norm(w)]) continue;
    else return false;
  }
  return caps>=2;
}
function personSeekingPrompt(p){
  var t=String(p||"");
  if(/^\s*who\b/i.test(t)) return true;
  if(/^\s*(which|what)\s+[^?]{0,40}\b(author|artist|painter|singer|composer|actor|actress|scientist|inventor|philosopher|playwright|poet|novelist|director|president|monarch|explorer|architect|sculptor|musician|mathematician|physicist|chemist|biologist|astronomer|athlete|player|golfer|boxer|swimmer|general|king|queen|emperor|empress|saint|pope|founder)\b/i.test(t)) return true;
  if(/^\s*name\s+the\s+(author|artist|painter|singer|composer|playwright|poet|novelist|scientist|inventor|director)\b/i.test(t)) return true;
  return false;
}
function typedAnswerIsFullPersonName(q){
  var ans = q.type==="typed" ? q.answer : (Array.isArray(q.choices) ? q.choices[q.a] : q.answer);
  var a=String(ans==null?"":ans).trim();
  if(!a) return false;
  if(a.split(/\s+/).filter(Boolean).length<2) return false; /* a one-word name is already the whole answer */
  var ki=kindInfoAll(a);
  if(ki.kind==="person") return true;
  if(ki.kind!=="other") return false; /* group, country, state, continent, colour, number… never a person's name */
  if(q.img && q.cat==="Famous Faces") return true; /* the answer is the person in the photo */
  if(CHAR_NORM[norm(a)]) return true; /* a fictional character's full name counts as a person's name here */
  if(!personSeekingPrompt(q.q)) return false;
  if(animalKindHit(norm(a))) return false;
  var fn=norm(foldAccents(a));
  if(CITY_NORM[fn] || CITY_HARVEST_NORM[fn]) return false;
  return nameShapedAnswer(a);
}
/* The same principle covers every other typed answer a one-word
   partial cannot score: the question states the expected form —
   "Give the full answer." Whether a one-word partial scores is
   not guessed: the judge itself is asked, in its standard mode.
   Its exact-match targets (the answer, the accept list, aliases),
   the numeric and ordinal equivalences, and the singular/plural
   equivalence all run before any strict cut-off, so a partial
   that scores there scores in every mode — "Beatles" for
   "The Beatles" (an authored accept), "pack" for "A pack" (the
   conversion's article-stripped accept), "212" for "212 degrees"
   (numeric equivalence). Those questions need no statement: the
   one-word answer genuinely works. A multiword answer with no
   scoring one-word partial can only be got right whole, so its
   question says so up front. */
function oneWordPartialScores(q){
  var words=String(q.answer==null?"":q.answer).trim().split(/\s+/).filter(Boolean);
  for(var i=0;i<words.length;i++){
    var w=words[i].replace(/[^A-Za-zÀ-ÿ0-9'-]/g,"");
    if(w && typedCorrect(q, w, false, false, false)) return true;
  }
  return false;
}
/* The form statement a typed question's prompt must carry, or "":
   a person's full name is asked for by name ("First and last
   name."); any other multiword answer no one-word partial can
   score asks for the full answer ("Give the full answer."). A
   prompt that already states a form is left alone. */
function typedFormStatement(q){
  var t=String(q.q||"");
  if(/first and last name/i.test(t) || /give the full answer/i.test(t) || /(first|last) name only/i.test(t)) return "";
  if(typedAnswerIsFullPersonName(q)) return "First and last name.";
  var a=String(q.answer==null?"":q.answer).trim();
  if(a.split(/\s+/).filter(Boolean).length<2) return "";
  if(oneWordPartialScores(q)) return "";
  return "Give the full answer.";
}
/* The prompt as a typed question must show it: the same text, with
   its form statement appended when it needs one. */
function withTypedForm(q){
  var t=String(q.q||"");
  var st=typedFormStatement(q);
  return st ? t.replace(/\s+$/,"")+" "+st : t;
}

/* Convert a multiple-choice question into a typed-in question for
   Round 4: the correct choice becomes the typed answer, and any photo,
   category, credit, and fact carry over so picture and capital
   questions still show their image — the answer is typed, not picked. */
function mcToTyped(src){
  if(src.type==="typed") return src;
  var ans=src.choices[src.a];
  var accept=[];
  if(/^The /i.test(ans)) accept.push(ans.replace(/^The /i,""));
  if(/^A /i.test(ans)) accept.push(ans.replace(/^A /i,""));
  /* An authored accept list on the source question carries over:
     the bank itself may know a shorter form IS the whole answer
     even when the stored choice is padded — "Egyptians" for "The
     ancient Egyptians" (the Giza question: strict Round 4 failed a
     player who typed exactly that, because the auto-derivation
     above only strips a leading article and no equivalence covers
     dropping "ancient"). With the authored form among the exact
     targets, oneWordPartialScores also sees it, so the prompt no
     longer demands "Give the full answer." for a form it accepts. */
  if(Array.isArray(src.accept)){
    for(var k=0;k<src.accept.length;k++){
      if(accept.indexOf(src.accept[k])<0) accept.push(src.accept[k]);
    }
  }
  /* Currency questions (owner ruling, 2026-11-13): the choices
     carry the BARE currency name only ("Dollar", "Franc"), so the
     converted typed answer is the bare name — but the full form
     ("Surinamese dollar") is the currency's complete real-world
     name and must score too. The full form is read from the
     question's own explanation, which keeps it ("The currency of
     Suriname is the Surinamese dollar."), so both forms are exact
     targets for the judge. */
  if(/^What is the currency of /i.test(src.q) && src.fact){
    var cfm=String(src.fact).match(/currency of .+? is the ([A-Za-z][A-Za-z .'-]*?)\.?\s*$/i);
    if(cfm){ var cfull=cfm[1].trim(); if(norm(cfull)!==norm(ans) && accept.indexOf(cfull)<0) accept.push(cfull); }
  }
  var o={type:"typed", q:src.q, answer:ans, accept:accept, exact:true,
         rule:"Round 4 — spelling must be exact.", fact:src.fact||""};
  if(src.dq) o.dq=src.dq;
  if(src.img){ o.img=src.img; o.cat=src.cat; o.credit=src.credit; o.page=src.page; }
  else if(src.cat){ o.cat=src.cat; }
  /* The converted question states its expected answer form like
     any other typed question (see withTypedForm) — computed on the
     built object, so its answer and accept list are the ones the
     judge will actually use. */
  o.q=withTypedForm(o);
  return o;
}
function isGeoPic(item){ return !!(item && item.img && GEO_PIC_CATS[item.cat]); }
function isCapitalItem(item){
  return !!item && !item.img && typeof item.q==="string" && item.q.indexOf("What is the capital of")===0;
}
/* Pick from the least-used category bank (ties broken at random), so
   successive picks rotate through law, sciences, history, pop
   culture, advertising, riddles, sports, LeAnn, and the rest instead
   of repeating whichever bank uniform chance favors. */
function pickFromBank(used, bankUse, capState){
  /* Subject caps (see PER-GAME SUBJECT CAPS): once this game's one
     LeAnn Rimes question has been dealt, her bank leaves the
     rotation entirely — every question in it is a LeAnn question —
     and the pick rotates to another bank instead. Video Game
     questions sit inside mixed banks (Pop Culture and friends), so
     those banks stay in the rotation and pickCapped filters their
     video-game questions out once the cap is spent. */
  var banks=MIX_BANKS;
  if(capState && capState.leann>=LEANN_GAME_CAP){
    var noLeann=banks.filter(function(b){ return b.name!=="LeAnn Rimes"; });
    if(noLeann.length) banks=noLeann;
  }
  var best=null, bestCount=Infinity;
  shuffle(banks).forEach(function(b){
    var c=bankUse[b.name]||0;
    if(c<bestCount){ bestCount=c; best=b; }
  });
  bankUse[best.name]=bestCount+1;
  /* MC-excluded questions (see the same-subkind guarantee) are
     never dealt as multiple choice, in any bank. */
  return pickCapped(mcDealable(best.pool()), used, capState);
}
/* Pick a picture for a mixed deal. While the geography budget lasts,
   any picture may come up; once it is spent, map shapes and flags are
   excluded. The previous picture's category is avoided when an
   alternative exists, so pictures don't repeat back to back. geoState
   is {count, lastCat} and is updated in place. */
function pickPicMixed(pool, used, geoState, geoCap, capState){
  /* The deal-time invariant guard applies here too (see
     mcSetValid): an excluded, subjectless, or kind/subkind-invalid
     picture set is never dealt. */
  var avail=pool.filter(function(x){ return used.indexOf(x)===-1 && !x.mcExcluded && !x.noDeal && mcSetValid(x); });
  if(!avail.length) avail=pool.filter(function(x){ return !x.mcExcluded && !x.noDeal && mcSetValid(x); });
  /* Subject caps: a capped-out picture never deals in a mixed game
     — the LeAnn Rimes portrait (a Famous Faces picture) once her
     one question is spent, and any video-game picture likewise. */
  if(capState){
    var capOk=avail.filter(function(x){ return capAllows(capState, x); });
    if(capOk.length) avail=capOk;
  }
  var cand=avail;
  if(geoState.count>=geoCap){
    var nonGeo=cand.filter(function(x){ return !isGeoPic(x); });
    if(nonGeo.length) cand=nonGeo;
  }
  var diff=cand.filter(function(x){ return x.cat!==geoState.lastCat; });
  if(diff.length) cand=diff;
  var item=pick(cand, used);
  if(isGeoPic(item)) geoState.count++;
  geoState.lastCat=item.cat||"";
  noteCap(capState, item);
  return item;
}
function allPics(){
  return PICS.easy.concat(PICS.medium, PICS.hard, PICS.vhard);
}
/* Mixed Bag deal: 10 questions dealt by the same rotation as the
   Gauntlet — 3 rotating category-bank picks, 1 Trivia Sheet, 2 pictures,
   2 classic general-knowledge text questions, 1 LeAnn Rimes, and 1
   flex slot (a capital only while the geography budget lasts, else
   another bank pick). Geography totals at most GEO_MIXED_CAP. */
function dealMixed(){
  var used=[], out=[], bankUse={}, geoState={count:0, lastCat:""};
  /* Subject caps for this mixed game: at most 1 LeAnn Rimes and at
     most 1 Video Game question in the whole 10 (see PER-GAME
     SUBJECT CAPS). The dedicated "leann" slot below is the game's
     one allowed LeAnn question — unless an earlier slot already
     dealt one (her bank winning a rotation pick, or her portrait
     as a picture), in which case the slot deals a bank pick
     instead, so the total still never exceeds one. */
  var capState=newCapState();
  var slots=shuffle(["bank","pic","text","dj","bank","pic","bank","text","leann","flex"]);
  slots.forEach(function(slot){
    if(slot==="bank") out.push(pickFromBank(used, bankUse, capState));
    else if(slot==="dj") out.push(pickCapped(mcDealable(DJ_MC), used, capState));
    else if(slot==="leann"){
      if(capState.leann>=LEANN_GAME_CAP) out.push(pickFromBank(used, bankUse, capState));
      else out.push(pickCapped(mcDealable(LEANN_MC), used, capState));
    }
    else if(slot==="pic") out.push(pickPicMixed(allPics(), used, geoState, GEO_MIXED_CAP, capState));
    else if(slot==="flex"){
      if(geoState.count<GEO_MIXED_CAP){ var cap=pick(mcDealable(CAPITALS.easy.concat(CAPITALS.medium, CAPITALS.hard, CAPITALS.vhard)), used); geoState.count++; noteCap(capState, cap); out.push(cap); }
      else out.push(pickFromBank(used, bankUse, capState));
    }
    else { var tier=TIERS[Math.floor(rand()*4)]; out.push(pickCapped(mcDealable(TEXT[tier]), used, capState)); }
  });
  /* Repair pass: no two same-type questions back to back when a swap
     can avoid it (types are picture categories, bank categories, and
     the DJ / LeAnn / capital / general-text groups). */
  function typeKey(q){
    if(q.img) return q.cat;
    if(q.cat) return q.cat;
    if(isCapitalItem(q)) return "Capitals";
    if(DJ_MC.indexOf(q)>-1) return "Trivia";
    if(LEANN_MC.indexOf(q)>-1) return "LeAnn Rimes";
    return "General Knowledge";
  }
  for(var i=1;i<out.length;i++){
    if(typeKey(out[i])!==typeKey(out[i-1])) continue;
    for(var j=i+1;j<out.length;j++){
      if(typeKey(out[j])===typeKey(out[i])) continue;
      if(j+1<out.length && typeKey(out[j+1])===typeKey(out[i])) continue;
      if(typeKey(out[j-1])===typeKey(out[i-1]) && j-1!==i) continue;
      var t=out[i]; out[i]=out[j]; out[j]=t; break;
    }
  }
  return out;
}

function buildGauntlet(){
  var used=[], qs=[], tier, i, item;
  /* Spelling strictness per round for this Gauntlet: Round 1 never
     strict, Round 4 always strict, and Rounds 2/3 alternate — exactly
     one of Q10/Q15 is strict, flipping each new Gauntlet. */
  var strictByRound;
  if(challengeDeal){
    /* A challenge deal must be identical on any device, so which
       of Q10/Q15 is strict is decided by the seeded stream itself —
       exactly one of them still is — and the device-local
       alternation counter is left untouched. */
    var seedStrict=rand()<0.5;
    strictByRound=[false, seedStrict, !seedStrict, true];
  } else {
    strictByRound=[false, nextGauntletQ10Strict, !nextGauntletQ10Strict, true];
    nextGauntletQ10Strict=!nextGauntletQ10Strict;
  }
  /* Variety quotas for the 16 dealt questions: 5 rotating category-
     bank picks (5 different banks), 4 Trivia Sheet (one per round),
     4 pictures, 2 classic general-knowledge text questions, and 1
     flex slot that is a capital only in one round and only while the
     combined geography cap (capitals + map shapes + flags ≤
     GEO_GAUNTLET_CAP for the whole Gauntlet) still has room — so no
     type or category exceeds a quarter of the game and a typical
     Gauntlet spans ten or more distinct types/categories. */
  var bankUse={}, geoState={count:0, lastCat:""};
  /* Subject caps for the whole Gauntlet: at most 1 LeAnn Rimes and
     at most 1 Video Game question across all 20 questions — bank
     picks, DJ, pictures, classic text, Round 4 swaps, and the typed
     finales all tally into this one state (see PER-GAME SUBJECT
     CAPS). */
  var capState=newCapState();
  var capRound=Math.floor(rand()*4);
  var extraBankRound=(capRound+2)%4;
  for(var r=0;r<4;r++){
    tier=TIERS[r];
    var roundQs=[];
    roundQs.push(pickFromBank(used, bankUse, capState));
    roundQs.push(pickCapped(mcDealable(DJ_MC),used, capState));
    roundQs.push(pickPicMixed(PICS[tier]&&PICS[tier].length?PICS[tier]:PICS.medium, used, geoState, GEO_GAUNTLET_CAP, capState));
    if(r===capRound && geoState.count<GEO_GAUNTLET_CAP){
      var capPick=pick(mcDealable(CAPITALS[tier]),used); geoState.count++; noteCap(capState, capPick); roundQs.push(capPick);
    } else if(r===extraBankRound){
      roundQs.push(pickFromBank(used, bankUse, capState));
    } else {
      roundQs.push(pickCapped(mcDealable(TEXT[tier]),used, capState));
    }
    roundQs=shuffle(roundQs);
    for(i=0;i<roundQs.length;i++){
      item=roundQs[i];
      if(r===3){
        /* Round 4 is all typed-in: Q16–Q19 are typed questions worth
           40 pts each, not multiple choice. A pick whose stem depends
           on seeing its choices ("Which of these…") would be unfair
           typed, and so would a pick whose prompt prints its own
           answer — and so would a vague association prompt — "what
           goes with…", a DJ fragment clue), which has no single
           correct answer without its choices — and so would a pick
           whose stored answer is a whole definition sentence, which
           nobody can type verbatim under strict spelling. Swap any
           of those for a self-contained question from the same pool
           before converting; all of them can still appear in Rounds
           1–3, where their choices are shown. */
        if(item.type==="mc" && (item.mcOnly || item.noDeal || subjectlessPrompt(item) || choiceDependentStem(item.q) || promptLeaksAnswer(item) || vagueAssociationPrompt(item.q) || promptContainsAnswer(item) || bareFragmentPrompt(item.q) || definitionSentenceAnswer(item))){
          var origItem=item;
          item=typedDealReplacement(item, used, geoState, tier, capState);
          /* Keep the subject-cap tally true after the swap: the
             replacement was chosen against the budget without the
             original's contribution, so exchange one for the other. */
          if(item!==origItem){ unnoteCap(capState, origItem); noteCap(capState, item); }
        }
        qs.push({kind:"typed", data:mcToTyped(item), round:r, pts:ROUND_PTS[r], ref:challengeRefOf(item)});
      } else {
        qs.push({kind:"mc", data:item, round:r, pts:ROUND_PTS[r], ref:challengeRefOf(item)});
      }
    }
    /* The typed finale counts toward the geography cap too: once the
       budget is spent, capital finales are held back. */
    var finPool=TYPED[tier];
    /* Subjectless prompts never deal — finales included (the MC
       picks above are already filtered by mcDealable; the native
       typed pools are picked from directly, so filter here). */
    var dealableFin=finPool.filter(function(t){ return !t.noDeal && !t.noFinale && !subjectlessPrompt(t) && !promptContainsAnswer(t) && !definitionSentenceAnswer(t); });
    if(dealableFin.length) finPool=dealableFin;
    if(geoState.count>=GEO_GAUNTLET_CAP){
      var nonCap=finPool.filter(function(t){ return !isCapitalItem(t); });
      if(nonCap.length) finPool=nonCap;
    }
    /* The finale counts toward the subject caps too: once this
       game's LeAnn or Video Game question has been dealt, a finale
       of that subject is held back (her typed finales carry the
       LeAnn Rimes label, so the check catches them). */
    var capFin=finPool.filter(function(t){ return capAllows(capState, t); });
    if(capFin.length) finPool=capFin;
    /* A finale whose fact twin was already dealt in this game is
       held back (see FACT TWINS above): the same fact never plays
       twice in one Gauntlet, in either direction. */
    var twinFin=finPool.filter(function(t){ return !finaleTwinBlocked(t, used); });
    if(twinFin.length) finPool=twinFin;
    var fin=pick(finPool,used);
    noteCap(capState, fin);
    if(isCapitalItem(fin)) geoState.count++;
    qs.push({kind:"finale", data:fin, round:r, pts:0, strict:strictByRound[r], ref:challengeRefOf(fin)});
  }
  return qs;
}

/* ================= BONUS ROUND & LEGEND GAUNTLET =================
   Two Gauntlet payoffs, added without touching the regular
   20-question game, its scoring, judging, timers, Pass / Q20
   rules, caps, or the high-score storage keys:
   - BONUS ROUND: a regular Gauntlet finished at 1,000 points or
     more (but not a perfect 1,280) continues into 5 typed
     questions labelled Super Hard, dealt from the SUPERHARD
     pool (the tier's own 100-question bank, with the hardest
     vhard pool as fallback), strict like Round 4
     and on the Round 4 clock. Questions 1-4 add 5 pts each; wrong, pass, and
     timeout-as-pass add nothing and lose nothing. Question 5 is
     the doubler: right doubles the bonus points earned on
     questions 1-4 (20 -> 40, the most the bonus can add);
     wrong / pass / timeout keeps them. Bonus points are part of
     state.score throughout, so the saved leaderboard score
     includes them — but the total is capped at 1,280
     (BONUS_CAP): a bonus game can tie a perfect game, never
     beat it.
   - LEGEND GAUNTLET: a perfect 1,280 earns no bonus; the
     results screen offers the Legend game instead - 20
     hardest-tier questions, all typed, same points and wager
     finales, faster clock (see LEGEND_TIMES), saved to the same
     pace board labelled "Legend Gauntlet". Round 1 deals from
     the SUPERHARD pool for real, Round 2 from the
     EXTREMEHARD pool, Round 3 from the LUDICROUSHARD pool,
     and Round 4 from the IMPOSSIBLEHARD pool (each tier's own
     100-question bank); the final question is Genius Level
     (see legendTierName) and deals from the GENIUSHARD pool,
     the tier's own 100-question bank and the hardest in the
     game. Legend games never trigger a bonus round. */
function isJackpotMode(m){ return m==="gauntlet" || m==="legend" || m==="daily"; }
/* A multiple-choice question may be converted to a typed bonus /
   Legend question only if it is fair typed: self-contained, one
   unambiguous answer, nothing that must stay multiple-choice
   under the standing guards (the same tests Round 4 applies). */
function typedConvertibleOk(c){
  if(!c || c.type!=="mc") return false;
  if(c.noDeal || c.mcOnly || subjectlessPrompt(c)) return false;
  if(choiceDependentStem(c.q) || promptLeaksAnswer(c) || vagueAssociationPrompt(c.q)) return false;
  if(promptContainsAnswer(c) || bareFragmentPrompt(c.q) || definitionSentenceAnswer(c)) return false;
  return mcSetValid(c);
}
function buildBonusQuestions(){
  var inGame={};
  /* Null-safe: a creator bonus game is built straight from the
     cover, where there may be no game in progress at all. */
  (state && state.qs ? state.qs : []).forEach(function(it){ if(it && it.data) inGame[seenKeyOf(it.data)]=1; });
  function notInGame(c){ return !inGame[seenKeyOf(c)]; }
  var mcPools=[TEXT.vhard, CAPITALS.vhard, PICS.vhard];
  MIX_BANKS.forEach(function(b){ mcPools.push(b.pool()); });
  var mcCands=[];
  mcPools.forEach(function(pool){
    (pool||[]).forEach(function(c){
      if(typedConvertibleOk(c) && notInGame(c) && mcCands.indexOf(c)===-1) mcCands.push(c);
    });
  });
  var typedCands=TYPED.vhard.filter(function(c){
    return c && !c.noDeal && !subjectlessPrompt(c) && !promptContainsAnswer(c) && !definitionSentenceAnswer(c) && notInGame(c);
  });
  /* The Super Hard pool is the bonus round's own bank: it leads
     the deal (outside its cooldown first, like everything else),
     and the Very Hard fallbacks below only fill in if it ever
     runs short. */
  var superCands=SUPERHARD.filter(function(c){
    return c && !c.noDeal && !subjectlessPrompt(c) && !promptContainsAnswer(c) && !definitionSentenceAnswer(c) && notInGame(c);
  });
  var fresh=shuffle(superCands.filter(function(c){ return !isSeenQ(c); }))
    .concat(shuffle(mcCands.filter(function(c){ return !isSeenQ(c); }).concat(typedCands.filter(function(c){ return !isSeenQ(c); }))));
  var seen=shuffle(superCands.filter(function(c){ return isSeenQ(c); }))
    .concat(shuffle(mcCands.filter(function(c){ return isSeenQ(c); }).concat(typedCands.filter(function(c){ return isSeenQ(c); }))));
  /* The cooling fallback deals least-recently-dealt first, like
     every other dealer (see pick()). */
  seen.sort(function(a,b){ return lastDealtOf(a)-lastDealtOf(b); });
  return fresh.concat(seen).slice(0,5).map(function(c, i){
    return {kind:"bonus", data:(c.type==="typed" ? c : mcToTyped(c)), round:3, pts:(i<4 ? 5 : 0), bonusIdx:i};
  });
}
function bonusEligible(){
  /* Sudden Death never plays a bonus round: the game ends on the
     first miss, and a completed Sudden Death game stands on its
     own total (a perfect one is 1,280 and unlocks Legend instead).
     Creator games never trigger an earned bonus either — a creator
     bonus game is already in its bonus phase, and a creator Legend
     game is not a Gauntlet. */
  return !!state && !state.creator && (state.mode==="gauntlet" || state.mode==="daily") && !state.suddenDeath && state.phase!=="bonus" && state.score>=1000 && state.score<BONUS_CAP;
}
function startBonusRound(){
  var items=buildBonusQuestions();
  if(!items.length){ endGame(); return; }
  state.phase="bonus";
  state.bonusBase=state.score;
  state.bonusEarned=0;
  state.bonusDoubled=false;
  state.bonusIntro=true;
  state.qs=state.qs.concat(items);
  /* A daily stays isolated from the seen store end to end — its
     bonus questions stamp nothing either. */
  if(!state.daily) markGameSeen(items);
  saveProgress();
  renderQuestion();
}
function buildLegendGauntlet(){
  var used=[], qs=[];
  var strictByRound=[false, nextGauntletQ10Strict, !nextGauntletQ10Strict, true];
  nextGauntletQ10Strict=!nextGauntletQ10Strict;
  var cands=[];
  [TEXT.vhard, CAPITALS.vhard, PICS.vhard].forEach(function(pool){
    (pool||[]).forEach(function(c){
      if(typedConvertibleOk(c) && cands.indexOf(c)===-1) cands.push(c);
    });
  });
  for(var r=0;r<4;r++){
    for(var i=0;i<4;i++){
      if(r===0){
        /* Legend Round 1 is genuinely Super Hard: all four of its
           regular questions deal from the SUPERHARD pool (already
           typed, so no conversion is needed). */
        var supItem=pick(SUPERHARD, used);
        qs.push({kind:"typed", data:supItem, round:r, pts:ROUND_PTS[r]});
      } else if(r===1){
        /* Legend Round 2 is genuinely Extremely Hard: all four of
           its regular questions deal from the EXTREMEHARD pool
           (already typed, so no conversion is needed). */
        var extItem=pick(EXTREMEHARD, used);
        qs.push({kind:"typed", data:extItem, round:r, pts:ROUND_PTS[r]});
      } else if(r===2){
        /* Legend Round 3 is genuinely Ludicrously Hard: all four
           of its regular questions deal from the LUDICROUSHARD
           pool (already typed, so no conversion is needed). */
        var ludItem=pick(LUDICROUSHARD, used);
        qs.push({kind:"typed", data:ludItem, round:r, pts:ROUND_PTS[r]});
      } else {
        /* Legend Round 4 is genuinely Impossibly Hard: all four
           of its regular questions deal from the IMPOSSIBLEHARD
           pool (already typed, so no conversion is needed). Its
           finale (Q20) is Genius Level and deals from the
           GENIUSHARD pool in the finale branch below. */
        var impItem=pick(IMPOSSIBLEHARD, used);
        qs.push({kind:"typed", data:impItem, round:r, pts:ROUND_PTS[r]});
      }
    }
    var fin;
    if(r===0){
      /* The Round 1 finale (Q5) is Super Hard too. */
      fin=pick(SUPERHARD, used);
    } else if(r===1){
      /* The Round 2 finale (Q10) is Extremely Hard too. */
      fin=pick(EXTREMEHARD, used);
    } else if(r===2){
      /* The Round 3 finale (Q15) is Ludicrously Hard too. */
      fin=pick(LUDICROUSHARD, used);
    } else {
      /* The Round 4 finale (Q20) is Genius Level, the hardest
         tier in the game: it deals from the GENIUSHARD pool
         (already typed, so no conversion is needed). */
      fin=pick(GENIUSHARD, used);
    }
    qs.push({kind:"finale", data:fin, round:r, pts:0, strict:strictByRound[r]});
  }
  return qs;
}
function challengePools(){
  if(CHALLENGE_POOLS) return CHALLENGE_POOLS;
  var list=[];
  function add(code, arr){ if(Array.isArray(arr)) list.push([code, arr]); }
  add("DJ", DJ_MC);
  add("LR", LEANN_MC);
  TIERS.forEach(function(t, i){
    add("T"+i, TEXT[t]); add("C"+i, CAPITALS[t]); add("P"+i, PICS[t]); add("Y"+i, TYPED[t]);
  });
  Object.keys(NEWCAT).forEach(function(k, i){ add("N"+i, NEWCAT[k]); });
  Object.keys(NEWBANKS).forEach(function(k, i){ add("K"+i, NEWBANKS[k]); });
  CHALLENGE_POOLS=list;
  return list;
}
/* The canonical reference of a dealt item: the first pool (in
   the game's own pool-resolution order, poolOfItem's) holding
   the exact object, and its index there. Null when the item
   lives in no canonical pool — buildGauntlet only deals pool
   members, so a null ref marks a game a v2 link cannot carry,
   and the mint falls back to the v1 seed for it. */
function challengeRefOf(item){
  if(!item) return null;
  var pools=challengePools();
  for(var i=0;i<pools.length;i++){
    var idx=pools[i][1].indexOf(item);
    if(idx>-1) return {pool:pools[i][0], idx:idx};
  }
  return null;
}
function challengeItemByRef(code, idx){
  var pools=challengePools();
  for(var i=0;i<pools.length;i++){
    if(pools[i][0]===code){
      var arr=pools[i][1];
      return (idx>=0 && idx<arr.length) ? arr[idx] : null;
    }
  }
  return null;
}
/* Choice-order permutations of four choices, as Lehmer
   (factorial number system) indices 0–23 and back. */
function permIndexOf(order){
  var avail=[0,1,2,3], idx=0;
  for(var i=0;i<4;i++){
    var p=avail.indexOf(order[i]);
    if(p<0) return -1;
    idx=idx*(4-i)+p;
    avail.splice(p,1);
  }
  return idx;
}
function orderOfPermIndex(n){
  var avail=[0,1,2,3], order=[], facts=[6,2,1,1];
  for(var i=0;i<4;i++){
    var p=Math.floor(n/facts[i]);
    n-=p*facts[i];
    order.push(avail.splice(p,1)[0]);
  }
  return order;
}
/* Mint the v2 payload for the game just played, or null when
   the game cannot be carried (a slot without a canonical ref —
   a Legend game, a practice game, a save from an older build).
   Only the first 20 slots are encoded; the strict bit is read
   from the Q10 finale actually dealt (slot 10, index 9). */
function mintChallengeV2(){
  if(!state || !state.qs || state.qs.length<20) return null;
  var slots=[];
  for(var i=0;i<20;i++){
    var it=state.qs[i];
    if(!it || !it.ref || typeof it.ref.pool!=="string" || !isFinite(it.ref.idx)) return null;
    var perm="z";
    if(it.kind==="mc" && Array.isArray(it.shownOrder) && it.shownOrder.length===4){
      var pv=permIndexOf(it.shownOrder);
      if(pv>=0) perm=pv.toString(36);
    }
    slots.push(it.ref.pool + (it.ref.idx).toString(36) + perm);
  }
  var bit=(state.qs[9] && state.qs[9].strict) ? "1" : "0";
  return "v2."+bit+"."+slots.join(".");
}
/* Parse a v2 payload (the part after "v2.") into resolved
   slots, or null when anything in it cannot be honoured:
   wrong slot count, a malformed slot, an unresolvable
   reference, a question of the wrong type for its slot (a
   finale slot must name a typed question, the Round 4 slots
   multiple-choice questions, the rest multiple-choice), or a
   permutation value outside 0–23. Strictness here is the
   guarantee: a link that parses is the challenger's game,
   whole — never a partial reconstruction. */
function parseChallengeV2(payload){
  var parts=String(payload==null?"":payload).split(".");
  if(parts.length!==21) return null;
  if(parts[0]!=="0" && parts[0]!=="1") return null;
  var slots=[];
  for(var i=1;i<21;i++){
    var m=/^([A-Z][A-Z0-9])([0-9a-z]+)([0-9a-z])$/.exec(parts[i]);
    if(!m) return null;
    var item=challengeItemByRef(m[1], parseInt(m[2], 36));
    if(!item) return null;
    var pos=i-1, r=Math.floor(pos/5), k=pos%5;
    if(k===4){ if(item.type!=="typed") return null; }
    else if(item.type!=="mc") return null;
    var order=null;
    if(m[3]!=="z"){
      var pv=parseInt(m[3], 36);
      if(!(pv>=0 && pv<=23)) return null;
      if(k<4 && r<3) order=orderOfPermIndex(pv);
    }
    slots.push({item:item, order:order});
  }
  return {bit:(parts[0]==="1"), slots:slots};
}
/* Start the Gauntlet a v2 challenge link carries: rebuild the
   challenger's 20 from their references, by position — slots
   5/10/15/20 the wager finales (pts 0, strict [false, bit,
   !bit, true]), slots 17–20's round typed via mcToTyped on the
   referenced source (pts 40), the rest multiple choice at
   their round's points, each carrying its prescribed choice
   order where the link has one. Played as a normal challenge
   game at the link's pace. Returns false — having dealt
   nothing — when the payload cannot be honoured. */
function startChallengeGameV2(payload, pace){
  var parsed=parseChallengeV2(payload);
  if(!parsed) return false;
  var strictByRound=[false, parsed.bit, !parsed.bit, true];
  var qs=[];
  parsed.slots.forEach(function(slot, i){
    var r=Math.floor(i/5), k=i%5, ref=challengeRefOf(slot.item);
    if(k===4){
      qs.push({kind:"finale", data:slot.item, round:r, pts:0, strict:strictByRound[r], ref:ref});
    } else if(r===3){
      qs.push({kind:"typed", data:mcToTyped(slot.item), round:r, pts:ROUND_PTS[r], ref:ref});
    } else {
      var w={kind:"mc", data:slot.item, round:r, pts:ROUND_PTS[r], ref:ref};
      if(slot.order) w.shownOrder=slot.order;
      qs.push(w);
    }
  });
  setCoverPace(pace||"standard");
  pendingFlags={challenge:true, challengePayload:payload};
  startGame("gauntlet", qs);
  return true;
}
/* A v2 link that cannot be honoured lands here: the cover,
   with the failure stated plainly where the player can see it.
   No game is started and no saved game is touched. */
function showChallengeLoadFailure(){
  var note=$("challengeFailNote");
  if(note) note.classList.remove("hidden");
  show("screen-cover");
}

/* Start the Gauntlet a challenge link defines: re-install the
   seed so the deal starts from the same point in the stream on
   every device, build the deal with the seen-question memory
   bypassed and the strict finale taken from the stream, then
   play it as a normal Gauntlet at the link's pace, labelled as
   a challenge game. The seeded stream stays installed for the
   challenge game itself; the next ordinary start clears it. */
function startChallengeGame(seed, pace){
  installSeed(seed);
  dealBypassSeen=true; challengeDeal=true;
  var qs;
  try{ qs=buildGauntlet(); }
  finally{ dealBypassSeen=false; challengeDeal=false; }
  setCoverPace(pace||"standard");
  pendingFlags={challenge:true, seed:seed};
  startGame("gauntlet", qs);
}

/* Start an ordinary Gauntlet — the cover's Start Game button and
   Play again. The game's seed is generated HERE, at the moment
   the game starts: it is installed before the deal is built and
   handed to startGame in the pending flags so it is stored on
   the game (state.seed), ready for the results screen's
   "Challenge a friend" link. The deal itself is an ordinary
   deal: the seen-question memory is consulted (the 25-game
   cooldown — an ordinary Gauntlet must never bypass it; that
   bypass belongs to challenge-link deals only, see
   startChallengeGame) and the strict finale comes from the
   device alternation. The Sudden Death flag rides along
   untouched: a Sudden Death game is seeded the same way, and its
   rules are unchanged. */
function startSeededGauntlet(suddenDeath){
  var seed=newSeedString();
  installSeed(seed);
  var qs=buildGauntlet();
  pendingFlags={suddenDeath:!!suddenDeath, seeded:true, seed:seed};
  startGame("gauntlet", qs);
}

function startGame(mode, questions){
  stopTimer();
  var rawName=$("playerName").value.trim();
  state={
    mode:mode, qs:questions, idx:0, score:0, streak:0, bestStreak:0,
    /* The pace picked on the cover, locked in for the whole game
       (and for its saved score's board). */
    pace:coverPace,
    roundBank:0, history:[], name:rawName||"Player",
    timeUsed:0,
    /* True only when the cover name field was left empty, so the
       results screen can offer the post-game name field — and only
       then. A name typed at the cover needs no second chance. */
    startedNameless:!rawName, hsEntry:null, endedEarly:false,
    /* The player's chosen wager on the final Gauntlet question
       (Q20): null until the wager screen locks one in, then a
       whole-points amount from 0 (a 0 total has nothing to wager)
       up to the total at lock time. Practice games never set it. */
    finalWager:null,
    /* Bonus-round state (regular Gauntlet only): phase is "main"
       until a 1,000+ non-perfect finish appends the 5 bonus
       questions; bonusEarned tracks the bonus points banked so
       far (before Q5's doubling), bonusBase the pre-bonus total.
       A creator bonus game starts directly in the bonus phase
       instead: bonusBase is 0 (there is no Gauntlet total before
       it) and its intro shows first, exactly as an earned bonus
       round's intro does. */
    phase:(pendingFlags.creatorKind==="bonus" ? "bonus" : "main"),
    bonusEarned:0,
    bonusBase:(pendingFlags.creatorKind==="bonus" ? 0 : null),
    bonusDoubled:false,
    bonusIntro:(pendingFlags.creatorKind==="bonus"),
    /* Creator access (see the cover's hidden creator panel): a
       creator game is practice/test only — labelled Creator in
       play and on results, and never saved to any leaderboard,
       the Hall of Fame, or a backup. creatorKind is "bonus" for
       a direct bonus round and "legend" for a direct Legend
       Gauntlet; ordinary games carry neither flag. */
    creator:!!pendingFlags.creator, creatorKind:pendingFlags.creatorKind||null,
    /* Challenge a friend / Sudden Death (see pendingFlags): a
       challenge game is a normal Gauntlet dealt from the seed in
       the challenge link; a Sudden Death game is a normal Gauntlet
       that ends on the first wrong answer or timeout, with no
       Pass. suddenDeathOut flips when that ending happens. */
    challenge:!!pendingFlags.challenge, seed:pendingFlags.seed||null,
    /* A v2 challenge game carries its link payload (see
       CHALLENGE LINKS V2): Play again re-deals the identical
       game from it, the way a v1 challenge replays its seed. */
    challengePayload:pendingFlags.challengePayload||null,
    /* Daily Gauntlet (see the daily block above): dailyDate is the
       LOCAL date this daily belongs to — the date it was started —
       and it rides in the in-progress save, so a resumed daily
       still deals and counts for its start date. Ordinary games
       carry neither flag. */
    daily:!!pendingFlags.daily, dailyDate:pendingFlags.dailyDate||null,
    suddenDeath:!!pendingFlags.suddenDeath, suddenDeathOut:false,
    /* The reveal currently on screen for the current question, if
       it has been answered — saved with the in-progress game so a
       mid-reveal reload restores the reveal, not a fresh question. */
    lastReveal:null
  };
  /* The name this game starts under is the player's current
     name — remember it for the profile (Stage 1 helper; guarded
     like the other cross-block calls). A nameless start leaves
     any remembered name untouched. */
  if(typeof s1RememberPlayerName==="function") s1RememberPlayerName(rawName);
  /* The one-shot start flags are consumed. A seeded start — a
     challenge game, or an ordinary Gauntlet dealt from the seed
     generated when it started (see startSeededGauntlet) — keeps
     its seeded stream installed for the whole game, so the play
     itself draws from the same stream on every device. Any other
     start (practice, Legend) clears a seeded stream a previous
     game left installed, so those games are dealt at random
     exactly as before. */
  if(!pendingFlags.challenge && !pendingFlags.seeded && !pendingFlags.daily) installSeed(null);
  pendingFlags={};
  /* This start advances the games-started counter, and everything
     this game deals is stamped with that game's index — in every
     mode, whether the game is finished or quit — so no question
     it dealt can come around again for the next 25 games (see
     Seen-question memory). (A resumed game never passes through
     here; restoreProgress rebuilds its state directly, and its
     questions were stamped when dealt.) */
  if(state.daily){
    /* A Daily Gauntlet's DEAL stays isolated from the seen-question
       memory — it bypassed the cooldown and must come out identical
       on every device — and it still does not advance the
       games-started counter. But what it dealt is no longer
       invisible to the memory (owner ruling, 2026-11-13 — the
       recurring Au finale): its questions are stamped with the
       current counter, twins included, so a finale the Daily just
       dealt cannot immediately re-deal in a regular game, or the
       other way around on the next regular deal. The Daily's own
       future deals are unaffected — they bypass the memory as
       before. */
    markGameSeen(questions);
  } else {
    bumpGameCount();
    markGameSeen(questions);
  }
  show("screen-game");
  renderQuestion();
  /* Begin fetching this game's picture packs in the background
     while the player answers (skipped on slow connections). */
  prefetchGamePacks();
}

function finaleIsStrict(item){
  if(!item || item.kind!=="finale") return false;
  if(typeof item.strict==="boolean") return item.strict;
  /* Fallback for any finale built without an explicit flag: keep the
     same pattern — Round 1 forgiving, Round 4 strict, Q10 strict. */
  if(item.round===0) return false;
  if(item.round===3) return true;
  return item.round===1;
}

function stakeText(round){
  /* Sudden Death finales: same stakes, but there is no Pass to
     fall back on and a wrong answer ends the game on the spot. */
  if(state && state.suddenDeath && round===0) return "<b>DOUBLE OR NOTHING — SUDDEN DEATH.</b> Type the answer: right doubles your total, wrong wipes you to <b>nada</b> and ends the game on the spot. There is <b>no Pass</b> in Sudden Death. Round 1 is forgiving with people's names — a surname alone counts (just “Lenin”), and so does the name without its title (“Elizabeth II” for Queen Elizabeth II).";
  if(state && state.suddenDeath && round!==3) return "<b>WAGER FINALE — SUDDEN DEATH.</b> Type the answer: right doubles your total, wrong loses the <b>"+state.roundBank+" pts</b> you banked this round and ends the game on the spot. There is <b>no Pass</b> in Sudden Death.";
  if(round===0) return "<b>DOUBLE OR NOTHING.</b> Type the answer: right doubles your total, wrong wipes you to <b>nada</b>. Round 1 is forgiving with people's names — a surname alone counts (just “Lenin”), and so does the name without its title (“Elizabeth II” for Queen Elizabeth II). Not sure? Pass and keep your points.";
  if(round===3){
    /* Q20's stake is the player's own locked wager now, not an
       automatic double-or-nothing. The totals shown are the total
       at render time — the same total the wager was locked against,
       since nothing scores between the wager screen and Q20. */
    if(state && typeof state.finalWager==="number"){
      var w=state.finalWager, t=state.score;
      if(w<=0) return "<b>THE FINAL QUESTION.</b> Nothing is at stake — your total was 0, so no wager was placed. A right answer adds nothing and a wrong one takes nothing away. There is no Pass on the final question."+(state.suddenDeath ? " <b>SUDDEN DEATH:</b> a wrong answer ends the game." : "");
      return "<b>THE FINAL QUESTION — YOUR WAGER: "+w+" PTS.</b> Type the answer: right adds <b>"+w+" pts</b> (total "+(t+w)+"), wrong takes <b>"+w+" pts</b> away (total "+(t-w)+"). There is no Pass on the final question — and if the clock runs out, that counts as wrong and your wager is lost."+(state.suddenDeath ? " <b>SUDDEN DEATH:</b> a wrong answer ends the game with that post-wager total." : "");
    }
    return "<b>FINAL DOUBLE OR NOTHING.</b> Type the answer: right doubles your whole total, wrong wipes you to <b>nada</b>. There is no pass on the final question.";
  }
  return "<b>WAGER FINALE.</b> Type the answer: right doubles your total, wrong loses the <b>"+state.roundBank+" pts</b> you banked this round. You can pass and keep everything.";
}

/* ---- The final-question wager (Gauntlet Q20 only) ----
   After Q19 and before Q20 is shown, the player chooses how much
   of their total to stake on the final question. The wager screen
   deliberately shows NOTHING about Q20 — no prompt, no picture, no
   category pill — because a wager placed after seeing the question
   would be meaningless. Locking a wager re-renders, and only then
   does Q20 appear (picture and all), with the wager as its stake:
   correct adds the wager, wrong subtracts it. Q20 has no pass —
   the question renders no Pass button — and a timeout counts as
   a wrong answer and loses the wager, because a pass available
   after the wager is locked would make staking the maximum a
   free option. Wagering the whole total is exactly the old
   double-or-nothing. */
/* ---- The bonus-round intro (Gauntlet, 1,000+ non-perfect) ----
   Shown once, when the bonus questions have just been appended:
   it states the bonus rules up front - 5 pts each for the first
   four, nothing lost on a miss or a pass, and the fifth question
   doubling the bonus - before the first bonus question is asked.
   No clock runs on this screen. */
function renderBonusIntro(item){
  stopTimer();
  var wpill=$("timerPill");
  if(wpill){ wpill.textContent="⏱ —"; wpill.classList.remove("low"); }
  syncTimerRing(0, false); /* reskin: no clock runs on this screen */
  $("hudQ").textContent=(state.idx+1)+" / "+state.qs.length;
  $("hudRound").textContent="Bonus";
  $("hudScore").textContent=state.score;
  $("hudStreak").textContent=state.streak;
  $("qMeta").innerHTML='<span class="pill round">BONUS ROUND</span><span class="pill tier">SUPER HARD</span><span class="pill pts">5 QUESTIONS</span>'+(state.daily ? '<span class="pill tier">DAILY</span>' : '')+(state.creator ? '<span class="pill creator">CREATOR</span>' : '');
  $("qMedia").innerHTML="";
  if(state.creator){
    $("qText").textContent="Creator bonus round!";
    $("qStake").innerHTML='<div class="stakebox"><b>CREATOR BONUS ROUND — SUPER HARD.</b> Creator access started this bonus round directly — no 1,000-point Gauntlet needed. Five Super Hard typed questions — a tier above the regular game\'s Very Hard — spelling counts, on the Round 4 clock. The first four are worth <b>5 pts</b> each — wrong answers and passes cost nothing. The fifth question is the <b>doubler</b>: get it right and the bonus points you earned <b>double</b>; miss it and you keep them. This creator game is practice only and will not be saved.</div>';
  } else {
    $("qText").textContent="You cleared 1,000 — bonus round!";
    $("qStake").innerHTML='<div class="stakebox"><b>BONUS ROUND — SUPER HARD.</b> Your total is <b>'+state.score+' pts</b>. Five Super Hard typed questions — a tier above the regular game\'s Very Hard — spelling counts, on the Round 4 clock. The first four are worth <b>5 pts</b> each, added to your total — wrong answers and passes cost nothing. The fifth question is the <b>doubler</b>: get it right and the bonus points you earned <b>double</b>; miss it and you keep them.</div>';
  }
  var rb=$("revealBox"); rb.className="reveal"; rb.innerHTML="";
  $("nextRow").classList.remove("show");
  $("qAnswerArea").innerHTML='<button type="button" class="btn primary" id="bonusStartBtn">Start bonus round →</button>';
  $("bonusStartBtn").addEventListener("click", function(){ state.bonusIntro=false; saveProgress(); renderQuestion(); });
  renderDots();
  renderProgHead(null, "Answered "+state.history.length+" of "+state.qs.length);
  saveProgress();
}
function renderWagerScreen(item){
  stopTimer();
  var wpill=$("timerPill");
  if(wpill){ wpill.textContent="⏱ —"; wpill.classList.remove("low"); }
  syncTimerRing(0, false); /* reskin: no clock runs on this screen */
  var total=state.score;
  $("hudQ").textContent=(state.idx+1)+" / "+state.qs.length;
  $("hudRound").textContent=item.round+1;
  $("hudScore").textContent=total;
  $("hudStreak").textContent=state.streak;
  $("qMeta").innerHTML='<span class="pill round">'+(state.mode==="legend" ? "Legend · "+legendRoundName(item) : ROUND_NAMES[item.round])+'</span><span class="pill pts">FINAL WAGER</span>'+(state.daily ? '<span class="pill tier">DAILY</span>' : '')+(state.creator ? '<span class="pill creator">CREATOR</span>' : '');
  $("qMedia").innerHTML="";
  $("qText").textContent="One question left — the final.";
  $("qStake").innerHTML='<div class="wagerhead" aria-hidden="true"><span class="stars">★ FINAL ROUND ★</span><span class="main">MAKE YOUR WAGER!</span></div><div class="stakebox">'+(state.mode==="legend" ? '<b>GENIUS LEVEL.</b> This is the Legend Gauntlet\'s final question — the top of the ladder. ' : '')+'<b>CHOOSE YOUR WAGER.</b> The final question stays hidden until your wager is locked — no peeking, then betting. Your total is <b>'+total+' pts</b>. Get it right and your wager is <b>added</b> to your total; get it wrong and it is <b>taken away</b>. There is no Pass on the final question, and if the clock runs out that counts as wrong — your wager is lost. The final question is typed-in, and <b>SPELLING COUNTS</b> on it.</div>';
  var rb=$("revealBox"); rb.className="reveal"; rb.innerHTML="";
  $("nextRow").classList.remove("show");
  var area=$("qAnswerArea");
  if(total<=0){
    /* A 0 total has nothing to stake — say so plainly and play
       Q20 with 0 at stake rather than inventing points. */
    area.innerHTML='<p class="wagernote">Your total is 0, so there is nothing to wager. The final question still plays, with 0 points at stake: a right answer adds nothing, and a wrong one can\'t take anything away.</p>'+
      '<button type="button" class="btn sun" id="wagerNone">Play the final question →</button>'+
      '<div class="leaverow"><button type="button" class="btn ghost leavebtn">Leave</button></div>';
    $("wagerNone").addEventListener("click", function(){ lockWager(item, 0); });
  } else {
    var half=Math.floor(total/2);
    area.innerHTML='<div class="wagerpresets">'+
      '<button type="button" class="btn primary" id="wagerAll">All in — wager '+total+' pts<small>Right: '+(total+total)+' total · Wrong: 0 — the old double-or-nothing</small></button>'+
      (half>=1 ? '<button type="button" class="btn sun" id="wagerHalf">Half — wager '+half+' pts<small>Right: '+(total+half)+' total · Wrong: '+(total-half)+' total</small></button>' : "")+
      '</div>'+
      '<p class="wageror">Or name your own amount:</p>'+
      '<div class="wagerrow">'+
      '<input id="wagerInput" type="text" inputmode="numeric" autocomplete="off" placeholder="1 to '+total+' pts" aria-label="Custom wager, in points" />'+
      '<button type="button" class="btn teal" id="wagerCustom">Lock in wager</button>'+
      '</div>'+
      '<p class="wagererr" id="wagerErr" role="alert"></p>'+
      '<div class="leaverow"><button type="button" class="btn ghost leavebtn">Leave</button></div>';
    $("wagerAll").addEventListener("click", function(){ lockWager(item, total); });
    if(half>=1) $("wagerHalf").addEventListener("click", function(){ lockWager(item, half); });
    $("wagerCustom").addEventListener("click", function(){ submitCustomWager(item, total); });
    $("wagerInput").addEventListener("keydown", function(e){ if(e.key==="Enter") submitCustomWager(item, total); });
  }
  renderDots();
  renderProgHead(null, "Answered "+state.history.length+" of "+state.qs.length);
  saveProgress();
}
function submitCustomWager(item, total){
  var raw=$("wagerInput").value.trim();
  var err=$("wagerErr");
  /* Whole points only, 1 to the current total inclusive: 0,
     negatives, decimals, non-numeric input, and anything above
     the total are all rejected with a plain reason, and the
     wager stays unlocked so the player can try again. */
  if(!/^\d+$/.test(raw)){
    err.textContent = raw==="" ? "Type how many points you want to wager first." : "Whole points only — digits only, no decimals, signs, or letters.";
    return;
  }
  var v=parseInt(raw,10);
  if(v<1){ err.textContent="Your wager has to be at least 1 point."; return; }
  if(v>total){ err.textContent="You can't wager more than your total of "+total+" pts."; return; }
  lockWager(item, v);
}
function lockWager(item, amount){
  state.finalWager=amount;
  item.wagerAmount=amount;
  renderQuestion();
}

/* Picture credits name the subject — the film, the painter, the
   place — so showing the full credit while a picture question is
   being answered prints the answer right under the photo (a Round 4
   typed movie still gave its title away for free). While answering,
   only a generic credit shows. The full specific credit, with its
   source link, is revealed in the feedback once the answer is
   locked in, passed, or timed out (see finishReveal), and again in
   the end-of-game review. Attribution is never removed — it is
   simply not shown early enough to spoil the question. */
function genericCredit(q){
  var what={"Famous Faces":"Portrait photo","Landmarks":"Landmark photo",
    "World Flags":"Flag photo","US State Flags":"State flag photo","Map Shapes":"Outline map",
    "Paintings":"Artwork reproduction","Movie Stills":"Movie still"}[q.cat]||"Photo";
  return what+" — full photo credit appears once you've answered.";
}
function fullCreditHtml(q){
  return "Photo: "+escapeHtml(q.credit)+(q.page?' · <a href="'+escapeHtml(q.page)+'" target="_blank" rel="noopener">source</a>':"");
}

function renderQuestion(){
  locked=false;
  qClockAllotted=null; qClockSettled=true;
  /* A new render supersedes any picture still loading for the
     previous one (see holdTimerForPicture). */
  picRenderSeq++;
  /* Every new question starts at the top of the page, so a picture
     question's photo is on screen from the start instead of the
     player landing mid-card where the previous question left off. */
  window.scrollTo(0,0);
  var item=state.qs[state.idx];
  var q=item.data;
  /* The first bonus question is preceded by the bonus intro,
     which states the bonus rules (and the Q5 doubler) up front. */
  if(item.kind==="bonus" && state.bonusIntro){ state.settleRestoredTimeout=false; renderBonusIntro(item); return; }
  /* The final Gauntlet question (Q20) is preceded by the player's
     own wager: until a wager is locked, the wager screen shows
     instead — Q20's prompt, picture, and category all stay hidden,
     or the bet would be placed with the answer already in view. */
  if(isJackpotMode(state.mode) && item.kind==="finale" && item.round===3 &&
     state.idx===state.qs.length-1 && state.finalWager===null){
    state.settleRestoredTimeout=false;
    renderWagerScreen(item);
    return;
  }
  /* No-choices guard: a multiple-choice question whose choices are
     missing or short must never render as a bare question with no
     way to answer. Repair it from its own category first; if it
     still cannot be repaired but carries an answer, present it as
     a typed question instead — an answer control always appears. */
  if(q.type==="mc" && !mcChoicesValid(q)){
    fixMCQuestion(q);
    if(!mcChoicesValid(q) && typeof q.answer==="string" && q.answer){
      /* A chemical symbol/formula question keeps exact judging in
         this typed fallback form too — a symbol is a code, not a
         spelling, so it must never get a sound-alike rescue. */
      var symExact=/chemical (symbol|formula)/i.test(q.q);
      var tq={type:"typed", q:q.q, answer:q.answer, accept:q.accept||[], exact:symExact, rule:symExact?"Chemical symbol — spelling must be exact.":"", fact:q.fact||""};
      if(q.img){ tq.img=q.img; tq.cat=q.cat; tq.credit=q.credit; tq.page=q.page; }
      else if(q.cat){ tq.cat=q.cat; }
      /* The fallback typed form states its expected answer form
         like any other typed question (see withTypedForm). */
      tq.q=withTypedForm(tq);
      item.data=tq; q=tq;
    }
  }
  var isFinale=item.kind==="finale";
  /* A fresh round starts with an empty round bank — but a question
     restored mid-reveal after a reload keeps the bank it had. */
  if(isJackpotMode(state.mode) && state.idx%5===0 && state.history.length<=state.idx) state.roundBank=0;

  $("hudQ").textContent=(state.idx+1)+" / "+state.qs.length;
  $("hudRound").textContent= item.kind==="bonus" ? "Bonus" : (isJackpotMode(state.mode) ? (item.round+1) : "—");
  $("hudScore").textContent=state.score;
  $("hudStreak").textContent=state.streak;

  /* meta pills */
  var meta="";
  if(item.kind==="bonus") meta+='<span class="pill round">BONUS ROUND</span><span class="pill tier">SUPER HARD</span>';
  else if(isJackpotMode(state.mode)) meta+='<span class="pill round">'+(state.mode==="legend" ? "Legend · "+legendRoundName(item) : ROUND_NAMES[item.round])+"</span>";
  else meta+='<span class="pill round">Practice</span>';
  if(isFinale) meta+='<span class="pill pts">WAGER</span>';
  else if(item.kind==="bonus") meta+='<span class="pill pts">'+(item.bonusIdx<4 ? "5 PTS" : "DOUBLER")+'</span>';
  else meta+='<span class="pill pts">'+item.pts+' PTS</span>';
  meta+='<span class="pill cat">'+escapeHtml(q.cat||"General Knowledge")+"</span>";
  if(state.challenge) meta+='<span class="pill tier">CHALLENGE</span>';
  if(state.daily) meta+='<span class="pill tier">DAILY</span>';
  if(state.suddenDeath) meta+='<span class="pill exact">SUDDEN DEATH</span>';
  if(state.creator) meta+='<span class="pill creator">CREATOR</span>';
  var isGauntletFinale = isJackpotMode(state.mode) && isFinale;
  var finaleStrict = isGauntletFinale ? finaleIsStrict(item) : !!q.exact;
  var round4Typed = (state.mode==="gauntlet" || state.mode==="daily") && item.round===3 && q.type==="typed";
  var legendTyped = state.mode==="legend" && !isFinale && q.type==="typed";
  var bonusTyped = item.kind==="bonus";
  if((isFinale && finaleStrict) || round4Typed || legendTyped || bonusTyped) meta+='<span class="pill exact">SPELLING COUNTS</span>';
  $("qMeta").innerHTML=meta;

  /* media */
  var media="";
  if(q.img){
    /* The picture itself is swapped in by holdTimerForPicture once
       its ZIP pack has been fetched and unzipped — until then a
       loading placeholder stands where it will appear, and the
       question clock has not started. */
    media='<div class="qimgload" id="qImgLoad" role="status">Loading picture\u2026</div>'+
      (q.credit?'<p class="credit" id="qCredit">'+genericCredit(q)+"</p>":"");
  }
  $("qMedia").innerHTML=media;

  $("qText").textContent=q.dq||q.q;
  var spellingNote="";
  if(isFinale){
    if(isGauntletFinale && finaleStrict){
      spellingNote = q.rule ? " <b>SPELLING COUNTS. "+q.rule+"</b>" : " <b>SPELLING COUNTS — spelling must be exact on this finale.</b>";
    } else if(isGauntletFinale && item.round===0){
      spellingNote = " <b>Round 1 is easy — spelling doesn't count here; sound-alike answers score, and partial names count: a surname alone, or the name without its title, is enough.</b>";
    } else if(isGauntletFinale){
      spellingNote = " <b>Spelling doesn't count on this finale — sound-alike answers score.</b>";
    } else if(q.rule){
      spellingNote = " <b>"+q.rule+"</b>";
    }
  }
  var stakeHtml="";
  if(isFinale) stakeHtml='<div class="stakebox">'+stakeText(item.round)+spellingNote+"</div>";
  else if(item.kind==="bonus"){
    stakeHtml = item.bonusIdx<4
      ? '<div class="stakebox"><b>BONUS ROUND — QUESTION '+(item.bonusIdx+1)+' OF 5 · SUPER HARD.</b> Type the answer. <b>SPELLING COUNTS.</b> Correct scores <b>5 pts</b> added to your total; wrong or a pass scores nothing and loses nothing.</div>'
      : '<div class="stakebox"><b>BONUS DOUBLER — FINAL BONUS QUESTION · SUPER HARD.</b> Your bonus so far is <b>'+state.bonusEarned+' pts</b>. Answer right and it <b>doubles to '+(state.bonusEarned*2)+' pts</b>. Answer wrong, pass, or run out of time and you keep '+state.bonusEarned+' pts. This question adds no points of its own.</div>';
  }
  else if(round4Typed) stakeHtml = state.suddenDeath
    ? '<div class="stakebox"><b>ROUND 4 — TYPED-IN &amp; STRICT · SUDDEN DEATH.</b> No choices here: type the answer. <b>SPELLING COUNTS — spelling must be exact.</b> A correct answer scores 40 pts. There is <b>no Pass</b> in Sudden Death: a wrong answer or a timeout ends the game and costs the points banked this round.</div>'
    : '<div class="stakebox"><b>ROUND 4 — TYPED-IN &amp; STRICT.</b> No choices here: type the answer. <b>SPELLING COUNTS — spelling must be exact.</b> A correct answer scores 40 pts; a wrong answer scores nothing. You can Pass to reveal the answer for no points — and a timeout counts as a pass.</div>';
  else if(legendTyped) stakeHtml='<div class="stakebox"><b>LEGEND · '+legendTierName(item).toUpperCase()+' — TYPED-IN &amp; STRICT.</b> No choices here: type the answer. <b>SPELLING COUNTS — spelling must be exact.</b> A correct answer scores '+item.pts+' pts; a wrong answer scores nothing. You can Pass to reveal the answer for no points — and a timeout counts as a pass.</div>';
  else if(q.type==="typed") stakeHtml='<div class="stakebox"><b>TYPED QUESTION.</b> This one has no choices — type your answer below. You can Pass to reveal the answer for no points.</div>';
  $("qStake").innerHTML=stakeHtml;

  var area=$("qAnswerArea");
  var rb=$("revealBox"); rb.className="reveal"; rb.innerHTML="";
  $("nextRow").classList.remove("show");

  /* The branches below record the clock they need instead of
     starting it outright: on a picture question the start is
     deferred until the picture is on screen (further down). */
  var timerPlan=null;
  if(q.type==="mc"){
    /* The display order of the choices. A question carrying a
       prescribed order — a v2 challenge reconstruction (see
       CHALLENGE LINKS V2) — shows exactly that order; every
       other question shuffles as it always has. Either way the
       order actually shown is recorded on the item, so a
       challenge link minted from this game carries the order
       this player saw. (A resumed question re-renders and
       re-records: the latest showing is the one the player
       played.) */
    var order=(Array.isArray(item.shownOrder) && item.shownOrder.length===q.choices.length)
      ? item.shownOrder.slice()
      : shuffle(q.choices.map(function(_,i){return i;}));
    item.shownOrder=order;
    var html='<div class="choices" role="group">';
    order.forEach(function(ci, pos){
      html+='<button type="button" class="choice" data-ci="'+ci+'"><span class="key">'+"ABCD"[pos]+"</span><span>"+escapeHtml(q.choices[ci])+"</span></button>";
    });
    html+="</div>";
    area.innerHTML=html;
    var btns=area.querySelectorAll(".choice");
    btns.forEach(function(b){
      b.addEventListener("click", function(){ answerMC(item, parseInt(b.getAttribute("data-ci"),10), btns); });
    });
    timerPlan={secs:paceTimes().mc, cb:function(){ if(!locked) timeoutMC(item, btns); }};
  } else {
    /* Q20 — the final Gauntlet question, played for the player's
       locked wager — has NO Pass button: with a pass available
       after the wager is locked, staking the maximum would be a
       free option and the wager choice meaningless. Every other
       typed question keeps its Pass. In Pass's spot, Q20 carries
       the Leave button — its only exit besides answering or the
       clock, and one that costs the wager (see QUIT & LEAVE). */
    var isQ20Final = isJackpotMode(state.mode) && isFinale && item.round===3;
    /* Sudden Death renders no Pass button on any question: a pass
       would dodge the one-miss-and-out risk the mode is built on. */
    var noPass = isQ20Final || !!state.suddenDeath;
    area.innerHTML=
      '<label class="typedlabel" for="typedInput">Type your answer — this question has no choices</label>'+
      '<div class="typedrow">'+
      '<input id="typedInput" type="text" placeholder="Type your answer…" autocomplete="off" />'+
      '<button type="button" class="btn sun" id="typedSubmit">Lock it in</button>'+
      (noPass ? "" : '<button type="button" class="btn ghost" id="passBtn">'+(isFinale ? "Pass — keep my points" : "Pass")+'</button>')+
      (isQ20Final ? '<button type="button" class="btn ghost leavebtn">Leave</button>' : "")+
      "</div>";
    typedUserHold=false;
    var input=$("typedInput"); input.focus();
    /* Keyboard clearance: while the answer field is focused, mark
       the page keyboard-open (extra bottom room, see CSS) and, once
       the keyboard has had a moment to slide up, scroll the whole
       answer row — input, Lock it in, Pass — into view above it. */
    input.addEventListener("focus", function(){ typedUserHold=false; document.body.classList.add("kbopen"); scheduleTypedScroll(); });
    input.addEventListener("blur", function(){ document.body.classList.remove("kbopen"); });
    setTimeout(scrollTypedIntoView, 450);
    $("typedSubmit").addEventListener("click", function(){ answerTyped(item, input.value, false); });
    input.addEventListener("keydown", function(e){ if(e.key==="Enter") answerTyped(item, input.value, false); });
    /* Every typed-in question has a Pass button — Gauntlet finales
       Q5/Q10/Q15, Round 4 Q16–Q19, and typed questions in any other
       round — except Q20, which renders no Pass button at all. */
    var passBtnEl=$("passBtn");
    if(passBtnEl) passBtnEl.addEventListener("click", function(){ answerTyped(item, "", true); });
    /* Legend clock: regular questions (Rounds 1-3) run on the
       faster regular clock; Round 4 and the finales run on the
       typed clock. Every other mode's typed questions use the
       typed clock as always (bonus questions included - they
       run on the Round 4 clock, which is the typed clock). */
    var typedSecs=paceTimes().typed;
    if(state.mode==="legend" && !isFinale && item.round<3) typedSecs=paceTimes().mc;
    timerPlan={secs:typedSecs, cb:function(){
      if(locked) return;
      /* A timeout counts as a pass on every passable typed
         question — but Q20 has no pass: there, running out of
         time counts as a WRONG answer and loses the wager. The
         same holds for every question in Sudden Death, which
         has no Pass anywhere: a timeout is a wrong answer and
         ends the game. */
      if(isQ20Final || state.suddenDeath) answerTyped(item, "", false, true);
      else answerTyped(item, "", true, true);
    }};
  }
  /* The clock waits for the picture: on a picture question the
     timer starts only once the picture is on screen (or its load
     has failed and the player has been told) — never while the
     picture is still downloading. Text questions start their clock
     exactly as they always have. */
  if(q.img) holdTimerForPicture(q, timerPlan);
  else if(timerPlan) startTimer(timerPlan.secs, timerPlan.cb);
  renderDots();
  renderProgHead(item);
  saveProgress();
  /* A game restored after a reload may land on a question that was
     already answered — put its reveal back instead of letting it
     be answered twice. */
  if(state.history.length===state.idx+1 && state.lastReveal) applyRestoredReveal(item);
  /* RESUME-TIMEOUT settle: restoreProgress flagged a question
     that was live and unanswered when the previous session ended.
     Settle it right now through the very paths the running clock
     would have fired — timeoutMC for a choices question, the
     timer's own callback for a typed one — so every consequence
     is the game's own: a pass on a passable typed question, the
     wager lost on Q20, Sudden Death over, the bonus doubler
     kept. The clock is first wound to zero with the question's
     full allotment on record, so the settled question counts its
     full allotted time, exactly like a live timeout. Play then
     continues from the reveal's Next button, and the next
     question gets its normal full clock. */
  if(state.settleRestoredTimeout){
    state.settleRestoredTimeout=false;
    if(timerPlan && state.history.length===state.idx){
      qClockAllotted=timerPlan.secs; qClockSettled=false;
      timeTotal=timerPlan.secs; timeLeft=0;
      if(q.type==="mc") timeoutMC(item, btns);
      else timerPlan.cb();
    }
  }
}

function escapeHtml(s){
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}
/* Progress is the ONE bar in the sticky header — there are no
   progress dots anywhere (the 20-dot rows wrapped to a second
   line on phone widths and were duplicated at the bottom of the
   card). This only moves the single bar's fill. */
function renderDots(){
  var total=state.qs.length;
  var pf=$("progFill");
  if(pf) pf.style.width=(total ? Math.round(state.history.length/total*100) : 0)+"%";
  var pb=$("progBar");
  if(pb){
    pb.setAttribute("aria-valuemax", total);
    pb.setAttribute("aria-valuenow", state.history.length);
  }
}
/* The sticky header's single progress line: a short answered-count
   label, the one progress bar, and the countdown pill — all on one
   line that never wraps. Round, question number, points and streak
   live in the HUD cells above it, and the question's points and
   category live in the card's pills, so the label stays short. The
   wager screen passes its own short label so nothing about the
   hidden final question leaks into the header. */
function renderProgHead(item, overrideText){
  if(!state) return;
  var total=state.qs.length, txt;
  if(typeof overrideText==="string") txt=overrideText;
  else if(item) txt="Answered "+state.history.length+" of "+total;
  else txt="";
  var pm=$("progMeta"); if(pm) pm.textContent=txt;
  renderDots();
}
function explainFor(q){
  if(!q) return "";
  var ans = q.type==="typed" ? q.answer : (Array.isArray(q.choices) ? q.choices[q.a] : q.answer);
  if(typeof ans!=="string" || !ans.trim()) return "";
  var extra=EXPLAIN_EXTRA[norm(djRawClue(q))+"|"+norm(ans)];
  if(extra) return extra;
  var text=String(q.q||"");
  var m;
  if(text.indexOf("Trivia Clue:")!==0){
    m=text.match(/capital of\s+([^?]+?)\s*\??\s*$/i);
    if(m) return ans+" is the capital of "+m[1].trim()+".";
  }
  var raw=djRawClue(q).trim();
  if(/^fear of\s/i.test(ans) && raw && !/\s/.test(raw))
    return raw+" is the "+ans+".";
  m=raw.match(/^(.*?)\s+is (?:the )?fear of$/i);
  if(m) return m[1]+" is the fear of "+ans+".";
  /* "stands for" questions: the question names the abbreviation,
     the answer is its expansion — the sentence is the pair itself. */
  m=text.match(/['\u2018\u2019"]?([A-Z][A-Z0-9]{1,5})['\u2018\u2019"]?\s+stands for/i);
  if(m) return m[1]+" stands for "+ans+".";
  /* A DJ capital clue in the sheet's shorthand ("Capital of
     n ireland", "Cap of nova scotia"): the same capital relation,
     stated with the clue's own words for the place. */
  m=raw.match(/^cap(?:ital)? of (.+)$/i);
  if(m) return ans+" is the capital of "+m[1].trim()+".";
  if(q.img){
    if(q.cat==="World Flags") return "The flag pictured is the national flag of "+ans+".";
    if(q.cat==="US State Flags") return "The flag pictured is the state flag of "+ans+".";
    if(q.cat==="Map Shapes") return "The outline pictured is the shape of "+ans+".";
    if(q.cat==="Famous Faces") return "The person pictured is "+ans+".";
    if(q.cat==="Landmarks") return "The landmark pictured is "+ans+".";
    if(q.cat==="Paintings") return "The painting pictured is "+ans+".";
    if(q.cat==="Movie Stills") return "The still pictured is from the film "+ans+".";
  }
  /* Completion prompts ("… is called…", "refers to a court's…"):
     the question is a statement with one slot, and the fact it
     encodes is exactly the statement completed by its verified
     answer — so the explanation is that completed statement,
     nothing added. (An authored fact, where one exists, is used
     instead: it is checked first, just below.) */
  if(q.fact) return q.fact;
  var ei=text.indexOf("\u2026");
  if(ei>-1){
    var before=text.slice(0,ei).trim();
    var after=text.slice(ei+1).replace(/\?+\s*$/,"").trim();
    var fill=ans;
    if(before && !/[.!?]$/.test(before) && /^[A-Z][a-z]/.test(fill) && !/^[A-Z][a-z]+ [A-Z]/.test(fill))
      fill=fill.charAt(0).toLowerCase()+fill.slice(1);
    var joined=(before+" "+fill+(after?" "+after:"")).replace(/\s+/g," ").trim();
    if(joined && !/[.!?]$/.test(joined)) joined+=".";
    if(joined) return joined;
  }
  return "";
}

function finishReveal(item, status, yourAnswer, pointsNote){
  var q=item.data;
  /* Freeze the clock the moment the answer is locked in. Every
     reveal — multiple-choice, typed, pass, timeout, and a reveal
     restored after a reload — passes through this one funnel, so
     stopping the timer here (and re-rendering the pill from the
     frozen timeLeft) guarantees the countdown never keeps ticking
     over the feedback, in any mode, pace, or round. The pill is
     never hidden or removed: it stays on screen showing the same
     frozen value after a wrong answer as after a correct one. */
  stopTimer();
  renderTimer();
  /* Time used for THIS question lands here — the one funnel every
     settled answer passes through (multiple-choice, typed, pass,
     timeout, picture auto-award): allotted minus the seconds left
     when the answer locked in, clamped to the allotment, so a
     timeout counts the full allotted time and a pass counts the
     time elapsed until the pass. A picture auto-award never
     started a clock (qClockAllotted is null) and counts 0. A
     reveal restored after a reload re-enters with sfxSilent set
     and must not count its question a second time — the total
     it was saved with already includes it. */
  if(!sfxSilent && state && !qClockSettled){
    qClockSettled=true;
    var qUsed=(typeof qClockAllotted==="number" && qClockAllotted>0)
      ? Math.max(0, Math.min(qClockAllotted, qClockAllotted-Math.max(0, timeLeft)))
      : 0;
    state.timeUsed=(typeof state.timeUsed==="number" && isFinite(state.timeUsed) ? state.timeUsed : 0)+qUsed;
  }
  var rb=$("revealBox");
  rb.classList.add("show");
  var head, cls;
  if(status==="correct"){ head="✓ CORRECT!"; cls="good"; }
  else if(status==="pass"){ head="⏭ PASSED"; cls="pass"; }
  else { head="✗ NADA!"; cls="bad"; }
  rb.className="reveal show "+cls;
  var html='<span class="big">'+head+"</span>";
  html+='<span class="ans">Correct answer: <b>'+escapeHtml(q.type==="mc"?q.choices[q.a]:q.answer)+"</b></span>";
  if(yourAnswer!==null && yourAnswer!==undefined && yourAnswer!=="")
    html+="<br>Your answer: "+escapeHtml(yourAnswer);
  if(pointsNote) html+="<br><span class=\"ptsnote\">"+pointsNote+"</span>";
  /* The brief why, under the correct answer — reveal-only, never
     rendered before the answer is settled (see explainFor). */
  var why=explainFor(q);
  if(why) html+='<span class="why"><b>Why this is right:</b> '+escapeHtml(why)+"</span>";
  if(q.fact && q.fact!==why) html+="<br><i>"+escapeHtml(q.fact)+"</i>";
  rb.innerHTML=html;
  /* The answer is settled now, so the picture's full credit — which
     names the subject — can finally be shown under the photo. */
  var cel=$("qCredit");
  if(cel && q.credit) cel.innerHTML=fullCreditHtml(q);
  $("hudScore").textContent=state.score;
  $("hudStreak").textContent=state.streak;
  renderDots();
  /* The reveal is a real game event: remember it and mirror the
     in-progress game, so a reload right now restores this reveal. */
  state.lastReveal={status:status, yourAnswer:(yourAnswer===undefined?null:yourAnswer), note:pointsNote||""};
  renderProgHead(item);
  saveProgress();
  /* Sudden Death: a wrong answer (or a timeout, which counts as
     one there) ends the game on this reveal — the button below
     goes straight to the final score, whatever question this was.
     Idempotent, so a reveal restored after a reload re-marks it. */
  if(state.suddenDeath && status==="wrong") state.suddenDeathOut=true;
  var isLast = state.idx>=state.qs.length-1;
  var bonusNext = isLast && bonusEligible();
  $("nextBtn").textContent = state.suddenDeathOut ? "See final score →" : (bonusNext ? "Bonus round →" : (isLast ? "See final score →" : "Next question →"));
  $("nextRow").classList.add("show");
  $("nextBtn").focus();
  /* The reveal's sound: every settled answer — multiple-choice,
     typed, timeout — funnels through here, so this is the one
     place sounds are picked. Wager finales (and the bonus
     doubler) get the bigger win/lose runs; passes stay quiet. A
     reveal re-shown after a reload (sfxSilent) plays nothing. */
  if(!sfxSilent){
    if(status==="correct"){
      if(item.kind==="finale" || (item.kind==="bonus" && item.bonusIdx>=4)) sfxWagerWin();
      else sfxCorrect();
    } else if(status==="wrong"){
      if(item.kind==="finale") sfxWagerLose();
      else sfxWrong();
    }
  }
}

function record(item, status, yourAnswer){
  state.history.push({item:item, status:status, yourAnswer:yourAnswer});
}

function answerMC(item, chosenIdx, btns){
  if(locked) return; locked=true; stopTimer();
  var q=item.data;
  /* Accent equivalence: a pick that differs from the stored answer
     only by accents/diacritics or case IS the correct answer —
     "Emily Brontë" picked against a stored "Emily Bronte" scores,
     and lights up as correct, never as a wrong twin. (Duplicate
     checks now keep such a twin out of dealt sets in the first
     place; this covers sets saved by an older build and resumed.) */
  var ok = chosenIdx===q.a ||
    (Array.isArray(q.choices) && q.choices[chosenIdx]!==undefined && q.choices[q.a]!==undefined &&
     norm(foldAccents(q.choices[chosenIdx]))===norm(foldAccents(q.choices[q.a])));
  btns.forEach(function(b){
    b.disabled=true;
    var ci=parseInt(b.getAttribute("data-ci"),10);
    if(ci===q.a || (ok && ci===chosenIdx)) b.classList.add("correct");
    else if(ci===chosenIdx) b.classList.add("wrong");
    else b.classList.add("dim");
  });
  var note="";
  if(ok){
    state.score+=item.pts; if(state.mode==="gauntlet" || state.mode==="daily") state.roundBank+=item.pts;
    state.streak++; state.bestStreak=Math.max(state.bestStreak,state.streak);
    note="+"+item.pts+" points.";
  } else {
    state.streak=0;
    /* Sudden Death: a wrong regular answer costs the points
       banked this round — the saved score is the secured total —
       and ends the game (finishReveal sends Next to results). */
    if(state.suddenDeath && isJackpotMode(state.mode)){
      var sdRb=state.roundBank||0;
      if(sdRb>0){ state.score=Math.max(0, state.score-sdRb); note="Sudden Death — wrong. The "+sdRb+" pts banked this round are lost; your secured total is "+state.score+"."; }
      else note="Sudden Death — wrong. Your secured total is "+state.score+".";
    } else note="No points this time.";
  }
  record(item, ok?"correct":"wrong", q.choices[chosenIdx]);
  finishReveal(item, ok?"correct":"wrong", q.choices[chosenIdx], note);
}
function timeoutMC(item, btns){
  if(locked) return; locked=true; stopTimer();
  var q=item.data;
  btns.forEach(function(b){
    b.disabled=true;
    var ci=parseInt(b.getAttribute("data-ci"),10);
    if(ci===q.a) b.classList.add("correct"); else b.classList.add("dim");
  });
  state.streak=0;
  /* A timeout is a wrong answer — in Sudden Death it also costs
     the round's banked points and ends the game, like any miss. */
  var tNote="The clock got you — no points.";
  if(state.suddenDeath && isJackpotMode(state.mode)){
    var sdTRb=state.roundBank||0;
    if(sdTRb>0){ state.score=Math.max(0, state.score-sdTRb); tNote="Time's up — that counts as wrong in Sudden Death. The "+sdTRb+" pts banked this round are lost; your secured total is "+state.score+"."; }
    else tNote="Time's up — that counts as wrong in Sudden Death. Your secured total is "+state.score+".";
  }
  record(item, "wrong", "(time ran out)");
  finishReveal(item, "wrong", "Time ran out", tNote);
}

function answerTyped(item, value, isPass, isTimeout){
  if(locked) return; locked=true; stopTimer();
  var q=item.data;
  var input=$("typedInput"); if(input) input.disabled=true;
  var sb=$("typedSubmit"); if(sb) sb.disabled=true;
  var pb=$("passBtn"); if(pb) pb.disabled=true;

  var isFinaleItem = item.kind==="finale";
  /* Q20 — the final question, played for the player's locked
     wager — cannot be passed: it renders no Pass button, and a
     timeout there counts as a WRONG answer that loses the wager
     (never below 0), exactly like a wrong typed answer. A pass
     after the wager is locked would make staking the maximum a
     free option, so the pass branch below never runs for it. */
  var isFinalWagerItem = isJackpotMode(state.mode) && isFinaleItem && item.round===3 && typeof state.finalWager==="number";
  /* Sudden Death never passes: it renders no Pass button, and a
     timeout there counts as a WRONG answer (settled by the
     judging branches below, wager consequences and all), so the
     pass branch is closed to it entirely. */
  if((isPass || isTimeout) && !isFinalWagerItem && !state.suddenDeath){
    /* Every other typed-in question can be passed — by tapping
       Pass, or by timing out. A pass never touches the score, the
       streak, or the round bank: finales keep everything under
       their wager rules, a regular typed question simply scores
       nothing, and the correct answer is revealed either way. */
    record(item, "pass", isTimeout?"(time ran out — counted as a pass)":"(passed)");
    if(item.kind==="bonus"){
      var bonusPassNote = item.bonusIdx>=4
        ? (isTimeout ? "Time's up on the doubler — that counts as a pass. You keep your "+state.bonusEarned+" bonus pts." : "Passed the doubler — you keep your "+state.bonusEarned+" bonus pts.")
        : (isTimeout ? "Time's up — that counts as a pass. No bonus points for this one, nothing lost. Bonus so far: "+state.bonusEarned+" pts." : "Passed — no bonus points for this one, nothing lost. Bonus so far: "+state.bonusEarned+" pts.");
      finishReveal(item, "pass", null, bonusPassNote);
      return;
    }
    var passNote;
    if(isFinaleItem){
      passNote = isTimeout
        ? "Time's up on a wager question — that counts as a pass. Your score is safe at "+state.score+"."
        : "Smart money. Your score stays at "+state.score+".";
    } else {
      passNote = isTimeout
        ? "Time's up — that counts as a pass on a typed question. No points, nothing lost, and the answer is revealed above."
        : "Passed — no points for this one, nothing lost. The correct answer is above.";
    }
    finishReveal(item, "pass", null, passNote);
    return;
  }
  var isGauntletFinaleAnswer = isJackpotMode(state.mode) && isFinaleItem;
  /* The final question (Q20) scores against the player's locked
     wager instead of the automatic double-or-nothing, once one
     has been locked on the wager screen. */
  var isFinalWagerAnswer = isGauntletFinaleAnswer && item.round===3 && typeof state.finalWager==="number";
  var finaleStrictAnswer = isGauntletFinaleAnswer ? finaleIsStrict(item) : false;
  var finaleForgivingAnswer = isGauntletFinaleAnswer ? !finaleStrictAnswer : false;
  /* Round 4 regular typed questions (Q16–Q19) are always strict, like
     the Round 4 finale. Other rounds have no regular typed questions. */
  var regularStrictAnswer = !isFinaleItem && (((state.mode==="gauntlet" || state.mode==="daily") && item.round===3) || state.mode==="legend" || item.kind==="bonus");
  /* Round 1 typed answers only (in practice, the Q5 finale): partial
     person names score — surname alone, name without its title, no
     middle names. Rounds 2–4 never get this tolerance. */
  var round1PartialNames = isJackpotMode(state.mode) && item.round===0;
  var ok=typedCorrect(q, value, finaleForgivingAnswer, isGauntletFinaleAnswer ? finaleStrictAnswer : regularStrictAnswer, round1PartialNames);
  /* Bonus-round scoring: questions 1-4 add 5 pts to the total
     (and to bonusEarned); question 5, the doubler, adds nothing
     itself - a right answer adds a second copy of the bonus
     points earned so far, doubling them (20 -> 40 at most),
     while a wrong answer keeps them as they are. (Passes and
     timeouts on bonus questions are settled in the pass branch
     above and never reach here.) The base Gauntlet total is
     never at risk, and the running total is capped at
     BONUS_CAP (1,280) on every bonus score. */
  if(item.kind==="bonus"){
    var bNote="";
    if(item.bonusIdx<4){
      if(ok){
        state.bonusEarned+=5; state.score=Math.min(BONUS_CAP, state.score+5);
        state.streak++; state.bestStreak=Math.max(state.bestStreak,state.streak);
        bNote="+5 bonus points! Bonus so far: "+state.bonusEarned+" pts — total now "+state.score+".";
      } else {
        state.streak=0;
        bNote="No bonus points — and nothing lost. Bonus stays at "+state.bonusEarned+" pts.";
      }
    } else {
      if(ok){
        var bAdd=state.bonusEarned;
        if(bAdd>0){
          state.score=Math.min(BONUS_CAP, state.score+bAdd); state.bonusEarned=bAdd*2; state.bonusDoubled=true;
          bNote="DOUBLER WON! Your "+bAdd+" bonus pts double to "+state.bonusEarned+". Total now "+state.score+".";
        } else {
          bNote="Correct — but there were no bonus points to double, so your total stays "+state.score+".";
        }
        state.streak++; state.bestStreak=Math.max(state.bestStreak,state.streak);
      } else {
        state.streak=0;
        bNote="No double — you keep your "+state.bonusEarned+" bonus pts. Total "+state.score+".";
      }
    }
    record(item, ok?"correct":"wrong", value||"(blank)");
    finishReveal(item, ok?"correct":"wrong", value, bNote);
    return;
  }
  var before=state.score, note="";
  if(ok){
    if(isFinalWagerAnswer){
      var cw=state.finalWager;
      state.score=before+cw;
      note = cw>0
        ? "WAGER WON! You wagered "+cw+" pts and got it right — +"+cw+". Total now "+state.score+"."
        : "Correct! Nothing was at stake (no wager on a 0 total), so your total stays "+state.score+".";
    }
    else if(isGauntletFinaleAnswer){ state.score=state.score*2; note="DOUBLED! "+before+" → "+state.score+" points."; }
    else if(isJackpotMode(state.mode)){ state.score+=item.pts; state.roundBank+=item.pts; note="+"+item.pts+" points."; }
    else { state.score+=item.pts||20; note="+"+(item.pts||20)+" points."; }
    state.streak++; state.bestStreak=Math.max(state.bestStreak,state.streak);
  } else {
    state.streak=0;
    if(isFinalWagerAnswer){
      var lw=state.finalWager;
      state.score=Math.max(0, before-lw);
      note = lw>0
        ? "Wager lost — you staked "+lw+" pts, so −"+lw+". Total now "+state.score+"."
        : "Wrong — and with nothing wagered, your total stays "+state.score+".";
    }
    else if(isGauntletFinaleAnswer){
      if(item.round===0 || item.round===3){ state.score=0; note="Double or nothing… and it's nada. Your total is wiped to 0."; }
      else { state.score=Math.max(0, state.score-state.roundBank); note="You lose the "+state.roundBank+" pts banked this round. Total now "+state.score+"."; }
    }
    /* Sudden Death, regular typed question (Round 4): a wrong
       answer or a timeout costs the round's banked points — the
       saved score is the secured total — and ends the game. */
    else if(state.suddenDeath && isJackpotMode(state.mode)){
      var sdYrb=state.roundBank||0;
      if(sdYrb>0){ state.score=Math.max(0, state.score-sdYrb); note=(isTimeout ? "Time's up — that counts as wrong in Sudden Death. " : "Sudden Death — wrong. ")+"The "+sdYrb+" pts banked this round are lost; your secured total is "+state.score+"."; }
      else note=(isTimeout ? "Time's up — that counts as wrong in Sudden Death. " : "Sudden Death — wrong. ")+"Your secured total is "+state.score+".";
    } else note="No points this time.";
    /* A Q20 timeout lands here, not in the pass branch: it counts
       as a wrong answer, so say plainly that the wager is lost. */
    if(isTimeout && isFinalWagerItem){
      var tw=state.finalWager;
      note = tw>0
        ? "Time's up on the final question — that counts as wrong, so your "+tw+"-pt wager is lost. Total now "+state.score+"."
        : "Time's up on the final question — that counts as wrong. Nothing was wagered, so your total stays "+state.score+".";
    }
  }
  /* Learning note: when a forgiving judge accepts an answer whose
     spelling is not exactly the correct one — a near-miss, a
     sound-alike, a numeric equivalent, or a Round 1 partial name —
     the reveal names the exact correct spelling, so the player sees
     how close they were to perfect. It is still scored correct; this
     is a learning note, not a penalty. (Strict questions never reach
     this branch with a misspelling: they are judged wrong, and the
     reveal already shows the correct answer.) */
  if(ok){
    var exactSpelling=[q.answer].concat(q.accept||[]).some(function(t){ return norm(t)===norm(value||""); });
    if(!exactSpelling) note=(note?note+" ":"")+"The correct spelling is: <b>"+escapeHtml(q.answer)+"</b>.";
  }
  record(item, ok?"correct":"wrong", (isTimeout && isFinalWagerItem) ? "(time ran out)" : (value||"(blank)"));
  finishReveal(item, ok?"correct":"wrong", (isTimeout && isFinalWagerItem) ? "Time ran out" : value, note);
}
/* The one exit that costs points: Q20 with its wager locked and
   the question still unanswered. Anything else — the wager
   picker included — is an ordinary quit that keeps the score. */
function q20AtStakeItem(){
  if(!state || !isJackpotMode(state.mode)) return null;
  if(state.phase==="bonus") return null;
  if(!state.qs || state.idx<0 || state.idx>=state.qs.length) return null;
  var item=state.qs[state.idx];
  if(!item || item.kind!=="finale" || item.round!==3) return null;
  /* Q20 before its wager is locked is the wager picker: nothing
     is on the line yet. */
  if(typeof state.finalWager!=="number") return null;
  /* A Q20 already answered is already settled — its reveal is
     showing, and quitting is ordinary again. */
  if(locked || state.lastReveal) return null;
  return item;
}
function openQuitWarning(item){
  quitWarnOpen=true; quitWarnItem=item;
  /* The clock deliberately keeps running — no pause (see the
     section header above). */
  var w=state.finalWager;
  $("quitWarnText").innerHTML="<b>Your points are on the line.</b> This is the final question (Q20) and your <b>"+w+"-pt wager</b> is locked in. Quitting now loses the wager — your final score will be <b>"+Math.max(0, state.score-w)+"</b>. The clock is still running.";
  var panel=$("quitWarn");
  panel.classList.remove("hidden"); panel.setAttribute("aria-hidden","false");
  $("quitStayBtn").focus();
}
function closeQuitWarning(){
  quitWarnOpen=false; quitWarnItem=null;
  var panel=$("quitWarn");
  if(panel){ panel.classList.add("hidden"); panel.setAttribute("aria-hidden","true"); }
}
/* Confirming the Q20 warning: the locked wager is lost, the miss
   is recorded (the end-of-game review shows it, and the results
   screen's wager line reports the loss), and the game ends on
   the reduced score. The time spent on Q20 counts the way a
   settled answer counts it. In Sudden Death the game was ending
   either way, but it is marked out just the same. */
function settleQ20Quit(item){
  locked=true; stopTimer();
  state.streak=0;
  state.score=Math.max(0, state.score-state.finalWager);
  if(state.suddenDeath) state.suddenDeathOut=true;
  if(!qClockSettled){
    qClockSettled=true;
    var qUsed=(typeof qClockAllotted==="number" && qClockAllotted>0)
      ? Math.max(0, Math.min(qClockAllotted, qClockAllotted-Math.max(0, timeLeft)))
      : 0;
    state.timeUsed=(typeof state.timeUsed==="number" && isFinite(state.timeUsed) ? state.timeUsed : 0)+qUsed;
  }
  record(item, "wrong", "(left the game)");
  endGame(true);
}
/* The one exit path behind both buttons: the header Quit
   (available all game) and Q20's Leave (rendered by the wager
   screen and the Q20 question, wired by delegation on the answer
   area). Ordinary everywhere; on a live Q20 the warning comes
   first. A press while the warning is already up does nothing —
   the warning itself is the decision point. */
function quitPressed(){
  if(quitWarnOpen) return;
  if(!state) return;
  var fi=q20AtStakeItem();
  if(fi){ openQuitWarning(fi); return; }
  stopTimer(); endGame(true);
}

/* Achievement titles (Update 1.2): the four-tier title earned by
   a game's final score. Display only — no scoring, saving,
   leaderboard, or perfect-game logic reads this. The Gauntlet
   table covers mode "gauntlet" and mode "daily", and therefore
   every Sudden Death and Challenge game too (both play as mode
   "gauntlet" with their own flags, so they flow through here
   unchanged). The Legend table covers mode "legend" only. A
   1,280 reached through the Bonus Round earns TRIVIA MASTER
   here exactly like a natural 1,280 — the title is the same;
   what stays different is the separate perfect flag in endGame
   (a bonus-assisted 1,280 is never perfect, enters no Perfect
   Games list, and never unlocks the Legend game). Practice
   modes (any mode id that is not gauntlet / daily / legend is
   a practice category from MODES) use their own table on the
   practice scale — 10 questions × 10 pts, maximum 100 — and
   never read or affect the Gauntlet / Legend tables. */
function achievementTitle(score, mode){
  if(mode==="legend"){
    if(score>=1280) return "TRIVIA LEGEND";
    if(score>=1000) return "LEGEND CHAMPION";
    if(score>=600) return "LEGEND WARRIOR";
    return "LEGEND CONTENDER";
  }
  if(mode==="gauntlet" || mode==="daily"){
    if(score>=1280) return "TRIVIA MASTER";
    if(score>=1000) return "TRIVIA CHAMP";
    if(score>=600) return "TRIVIA CHALLENGER";
    return "TRIVIA CONTENDER";
  }
  /* Practice categories: 0–39 ROOKIE, 40–69 ENTHUSIAST,
     70–89 EXPERT, 90–100 MASTER (the practice maximum is 100). */
  if(score>=90) return "CATEGORY MASTER";
  if(score>=70) return "CATEGORY EXPERT";
  if(score>=40) return "TRIVIA ENTHUSIAST";
  return "TRIVIA ROOKIE";
}

/* The praise line under the achievement title on the results
   screen. It must never restate what the title already says —
   the practice line for a top score used to read "Sharp!
   Category mastered." under a CATEGORY MASTER / CATEGORY
   EXPERT title, saying the same thing twice; it now reads
   "Sharp! Great job!". Every other line here already adds
   something the title does not say, so they are unchanged. */
function verdictFlavourFor(score, mode){
  if(mode!=="gauntlet" && mode!=="legend" && mode!=="daily") return score>=80 ? "Sharp! Great job!" : score>=50 ? "Solid run — room to climb." : "Warm-up complete. Run it back!";
  if(score>=1000) return "You doubled under pressure and took the crown.";
  if(score>=300) return "High roller! The house barely survived you.";
  if(score>=150) return "Strong game — the wagers nearly broke your way.";
  if(score>=60) return "Respectable. Fortune favors the bold next time.";
  if(score>0) return "You kept something on the board — that's not nada.";
  return "NADA. The wagers are cruel… but the rematch is free.";
}
function verdictFor(score, mode){
  return achievementTitle(score, mode)+". "+verdictFlavourFor(score, mode);
}
function loadProfile(){
  var s=hsStore(); if(!s) return null;
  try{
    var raw=s.getItem(PROFILE_KEY); if(!raw) return null;
    var p=JSON.parse(raw);
    if(!p || typeof p!=="object") return null;
    if(!p.practiceBests || typeof p.practiceBests!=="object") p.practiceBests={};
    return p;
  }catch(e){ return null; }
}
function newAnonPlayerId(){
  var out="p-";
  try{
    var buf=new Uint8Array(8);
    if(window.crypto && window.crypto.getRandomValues) window.crypto.getRandomValues(buf);
    else for(var i=0;i<buf.length;i++) buf[i]=Math.floor(Math.random()*256);
    for(var j=0;j<buf.length;j++) out+=("0"+buf[j].toString(16)).slice(-2);
  }catch(e){ out+=""+Date.now().toString(36)+Math.floor(Math.random()*1e9).toString(36); }
  return out;
}
/* The stable anonymous player id for THIS device (§5/§6),
   read from the profile record — the one record, never a second
   key. When no record exists yet (a player who never played
   Practice), the record is created on the spot in the same
   shape, with empty practiceBests, so every submitter has a
   stable id from their first shared submission. An existing id
   is returned exactly as stored and is NEVER regenerated; a
   record that exists without one gets one minted and saved.
   Returns null only when storage is unavailable, in which case
   the submission simply goes without an id (the backend stores
   NULL and still accepts the score, as it does for every
   historical row). */
function ensureAnonPlayerId(){
  var p=loadProfile();
  if(p && typeof p.playerId==="string" && p.playerId) return p.playerId;
  var s=hsStore(); if(!s) return null;
  if(!p) p={version:1, playerId:newAnonPlayerId(), practiceBests:{}};
  p.version=1;
  if(typeof p.playerId!=="string" || !p.playerId) p.playerId=newAnonPlayerId();
  if(!p.practiceBests || typeof p.practiceBests!=="object") p.practiceBests={};
  try{ s.setItem(PROFILE_KEY, JSON.stringify(p)); }
  catch(e){ /* blocked mid-write — the minted id still rides this submission */ }
  return p.playerId;
}
function practiceBestFor(catId){
  var p=loadProfile(); if(!p) return null;
  var v=p.practiceBests[catId];
  return (typeof v==="number" && isFinite(v)) ? v : null;
}
/* Record a completed practice round's score as the category's
   personal best when it beats the stored one. Returns
   {best, isNew, prev}: best is the category's best after this
   call (null when storage is unavailable), isNew is true only
   when this score actually set a new best. Writes go to the
   profile key ONLY — no board, shared or device, is touched. */
function recordPracticeBest(catId, score){
  var prev=practiceBestFor(catId);
  if(prev!==null && score<=prev) return {best:prev, isNew:false, prev:prev};
  var s=hsStore(); if(!s) return {best:prev, isNew:false, prev:prev};
  var p=loadProfile()||{version:1, playerId:newAnonPlayerId(), practiceBests:{}};
  p.version=1;
  if(typeof p.playerId!=="string" || !p.playerId) p.playerId=newAnonPlayerId();
  if(!p.practiceBests || typeof p.practiceBests!=="object") p.practiceBests={};
  p.practiceBests[catId]=score;
  try{ s.setItem(PROFILE_KEY, JSON.stringify(p)); }
  catch(e){ return {best:prev, isNew:false, prev:prev}; }
  return {best:score, isNew:true, prev:prev};
}
/* Category Mastery tiers (Practice recognition): the same
   thresholds as the Practice titles — a category best of 40+
   is Bronze, 70+ is Silver, 90+ is Gold (mastered); below 40
   or never played is no medal. Rank 0 is no medal, so a run
   earns a celebration only when its new best's rank beats the
   previous best's rank — a better score inside the same tier,
   or no improvement at all, celebrates nothing. */
function masteryTierRank(best){
  if(typeof best!=="number" || !isFinite(best)) return 0;
  if(best>=90) return 3;
  if(best>=70) return 2;
  if(best>=40) return 1;
  return 0;
}
function masteryTierLabel(rank){
  if(rank===3) return "Gold";
  if(rank===2) return "Silver";
  if(rank===1) return "Bronze";
  return "";
}
/* The NEW mastery tier a completed practice round just earned
   in its category, or null when it earned none. pbRes is the
   recordPracticeBest result ({best, isNew, prev}); only a
   completed round that actually raised the best can cross into
   a higher tier. */
function masteryNewTierFor(pbRes){
  if(!pbRes || !pbRes.isNew) return null;
  var before=masteryTierRank(pbRes.prev);
  var after=masteryTierRank(pbRes.best);
  if(after<=before) return null;
  return masteryTierLabel(after);
}
/* Practice-round statistics for the results screen, computed
   from the round's settled history. "Answered" and "correct"
   are DIFFERENT counts and are computed separately: answered is
   every question that reached a settled verdict (correct,
   wrong, passed, or timed out — an MC timeout settles as
   "wrong", a typed timeout as "pass", both already in the
   history), correct is the "correct" verdicts only. Accuracy
   is correct ÷ answered as a whole percent. The best streak is
   the longest run of consecutive correct verdicts; any other
   verdict breaks the run. */
function practiceStatsFor(hist, total){
  var answered=hist.length, correct=0, run=0, bestRun=0;
  for(var i=0;i<hist.length;i++){
    if(hist[i].status==="correct"){ correct++; run++; if(run>bestRun) bestRun=run; }
    else run=0;
  }
  return {
    answered:answered, total:total, correct:correct,
    accuracy:(answered>0 ? Math.round(correct/answered*100) : 0),
    bestStreak:bestRun
  };
}

/* Results-screen stat units (2026-11-11 aesthetics pass): each
   stat is one unbreakable unit (see .statunit in the CSS) in a
   centered flex-wrap stack — units share a row only when the
   whole row fits, and a unit never splits across lines the way
   the old dot-separated run-on paragraph did ("Correct answers:
   9 /" over "10"). A "full" unit always takes its own line; a
   "line" is a full-width wrapping sentence, centered. */
function statUnit(html){ return '<span class="statunit">'+html+'</span>'; }
function statUnitFull(html){ return '<span class="statunit full">'+html+'</span>'; }
function statLine(html){ return '<span class="statline">'+html+'</span>'; }

function endGame(quitEarly){
  stopTimer();
  /* The game is over — finished or quit — so its in-progress save
     goes with it; the next visit starts from the cover. */
  clearProgress();
  /* Bonus cap, enforced one last time before the score is saved
     or shown: a Gauntlet total plus bonus points never exceeds
     1,280, so a bonus game can tie a perfect game, never beat it. */
  if(state.phase==="bonus" && state.score>BONUS_CAP) state.score=BONUS_CAP;
  var key=state.mode;
  var isCreator=!!state.creator;
  /* Creator games are practice/test only: they update no session
     best, save to no leaderboard (device or shared), enter no
     Hall of Fame, and appear in no backup — every save below is
     skipped for them, and their results say so plainly. */
  if(!isCreator && state.score>(sessionBest[key]||0)) sessionBest[key]=state.score;
  /* True perfect: a completed, non-quit Gauntlet at exactly 1,280
     that never entered the bonus round — the same test the Legend
     offer below uses. A bonus game capped at 1,280 fails it
     (phase is "bonus"), so it is never flagged perfect. A creator
     game is never a true perfect, however it scores. */
  /* Daily Gauntlet bookkeeping (W.'s rule, 2026-11-10): quitting
     a daily ENDS it as the day's result, exactly like a finished
     daily for bookkeeping — the score at the moment of quitting
     saves once (device board + shared submit), the date is marked
     completed, and the streak records that date, finish or quit.
     The day is then closed: no fresh daily that day, and the quit
     game cannot be resumed (endGame cleared the progress save
     above, as with any quit). A quit daily is still never a true
     perfect and never earns the bonus round or the Legend offer —
     truePerfect and the Legend offer below keep their !quitEarly
     tests, and a quit goes straight to endGame without ever
     passing through the Next-button bonus trigger. A date that
     already counted never saves or streaks twice. The date
     recorded is the daily's own start date, which a resumed daily
     kept in its save — so a resumed daily that is then quit also
     counts for its start date. A creator daily is covered by
     isCreator like every creator game: it saves nowhere and never
     touches the streak. */
  var isDailyGame = !!state.daily && state.mode==="daily";
  var dailyDateStr = isDailyGame ? (state.dailyDate || dailyDateString()) : null;
  var dailyAlreadyCounted = isDailyGame ? dailyCompletedOn(dailyDateStr) : false;
  var dailyScored = isDailyGame && !isCreator && !dailyAlreadyCounted;
  var dailyStreakInfo = dailyScored ? recordDailyCompletion(dailyDateStr) : null;
  if(isDailyGame) state.dailyStreakInfo=dailyStreakInfo;
  /* A true perfect Daily Gauntlet counts exactly like a true
     perfect regular Gauntlet: flagged perfect, no bonus round,
     Legend unlocked. */
  var truePerfect = !isCreator && (state.mode==="gauntlet" || state.mode==="daily") && !quitEarly && state.phase!=="bonus" && state.score===1280 && state.history.length>=20;
  /* A true perfect game unlocks the Legend Gauntlet — greet it
     (and the results screen) with the fanfare. */
  if(truePerfect) sfxFanfare();
  /* Update 1.3 · Stage 1: device-local qualifying credits
     and avatar unlocks, counted here where the game's own
     completion facts are settled. No score, board, backend, or
     gameplay value is read for anything but counting, and
     nothing here writes back into the game. */
  try{ s1OnGameEnd({quitEarly:!!quitEarly, truePerfect:!!truePerfect, isCreator:isCreator, dailyScored:!!dailyScored}); }catch(e){}
  /* Sudden Death: the question this run ended on (owner, 2026-11-12),
     computed once here and used for the results line below and
     for the board marker saved with the score. A cleared run
     ended on the last question; a miss (or a timeout, or a finale
     settled by quitting) ended on the question history holds; a
     quit ended on the question on screen, state.idx+1. */
  var sdEndQ=null;
  if(state.suddenDeath){
    var sdTotQ=state.qs.length||20;
    if(!state.suddenDeathOut && !quitEarly && state.history.length>=sdTotQ) sdEndQ=sdTotQ;
    else if(state.suddenDeathOut) sdEndQ=Math.min(state.history.length, sdTotQ);
    else sdEndQ=Math.min(state.idx+1, sdTotQ);
    if(!(sdEndQ>=1)) sdEndQ=null;
  }
  var hsRank=(isCreator || (isDailyGame && !dailyScored)) ? null : recordLocalScore(state.name, state.score, state.suddenDeath ? "suddendeath" : (state.challenge ? "challenge" : state.mode), state.pace, truePerfect, state.timeUsed, sdEndQ);
  state.hsEntry = hsRank ? hsRank.entry : null;
  /* The same finished game also goes to the shared leaderboard —
     fired in the background, best-effort, never blocking this
     results screen; the device-local save above stands either way.
     Creator games are never submitted. */
  if(!isCreator && !(isDailyGame && !dailyScored)) submitSharedScore(state.name, state.score, state.suddenDeath ? "suddendeath" : (state.challenge ? "challenge" : state.mode), state.pace, truePerfect, state.timeUsed, sdEndQ);
  state.endedEarly = !!quitEarly;
  /* Practice statistics + personal best (Update 1.2 §4): a
     practice round is any game whose mode is a MODES category
     (not a Gauntlet-family mode and not a creator game). Its
     personal best updates ONLY on a completed round — every
     question settled, not quit midway — and only in the
     device-local profile record; practice saves nothing extra
     to any board and its titles/stats never touch Gauntlet or
     Legend achievements, verdicts, or records. On a quit, the
     stored best is read back unchanged for display. */
  var practiceInfo=null;
  if(!isCreator && !isJackpotMode(state.mode)){
    var pStats=practiceStatsFor(state.history, state.qs.length||0);
    var pCompleted=!quitEarly && pStats.total>0 && pStats.answered>=pStats.total;
    var pbRes=pCompleted ? recordPracticeBest(state.mode, state.score) : null;
    practiceInfo={
      stats:pStats, catName:modeLabel(state.mode),
      personalBest:(pbRes ? pbRes.best : practiceBestFor(state.mode)),
      isNewBest:!!(pbRes && pbRes.isNew), completed:pCompleted,
      masteryNewTier:(pCompleted ? masteryNewTierFor(pbRes) : null)
    };
  }
  /* Header stack, one item per line, all centered: the player
     name on its own line, the Final Score label on its own line
     (no longer run together with the name by an em dash), the
     big score, the achievement title on its own line, and the
     praise line under it. */
  $("resName").textContent=state.name;
  $("resTitle").textContent = isCreator
    ? (state.creatorKind==="bonus" ? "Creator Bonus Round — Final Score" : state.creatorKind==="legend" ? "Creator Legend Gauntlet — Final Score" : "Creator Game — Final Score")
    : (quitEarly ? "Called It Early" : "Final Score");
  $("resScore").textContent=state.score;
  $("resAchievement").textContent=achievementTitle(state.score, state.mode);
  $("resVerdict").textContent=verdictFlavourFor(state.score, state.mode);
  /* Category Mastery celebration line: hidden by default on
     every results screen; the practice branch below fills it
     only when this run earned a NEW mastery tier. */
  var resMasteryEl=$("resMastery");
  if(resMasteryEl){ resMasteryEl.textContent=""; resMasteryEl.classList.add("hidden"); }
  /* Game-show reskin (visual only): the decorative verdict word —
     YOU WIN! for a true perfect game, NADA! for a Gauntlet or
     Legend game that ends on zero. It echoes the score and verdict
     line above it, is hidden from assistive tech, and changes no
     scoring, saving, or wording. */
  var vw=$("resVerdictWord");
  if(vw){
    if(truePerfect){ vw.textContent="YOU WIN!"; vw.className="verdictword win"; }
    else if(!quitEarly && state.score===0 && (state.mode==="gauntlet" || state.mode==="legend" || state.mode==="daily")){ vw.textContent="NADA!"; vw.className="verdictword nada"; }
    else { vw.textContent=""; vw.className="verdictword hidden"; }
  }
  if(isCreator){
    $("resBest").innerHTML=statUnitFull("Creator game")+statUnit("Best streak: <b>"+state.bestStreak+"</b>")+statUnit("Answered: <b>"+state.history.length+" / "+state.qs.length+"</b>")+statUnit("Finished in <b>"+fmtTimeUsed(state.timeUsed||0)+"</b>");
    $("resRank").innerHTML="Creator game — practice only. This score was <b>not saved</b> to any leaderboard, the Hall of Fame, or a backup.";
  } else if(practiceInfo) {
    /* Practice results (Update 1.2 §4): category, questions
       answered and correct answers as separate counts (both
       out of the round's 10), accuracy, best correct streak,
       and the per-category personal best from the profile
       record — flagged when this round just set it. The final
       score is the big number above and the achievement title
       is the verdict line above; this line carries the rest. */
    var ps=practiceInfo.stats;
    /* One stat per unbreakable unit, same order as before. The
       Category takes its own line; "New personal best!" takes
       its own line; the personal-best line no longer repeats
       the category name (the Category line directly above
       already names it). Short neighbours — Accuracy beside
       Best streak — share a line only when the row fits whole. */
    $("resBest").innerHTML=statUnitFull("Category: <b>"+escapeHtml(practiceInfo.catName)+"</b>")+statUnit("Questions answered: <b>"+ps.answered+" / "+ps.total+"</b>")+statUnit("Correct answers: <b>"+ps.correct+" / "+ps.total+"</b>")+statUnit("Accuracy: <b>"+ps.accuracy+"%</b>")+statUnit("Best streak: <b>"+ps.bestStreak+"</b>")+statUnit("Personal best: <b>"+(practiceInfo.personalBest===null ? "—" : practiceInfo.personalBest)+"</b>")+(practiceInfo.isNewBest ? statUnitFull("<b>New personal best!</b>") : "")+statUnit("Finished in <b>"+fmtTimeUsed(state.timeUsed||0)+"</b>");
    $("resRank").innerHTML="";
    /* Category Mastery celebration (Practice results only,
       never mid-game): shown only when this completed run
       crossed into a new tier in its category — a first medal
       or a tier upgrade. A run that does not improve the best,
       or improves it within the same tier, shows nothing. */
    if(practiceInfo.masteryNewTier && resMasteryEl){
      resMasteryEl.textContent="New mastery: "+practiceInfo.catName+" — "+practiceInfo.masteryNewTier+"!";
      resMasteryEl.classList.remove("hidden");
    }
  } else {
    $("resBest").innerHTML=statUnit("Session best ("+(state.suddenDeath?"Sudden Death":state.challenge?"Challenge Gauntlet":state.mode==="daily"?"Daily Gauntlet":state.mode==="gauntlet"?"Gauntlet":state.mode==="legend"?"Legend Gauntlet":"practice")+"): <b>"+(sessionBest[key]||0)+"</b>")+statUnit("Best streak: <b>"+state.bestStreak+"</b>")+statUnit("Answered: <b>"+state.history.length+" / "+state.qs.length+"</b>")+statUnit("Finished in <b>"+fmtTimeUsed(state.timeUsed||0)+"</b>");
    /* Sudden Death (owner addition, 2026-11-12): the stats say
       how far the run got, as its own unbreakable stat line. A
       run that answered all 20 cleared the table; a run ended by
       a miss (or a timeout, or a finale settled by quitting)
       fell on the question that ended it — history holds that
       question, so its number is history's length; a run ended
       by quitting falls on the question on screen, state.idx+1.
       Sudden Death only — no other mode's stats change. */
    if(state.suddenDeath){
      var sdTotal=state.qs.length||20;
      var sdLine=(sdEndQ!==null && sdEndQ>=sdTotal && !state.suddenDeathOut && !quitEarly)
        ? "Cleared all "+sdTotal+" questions"
        : "Fell on question <b>"+(sdEndQ||Math.max(1, state.history.length))+" of "+sdTotal+"</b>";
      $("resBest").innerHTML+=statUnitFull(sdLine);
    }
    /* The "Rank on this device" line no longer shows on the
       results screen (removed at W.'s direction): the score is
       still recorded on the device board exactly as before —
       only this sentence is gone. The element itself stays,
       cleared, because the creator branch above uses it. */
    $("resRank").innerHTML="";
  }
  /* The final-question wager outcome, stated plainly. state.score
     — and therefore the score saved to the device board just above —
     is already the post-wager total. */
  var wagerHtml="";
  if(isJackpotMode(state.mode)){
    for(var wi=state.history.length-1; wi>=0; wi--){
      var wh=state.history[wi];
      if(typeof wh.item.wagerAmount==="number"){
        var wv=wh.item.wagerAmount;
        if(wh.status==="correct") wagerHtml="Final-question wager: <b>"+wv+" pts</b> — correct, +"+wv+".";
        else if(wh.status==="wrong") wagerHtml="Final-question wager: <b>"+wv+" pts</b> — wrong, −"+wv+".";
        else wagerHtml="Final-question wager: <b>"+wv+" pts</b> — passed, wager returned.";
        break;
      }
    }
  }
  $("resWager").innerHTML=wagerHtml;
  /* Bonus-round outcome, stated once on the results screen. The
     final score above - and the score just saved to the device
     board - already includes the bonus points. */
  var resBonusEl=$("resBonus");
  if(resBonusEl){
    if(isCreator && state.creatorKind==="bonus"){
      resBonusEl.innerHTML="Creator bonus round: <b>"+state.score+" pts</b>"+(state.bonusDoubled ? " — the doubler doubled your bonus!" : "")+" (bonus points are the final score above).";
    } else {
      resBonusEl.innerHTML = (state.phase==="bonus" && typeof state.bonusBase==="number")
        ? "Bonus round: <b>+"+(state.score-state.bonusBase)+" pts</b>"+(state.bonusDoubled ? " — the doubler doubled your bonus!" : "")+" (Gauntlet total was "+state.bonusBase+" pts; bonus included in the final score above)."
        : "";
    }
  }
  /* Mode line: a Sudden Death game says how far it got (or that
     it ran the table); a challenge game says what it was and
     where its score lives. */
  var resModeEl=$("resMode");
  if(resModeEl){
    if(isCreator){
      resModeEl.innerHTML = statLine(state.creatorKind==="bonus"
        ? "Creator bonus round — started directly from Creator access, no Gauntlet needed. Practice only — nothing was saved."
        : state.creatorKind==="legend"
          ? "Creator Legend Gauntlet — started directly from Creator access, no perfect game needed. Practice only — nothing was saved."
          : "Creator game — practice only. Nothing was saved.");
    } else if(state.suddenDeath){
      resModeEl.innerHTML = statLine(quitEarly
        ? "Sudden Death — game called early."
        : (state.suddenDeathOut
          ? "Sudden Death — <b>out on question "+state.history.length+" of "+state.qs.length+"</b>. Your secured total is the score saved above."
          : "Sudden Death — <b>20 out of 20</b>. You never missed."));
    } else if(state.challenge){
      resModeEl.innerHTML = statLine("Challenge game — the same 20 questions as the link you opened, at the same pace. This score is saved on this device only — tell your friend your score to compare.");
    } else if(isDailyGame){
      /* The mode + date is one unbreakable unit on its own line;
         the explanation follows as its own centered line. */
      resModeEl.innerHTML = statUnitFull("Daily Gauntlet · <b>"+dailyDateStr+"</b>") + statLine((quitEarly && dailyScored)
        ? "You quit, so this score is your Daily result for the day. It counts, your streak is recorded, and the day is closed — no second run today."
        : (dailyAlreadyCounted
          ? "That day was already counted, so this run wasn't saved again. One scored daily per day."
          : "The same 20 questions everyone got that day."));
    } else resModeEl.innerHTML="";
  }
  /* Day-streak line, on a daily's results screen only. */
  var resDailyEl=$("resDaily");
  if(resDailyEl){
    if(isDailyGame && !isCreator && (dailyScored || dailyAlreadyCounted || loadDaily().currentStreak>=1)){
      var ddNow=loadDaily();
      resDailyEl.innerHTML=statUnit("Streak: <b>"+ddNow.currentStreak+" day"+(ddNow.currentStreak===1?"":"s")+"</b>")+statUnit("Best: <b>"+ddNow.bestStreak+"</b>");
    } else resDailyEl.innerHTML="";
  }
  /* Challenge a friend: offered after a finished Gauntlet — the
     regular game, a challenge game, or Sudden Death — never
     after a practice round, a Legend game, or a quit. It is the
     results screen's primary call to action now, so its label
     carries this game's score ("…to beat your 800"); the link it
     copies and the deal behind it are unchanged. */
  var challengeBoxEl=$("challengeBox");
  if(challengeBoxEl){
    challengeBoxEl.classList.toggle("hidden", !(!isCreator && state.mode==="gauntlet" && !quitEarly));
    var chBtn=$("challengeBtn"); if(chBtn) chBtn.textContent="Challenge a friend to beat your "+state.score;
    var chMsg=$("challengeMsg"); if(chMsg) chMsg.textContent="";
  }
  /* Share your score: offered after any finished Gauntlet-family
     game — regular, Daily, Sudden Death, Legend, and a Gauntlet
     that ran its bonus round (mode "gauntlet", phase "bonus") —
     never after a practice round, a creator game (practice only,
     saved nowhere), or a quit. */
  var shareBoxEl=$("shareBox");
  if(shareBoxEl){
    shareBoxEl.classList.toggle("hidden", !(!isCreator && !quitEarly && isJackpotMode(state.mode)));
    var shMsg=$("shareMsg"); if(shMsg) shMsg.textContent="";
    /* Score card: a fresh results screen never carries the last
       game's download link, and the card image for THIS game is
       generated now (see the share block below) so a file share
       can start synchronously inside the tap on Share. */
    hideScoreCardDownload();
    if(!shareBoxEl.classList.contains("hidden")) prepareScoreCard();
  }
  /* Perfect game: no bonus round was played; the Legend Gauntlet
     is offered here instead. Only a completed, non-quit regular
     Gauntlet at exactly 1,280 unlocks it. Creator games never
     trigger this offer — a creator Legend game is started from
     the cover's Creator access instead. */
  var legendOfferEl=$("legendOffer");
  if(legendOfferEl){
    var perfectGame = !isCreator && (state.mode==="gauntlet" || state.mode==="daily") && !quitEarly && state.phase!=="bonus" && state.score===1280 && state.history.length>=20;
    legendOfferEl.classList.toggle("hidden", !perfectGame);
  }
  renderScoreBoard();
  /* Forgot-your-name fix: offer the post-game name field only when
     this game was started with no name (played as "Player") and its
     score was actually saved on this device. If a name was entered
     at the cover, the results screen stays exactly as it was. */
  var lnb=$("lateNameBox");
  if(state.startedNameless && state.hsEntry){
    lnb.classList.remove("hidden");
    /* The hint names the shared leaderboard too when this game
       was one of the modes submitted to it — saving the name
       renames the shared row as well (see saveLateName). */
    var lh=$("lateNameHint");
    if(lh){
      var sharedGame=!isCreator && !!SHARED_MODES[modeLabel(state.suddenDeath ? "suddendeath" : (state.challenge ? "challenge" : state.mode))];
      lh.textContent = sharedGame
        ? "You played this game as \u201CPlayer\u201D. Add your name now and this score goes under your name instead \u2014 on this device's board and on the shared leaderboard."
        : "You played this game as \u201CPlayer\u201D. Add your name now and this score goes on this device's board under your name instead.";
    }
    $("lateName").value="";
    $("lateNameMsg").textContent="";
    $("lateNameBtn").disabled=false;
  } else {
    lnb.classList.add("hidden");
  }
  var html="";
  state.history.forEach(function(h, i){
    var q=h.item.data;
    var correctAns = q.type==="mc" ? q.choices[q.a] : q.answer;
    html+='<div class="reviewitem '+(h.status==="correct"?"ok":(h.status==="pass"?"":"no"))+'">'+
      '<div class="rq">'+(h.item.kind==="bonus" ? "Bonus "+(h.item.bonusIdx+1) : "Q"+(i+1))+". "+escapeHtml(q.dq||q.q)+"</div>"+
      '<div class="ra">You: <b>'+escapeHtml(h.yourAnswer||"—")+'</b> · Correct: <b>'+escapeHtml(correctAns)+"</b>"+
      (h.status==="pass"?" · <b>Passed</b>":"")+
      (typeof h.item.wagerAmount==="number"
        ? " · Wagered <b>"+h.item.wagerAmount+" pts</b>"+(h.status==="correct"?" — correct, +"+h.item.wagerAmount : h.status==="wrong" ? " — wrong, −"+h.item.wagerAmount : " — passed, wager returned")
        : "")+"</div>"+
      (explainFor(q)?'<div class="ra why"><b>Why this is right:</b> '+escapeHtml(explainFor(q))+"</div>":"")+
      (q.credit?'<div class="ra">'+fullCreditHtml(q)+"</div>":"")+
      flagControlHtml({q:(q.dq||q.q), a:correctAns, cat:(q.cat||"General Knowledge"), mode:flagCurrentModeLabel(), name:state.name})+"</div>";
  });
  if(!html) html="<p>No questions answered yet.</p>";
  $("reviewList").innerHTML=html;
  updateBestLine();
  show("screen-results");
}

/* ---------- Question flagging (question-quality charter, phase one) ----------
   Every row of the end-of-game review list — the Gauntlet family,
   Practice (same list, same renderer), and the Closest Wins review
   (which calls flagControlHtml from its own script) — carries a
   small "⚑ Report an issue" control. Tapping it opens the report
   sheet (markup in index.html): three reasons — Wrong answer,
   Ambiguous or unfair, Outdated — plus an optional one-line note.
   One flag per question PER DEVICE, permanently: flagged question
   keys (the prompt text) persist in their own localStorage record
   (trivia-or-nada.flags.v1), and a flagged question renders its
   disabled "✓ Flagged for review" state in every later review.
   Submission is a best-effort POST to the flag endpoint, written
   exactly like the shared-leaderboard endpoints above (absolute
   savailleentertainment.com /.netlify/functions/ URL, so the app
   sync treats it the same as submit-score). It is fire-and-forget:
   flagging never blocks, delays, or errors the game. A failed send
   (offline, non-2xx, endpoint not deployed yet — as in the
   artifact preview) stays in the record's retry queue and is
   retried FIFO on the next game load (renderScoreBoard calls
   flagFlushQueue), dropping an item after 5 failed attempts. The
   player never sees an error either way. No gameplay, scoring,
   timer, or dealing code reads any of this. */
function flagStoreKey(){ return "trivia-or-nada.flags.v1"; }
function flagEndpoint(){ return "https://savailleentertainment.com/.netlify/functions/flag-question"; }
function flagState(){
  if(!window.__tonFlags) window.__tonFlags={rec:null, recLoaded:false, ui:{}, seq:0, sheetCtx:null, reason:"", busy:false, wired:false};
  return window.__tonFlags;
}
function flagQKey(q){ return String(q||"").replace(/\s+/g," ").trim(); }
function flagLoadRec(){
  var st=flagState();
  if(st.recLoaded) return st.rec;
  st.recLoaded=true; st.rec={flagged:{}, queue:[]};
  var s=hsStore(); if(!s) return st.rec;
  try{
    var raw=s.getItem(flagStoreKey()); if(!raw) return st.rec;
    var d=JSON.parse(raw);
    if(d && typeof d==="object"){
      if(d.flagged && typeof d.flagged==="object") st.rec.flagged=d.flagged;
      if(d.queue && d.queue.constructor===Array)
        st.rec.queue=d.queue.filter(function(it){ return !!(it && it.payload && typeof it.payload.reportId==="string"); });
    }
  }catch(e){ /* unreadable record — start clean in memory */ }
  return st.rec;
}
function flagSaveRec(){
  var st=flagState(); if(!st.recLoaded) return;
  var s=hsStore(); if(!s) return;
  try{ s.setItem(flagStoreKey(), JSON.stringify(st.rec)); }catch(e){ /* the in-memory copy still stands for the session */ }
}
function flagIsFlagged(key){ if(!key) return false; return !!flagLoadRec().flagged[key]; }
function flagBuildId(){
  try{
    var m=document.querySelector('meta[name="ton-build"]');
    return m ? (m.getAttribute("content")||"").trim() : "";
  }catch(e){ return ""; }
}
/* Report ids are minted the same way anonymous player ids are:
   a short prefix plus random hex, with a time/random fallback. */
function flagNewReportId(){
  var out="f-";
  try{
    var buf=new Uint8Array(8);
    if(window.crypto && window.crypto.getRandomValues) window.crypto.getRandomValues(buf);
    else for(var i=0;i<buf.length;i++) buf[i]=Math.floor(Math.random()*256);
    for(var j=0;j<buf.length;j++) out+=("0"+buf[j].toString(16)).slice(-2);
  }catch(e){ out+=""+Date.now().toString(36)+Math.floor(Math.random()*1e9).toString(36); }
  return out;
}
/* The mode just played, as the label the boards use — Sudden Death
   and Challenge ride on the Gauntlet state, so they are resolved
   the same way saveLateName resolves them. */
function flagCurrentModeLabel(){
  try{
    if(!state) return "";
    if(state.suddenDeath) return "Sudden Death";
    return modeLabel(state.challenge ? "challenge" : state.mode);
  }catch(e){ return ""; }
}
/* The per-row control. The question's payload (prompt, stored
   correct answer, category, mode, player name) is registered
   under a short id the button carries — question text never rides
   in an HTML attribute. A question already flagged on this device
   renders the disabled flagged state instead. */
function flagControlHtml(info){
  try{
    flagWire();
    var st=flagState();
    var id="fg"+(++st.seq);
    st.ui[id]={q:String(info.q||""), a:String(info.a||""), cat:String(info.cat||""), mode:String(info.mode||""), name:String(info.name||"")};
    var key=flagQKey(info.q);
    if(flagIsFlagged(key))
      return '<div class="flagrow"><button type="button" class="flagbtn done" data-flag-key="'+escapeHtml(key)+'" disabled>✓ Flagged for review</button></div>';
    return '<div class="flagrow"><button type="button" class="flagbtn" data-flag-id="'+id+'" data-flag-key="'+escapeHtml(key)+'">⚑ Report an issue</button></div>';
  }catch(e){ return ""; /* a flag control must never break the review list */ }
}
/* One delegated listener set for every flag control and for the
   sheet itself, registered once — it covers rows rendered by any
   review list, present or future. */
function flagWire(){
  var st=flagState(); if(st.wired) return; st.wired=true;
  document.addEventListener("click", function(e){
    try{
      var t=e.target; if(!t || !t.closest) return;
      var fb=t.closest(".flagbtn[data-flag-id]"); if(fb){ flagOpenSheet(fb.getAttribute("data-flag-id"), fb); return; }
      var chip=t.closest(".flagchip"); if(chip){ flagPickReason(chip); return; }
      if(t.closest("#flagSubmit")){ flagSubmitSheet(); return; }
      if(t.closest("#flagCancel") || t.closest("#flagCloseX")){ flagCloseSheet(); return; }
      if(t.id==="flagSheet") flagCloseSheet();
    }catch(err){ /* flagging never surfaces an error */ }
  });
  document.addEventListener("keydown", function(e){
    try{
      if(e.key==="Escape"){
        var sh=$("flagSheet");
        if(sh && !sh.classList.contains("hidden")) flagCloseSheet();
      }
    }catch(err){}
  });
}
function flagOpenSheet(id, btn){
  var st=flagState(); var info=st.ui[id]; if(!info) return;
  var sh=$("flagSheet"); if(!sh) return;
  st.sheetCtx={info:info, btn:btn}; st.reason="";
  var qEl=$("flagSheetQ"); if(qEl) qEl.textContent=info.q;
  var note=$("flagNote"); if(note) note.value="";
  var th=$("flagThanks"); if(th) th.classList.add("hidden");
  var sub=$("flagSubmit"); if(sub) sub.disabled=true;
  var chips=sh.querySelectorAll(".flagchip");
  for(var i=0;i<chips.length;i++){ chips[i].classList.remove("sel"); chips[i].setAttribute("aria-pressed","false"); }
  sh.classList.remove("hidden");
  document.body.classList.add("overlay-open");
  if(chips.length){ try{ chips[0].focus(); }catch(e){} }
}
function flagPickReason(chip){
  var st=flagState(); st.reason=chip.getAttribute("data-reason")||"";
  var sh=$("flagSheet"); if(!sh) return;
  var chips=sh.querySelectorAll(".flagchip");
  for(var i=0;i<chips.length;i++){
    var on=(chips[i]===chip);
    chips[i].classList.toggle("sel", on);
    chips[i].setAttribute("aria-pressed", String(on));
  }
  var sub=$("flagSubmit"); if(sub) sub.disabled=!st.reason;
}
function flagCloseSheet(){
  var sh=$("flagSheet"); if(sh) sh.classList.add("hidden");
  document.body.classList.remove("overlay-open");
  var st=flagState(); st.sheetCtx=null; st.reason="";
}
/* Submit: the question is marked flagged on this device FIRST
   (that state is permanent, whatever the network does), the
   report joins the retry queue, every on-screen control for the
   question flips to its flagged state with a brief thanks beside
   it, the sheet shows its own thanks and closes, and the queue
   flush is attempted in the background. */
function flagSubmitSheet(){
  var st=flagState(); var ctx=st.sheetCtx; if(!ctx || !st.reason) return;
  var info=ctx.info;
  var noteEl=$("flagNote");
  var note=noteEl ? String(noteEl.value||"").trim().slice(0,140) : "";
  var payload={reportId:flagNewReportId(), question:info.q, answer:info.a, category:info.cat, mode:info.mode, reason:st.reason};
  if(note) payload.note=note;
  if(info.name && info.name!=="Player") payload.name=info.name;
  var b=flagBuildId(); if(b) payload.build=b;
  var key=flagQKey(info.q);
  var rec=flagLoadRec();
  if(key) rec.flagged[key]=1;
  rec.queue.push({payload:payload, attempts:0});
  flagSaveRec();
  flagMarkFlaggedInDom(key);
  var th=$("flagThanks"); if(th) th.classList.remove("hidden");
  var sub=$("flagSubmit"); if(sub) sub.disabled=true;
  setTimeout(function(){ flagCloseSheet(); }, 1200);
  flagFlushQueue();
}
function flagMarkFlaggedInDom(key){
  if(!key) return;
  var btns=document.querySelectorAll(".flagbtn[data-flag-key]");
  for(var i=0;i<btns.length;i++){
    if(btns[i].getAttribute("data-flag-key")!==key) continue;
    btns[i].textContent="✓ Flagged for review";
    btns[i].classList.add("done");
    btns[i].disabled=true;
    btns[i].removeAttribute("data-flag-id");
    var row=btns[i].parentNode;
    if(row && !row.querySelector(".flagthanks")){
      var sp=document.createElement("span");
      sp.className="flagthanks"; sp.textContent="Thanks — we'll take a look.";
      row.appendChild(sp);
      (function(el){ setTimeout(function(){ if(el.parentNode) el.parentNode.removeChild(el); }, 4000); })(sp);
    }
  }
}
/* FIFO flush of the retry queue, one report at a time. Success
   removes the head and moves on; a failure counts an attempt —
   the item stays for the next load until it reaches 5 attempts,
   then it is dropped. Called on submit and on every game load
   (via renderScoreBoard). Never throws, never shows anything. */
function flagFlushQueue(){
  var st=flagState(); if(st.busy) return;
  if(typeof fetch!=="function") return;
  var rec=flagLoadRec(); if(!rec.queue.length) return;
  st.busy=true;
  var head=rec.queue[0];
  function settle(ok){
    st.busy=false;
    var r2=flagLoadRec();
    for(var i=0;i<r2.queue.length;i++){
      if(!r2.queue[i].payload || r2.queue[i].payload.reportId!==head.payload.reportId) continue;
      if(ok){ r2.queue.splice(i,1); flagSaveRec(); flagFlushQueue(); }
      else{
        r2.queue[i].attempts=(r2.queue[i].attempts||0)+1;
        if(r2.queue[i].attempts>=5){ r2.queue.splice(i,1); flagSaveRec(); flagFlushQueue(); }
        else flagSaveRec();
      }
      break;
    }
  }
  try{
    fetch(flagEndpoint(),{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(head.payload)
    }).then(function(r){ settle(!!(r && r.ok)); }, function(){ settle(false); });
  }catch(e){ settle(false); }
}

function updateBestLine(){
  $("bestLine").innerHTML="Session best: <b>"+(sessionBest.gauntlet?sessionBest.gauntlet+" pts":"—")+"</b>";
}
function revealCreatorMode(){
  creatorRevealed=true;
  var p=$("creatorPanel"); if(p) p.classList.remove("hidden");
}
/* Play bonus round (Creator): the same 5-question Super Hard
   bonus round an earned 1,000+ finish appends — same dealer,
   typed and strict, Round 4 clock via the typed pace clock,
   5 pts each, Q5 the doubler, total capped at 1,280 — started
   directly from a 0 base, with its intro first. */
function startCreatorBonusGame(){
  installSeed(null);
  var items=buildBonusQuestions();
  if(!items || !items.length) return;
  pendingFlags={creator:true, creatorKind:"bonus"};
  startGame("gauntlet", items);
}
/* Play Legend game (Creator): the same 20-question Legend
   Gauntlet a perfect 1,280 unlocks — same tier ladder, wager
   finales, and faster Legend clocks — started directly. */
function startCreatorLegendGame(){
  installSeed(null);
  pendingFlags={creator:true, creatorKind:"legend"};
  startGame("legend", buildLegendGauntlet());
}
/* Challenge a friend: copies a link carrying THIS game's seed —
   the seed generated when this Gauntlet started, that this game
   was dealt from, and that has been stored on the game ever since
   (state.seed) — plus this game's pace. Anyone who opens it is
   dealt the identical 20 questions the challenger just played —
   see CHALLENGE DEALS at the top of the script. There is no
   backend: the friend's score is saved only on their own device,
   so the confirmation says plainly that scores are compared by
   telling each other. */
function copyTextToClipboard(text, done){
  function fallback(){
    try{
      var ta=document.createElement("textarea");
      ta.value=text; ta.style.position="fixed"; ta.style.opacity="0";
      document.body.appendChild(ta); ta.select();
      var ok=false;
      try{ ok=document.execCommand("copy"); }catch(e){}
      document.body.removeChild(ta);
      done(ok);
    }catch(e){ done(false); }
  }
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(function(){ done(true); }, fallback);
  } else fallback();
}
function shareScoreText(){
  if(!state) return "";
  var where=" on Trivia or Nada";
  if(state.suddenDeath) where=" in Sudden Death on Trivia or Nada";
  else if(state.mode==="daily") where=" in the Daily Gauntlet on Trivia or Nada";
  else if(state.mode==="legend") where=" in the Legend Gauntlet on Trivia or Nada";
  else if(state.challenge) where=" in a Trivia Gauntlet challenge on Trivia or Nada";
  return "I scored "+state.score+where+" — can you beat it?";
}
/* The mode line printed on the card: one of the four Gauntlet
   family names. A challenge game and a bonus-completed game
   both print as the Trivia Gauntlet they were played as. */
function scoreCardModeText(){
  if(!state) return "Trivia Gauntlet";
  if(state.suddenDeath) return "Sudden Death";
  if(state.mode==="daily") return "Daily Gauntlet";
  if(state.mode==="legend") return "Legend Gauntlet";
  return "Trivia Gauntlet";
}
function scoreCardDateText(){
  try{ return new Date().toLocaleDateString("en-US",{month:"long", day:"numeric", year:"numeric"}); }
  catch(e){ return new Date().toDateString(); }
}
function scFitPx(ctx, text, maxWidth, startPx, weight, family){
  var px=startPx;
  ctx.font=weight+" "+px+"px "+family;
  while(px>18 && ctx.measureText(text).width>maxWidth){ px-=4; ctx.font=weight+" "+px+"px "+family; }
  return px;
}
function scRoundRect(ctx, x, y, w, h, r){
  ctx.beginPath();
  ctx.moveTo(x+r, y);
  ctx.arcTo(x+w, y, x+w, y+h, r);
  ctx.arcTo(x+w, y+h, x, y+h, r);
  ctx.arcTo(x, y+h, x, y, r);
  ctx.arcTo(x, y, x+w, y, r);
  ctx.closePath();
}
/* Draw the card: 1080 × 1350 (4:5 portrait) — large, legible
   type at phone share-sheet size, and a standard social-card
   ratio when posted. Returns the canvas, or null if the 2d
   context is unavailable. */
function drawScoreCard(){
  if(!state) return null;
  var W=1080, H=1350, CX=W/2;
  var c=document.createElement("canvas"); c.width=W; c.height=H;
  var x=c.getContext("2d"); if(!x) return null;
  /* Stage background: the game's deep navy with its glows. */
  var g=x.createLinearGradient(0,0,0,H);
  g.addColorStop(0,"#0a1230"); g.addColorStop(.46,"#070d24"); g.addColorStop(1,"#05081a");
  x.fillStyle=g; x.fillRect(0,0,W,H);
  function glow(cx, cy, r, col){
    var rg=x.createRadialGradient(cx,cy,0,cx,cy,r);
    rg.addColorStop(0,col); rg.addColorStop(1,"rgba(0,0,0,0)");
    x.fillStyle=rg; x.fillRect(cx-r, cy-r, r*2, r*2);
  }
  glow(CX,-90,640,"rgba(147,51,234,.45)");
  glow(-100,H*.34,540,"rgba(37,99,235,.30)");
  glow(W+100,H*.62,540,"rgba(219,39,119,.18)");
  glow(CX,H+90,640,"rgba(255,200,31,.12)");
  /* Starfield, from a fixed seed so the card is the same every
     time it is drawn for the same game. */
  var sd=987654321;
  function rnd(){ sd=(Math.imul(sd,1103515245)+12345) & 0x7fffffff; return sd/0x7fffffff; }
  for(var i=0;i<90;i++){
    x.beginPath();
    x.arc(rnd()*W, rnd()*H, rnd()<.18 ? 2.2 : 1.3, 0, Math.PI*2);
    x.fillStyle = i%5===0 ? "rgba(255,217,77,.55)" : "rgba(255,255,255,.45)";
    x.fill();
  }
  /* Panel, echoing the game's cards. */
  var pg=x.createLinearGradient(0,36,0,H-36);
  pg.addColorStop(0,"rgba(24,37,80,.92)"); pg.addColorStop(1,"rgba(16,26,61,.92)");
  scRoundRect(x, 36, 36, W-72, H-72, 28);
  x.fillStyle=pg; x.fill();
  x.lineWidth=3; x.strokeStyle="#3a4d94"; x.stroke();
  x.textAlign="left"; x.textBaseline="alphabetic";
  try{ x.letterSpacing="5px"; }catch(e){}
  x.fillStyle="#b9c4ea";
  var brand="A Savaille Entertainment Game";
  var brandPx=scFitPx(x, brand, 920, 30, "700", SC_MONO);
  x.font="700 "+brandPx+"px "+SC_MONO;
  x.fillText(brand, CX-x.measureText(brand).width/2, 128);
  try{ x.letterSpacing="0px"; }catch(e){}
  /* Logo: TRIVIA in gold, OR in white, NADA in red — the cover
     treatment, chunky Archivo with the dark outline and offset
     shadow on the two coloured words. */
  var logoPx=scFitPx(x, "TRIVIA OR NADA", 900, 118, "900", SC_FONT);
  x.font="900 "+logoPx+"px "+SC_FONT;
  var segs=[["TRIVIA ","#ffc81f",true],["OR ","#ffffff",false],["NADA","#ff3b30",true]];
  var total=0, widths=[];
  segs.forEach(function(s){ var w=x.measureText(s[0]).width; widths.push(w); total+=w; });
  var lx=CX-total/2;
  x.save();
  x.shadowColor="rgba(0,0,0,.6)"; x.shadowBlur=18; x.shadowOffsetY=6;
  segs.forEach(function(s, idx){
    if(s[2]){
      x.lineWidth=7; x.lineJoin="round"; x.strokeStyle="#04081a";
      x.strokeText(s[0], lx, 268);
    }
    x.fillStyle=s[1]; x.fillText(s[0], lx, 268);
    lx+=widths[idx];
  });
  x.restore();
  /* Marquee bulbs under the logo. */
  x.save();
  x.shadowColor="rgba(255,200,31,.85)"; x.shadowBlur=12;
  x.fillStyle="#ffe98a";
  for(var b=-4;b<=4;b++){ x.beginPath(); x.arc(CX+b*40, 322, 6, 0, Math.PI*2); x.fill(); }
  x.restore();
  /* Player name. Update 1.3 · Stage 1: when the selected
     avatar's image is ready it is drawn in a gold-ringed rounded
     frame beside the name, the two centred as one group; when it
     is not, the name is drawn exactly as in 1.2. */
  var name=String(state.name||"Player");
  var s1Img=(window.s1CardImgReady && window.s1CardImg) ? window.s1CardImg : null;
  if(s1Img){
    var namePx=scFitPx(x, name, 700, 72, "900", SC_FONT);
    x.font="900 "+namePx+"px "+SC_FONT; x.fillStyle="#ffffff";
    var s1nw=x.measureText(name).width, s1ad=108, s1gap=28;
    var s1gx=CX-(s1ad+s1gap+s1nw)/2, s1gy=452-30-s1ad/2;
    x.save();
    scRoundRect(x, s1gx, s1gy, s1ad, s1ad, 22); x.clip();
    x.drawImage(s1Img, s1gx, s1gy, s1ad, s1ad);
    x.restore();
    x.save();
    scRoundRect(x, s1gx, s1gy, s1ad, s1ad, 22);
    x.lineWidth=5; x.strokeStyle="#ffc81f"; x.stroke();
    x.restore();
    x.fillText(name, s1gx+s1ad+s1gap, 452);
  } else {
    var namePx=scFitPx(x, name, 880, 72, "900", SC_FONT);
    x.font="900 "+namePx+"px "+SC_FONT; x.fillStyle="#ffffff";
    x.fillText(name, CX-x.measureText(name).width/2, 452);
  }
  /* Mode pill. */
  var mode=scoreCardModeText().toUpperCase();
  x.font="700 36px "+SC_FONT;
  var mw=x.measureText(mode).width, pw=mw+76, ph=66, px0=CX-pw/2, py0=492;
  scRoundRect(x, px0, py0, pw, ph, 33);
  x.fillStyle="#1e2c5e"; x.fill();
  x.lineWidth=2.5; x.strokeStyle="#3a4d94"; x.stroke();
  x.fillStyle="#4cc9ff";
  x.fillText(mode, CX-mw/2, py0+45);
  /* Score, big — the same gold as the results screen. */
  try{ x.letterSpacing="5px"; }catch(e){}
  x.fillStyle="#b9c4ea"; x.font="700 33px "+SC_FONT;
  var fl="FINAL SCORE";
  x.fillText(fl, CX-x.measureText(fl).width/2, 668);
  try{ x.letterSpacing="0px"; }catch(e){}
  var scoreStr=Number(state.score||0).toLocaleString("en-US");
  var scorePx=scFitPx(x, scoreStr, 880, 250, "900", SC_FONT);
  x.font="900 "+scorePx+"px "+SC_FONT;
  x.save();
  x.shadowColor="rgba(0,0,0,.6)"; x.shadowBlur=22; x.shadowOffsetY=7;
  x.lineWidth=8; x.lineJoin="round"; x.strokeStyle="#04081a";
  x.strokeText(scoreStr, CX-x.measureText(scoreStr).width/2, 880);
  x.fillStyle="#ffc81f";
  x.fillText(scoreStr, CX-x.measureText(scoreStr).width/2, 880);
  x.restore();
  try{ x.letterSpacing="8px"; }catch(e){}
  x.fillStyle="#ffd94d"; x.font="700 38px "+SC_FONT;
  var pts="POINTS";
  x.fillText(pts, CX-x.measureText(pts).width/2, 958);
  try{ x.letterSpacing="0px"; }catch(e){}
  /* Achievement title (Update 1.2): the title this score earned,
     drawn beneath the score in gold. Gauntlet-family and Legend
     games always earn one (see achievementTitle); the date,
     rule, and site below shift down a touch to make room, and
     everything else on the card is exactly where it was. */
  var achTitle=achievementTitle(state.score, state.mode);
  if(achTitle){
    var achPx=scFitPx(x, achTitle, 880, 54, "900", SC_FONT);
    x.font="900 "+achPx+"px "+SC_FONT; x.fillStyle="#ffd94d";
    x.save();
    x.shadowColor="rgba(0,0,0,.55)"; x.shadowBlur=12; x.shadowOffsetY=3;
    x.fillText(achTitle, CX-x.measureText(achTitle).width/2, 1038);
    x.restore();
  }
  /* Date. */
  var dt=scoreCardDateText();
  x.font="500 42px "+SC_FONT; x.fillStyle="#b9c4ea";
  x.fillText(dt, CX-x.measureText(dt).width/2, 1116);
  /* Footer rule + site. */
  x.fillStyle="rgba(58,77,148,.9)"; x.fillRect(CX-180, 1180, 360, 3);
  x.font="700 40px "+SC_MONO; x.fillStyle="#ffd94d";
  var site="triviaornada.com";
  x.fillText(site, CX-x.measureText(site).width/2, 1260);
  return c;
}
function scoreCardBlob(cb){
  var canvas=null;
  try{ canvas=drawScoreCard(); }catch(e){ canvas=null; }
  if(!canvas || typeof canvas.toBlob!=="function"){ cb(null); return; }
  try{ canvas.toBlob(function(b){ cb(b||null); }, "image/png"); }
  catch(e){ cb(null); }
} /* v4, Update 1.3 · Stage 1: a worn avatar draws its action portrait where one exists */
function scoreCardKey(){
  if(!state) return "";
  return [SCORE_CARD_DESIGN, state.name||"Player", state.score, scoreCardModeText(), scoreCardDateText()].join("|");
}
function scoreCardFileFrom(blob){
  if(!blob || typeof File==="undefined") return null;
  try{ return new File([blob], "trivia-or-nada-score.png", {type:"image/png"}); }
  catch(e){ return null; }
}
function prepareScoreCard(){
  scoreCardCache=null;
  if(!state) return;
  var key=scoreCardKey();
  scoreCardBlob(function(blob){
    if(!blob || !state || scoreCardKey()!==key) return;
    scoreCardCache={key:key, blob:blob, file:scoreCardFileFrom(blob)};
  });
}
function hideScoreCardDownload(){
  var w=$("scoreCardDlWrap"); if(w) w.classList.add("hidden");
  var a=$("scoreCardDl"); if(a) a.removeAttribute("href");
  if(scoreCardUrl){ try{ URL.revokeObjectURL(scoreCardUrl); }catch(e){} scoreCardUrl=null; }
}
function offerScoreCardDownload(){
  scoreCardBlob(function(blob){
    if(!blob || !state) return;
    var w=$("scoreCardDlWrap"), a=$("scoreCardDl"); if(!w || !a) return;
    if(scoreCardUrl){ try{ URL.revokeObjectURL(scoreCardUrl); }catch(e){} scoreCardUrl=null; }
    try{ scoreCardUrl=URL.createObjectURL(blob); }catch(e){ return; }
    a.href=scoreCardUrl;
    a.setAttribute("download", "trivia-or-nada-score-"+(state.score||0)+".png");
    w.classList.remove("hidden");
  });
}
function copyShareScore(){
  if(!state) return;
  var full=shareScoreText()+" "+SHARE_SITE_URL;
  copyTextToClipboard(full, function(ok){
    var msg=$("shareMsg"); if(!msg) return;
    msg.textContent = ok
      ? "Copied! Paste it anywhere to share: “"+full+"”"
      : "Couldn't copy automatically — copy this yourself: "+full;
    /* The copy path is the one place the card can't ride along
       automatically — offer it as a download beside the Copied!
       confirmation so the player can post it by hand. */
    offerScoreCardDownload();
  });
}
/* Text-only share: exactly the behaviour Share had before the
   score card — native sheet when offered, copy fallback when
   it isn't or it fails for any reason but the player backing
   out. Used whenever the sheet can't take the card image. */
function textShareScore(){
  if(!state) return;
  var msg=$("shareMsg");
  if(navigator.share){
    var handedOff=false;
    try{
      var p=navigator.share({title:"Trivia or Nada", text:shareScoreText(), url:SHARE_SITE_URL});
      if(p && typeof p.then==="function"){
        handedOff=true;
        p.then(function(){ if(msg) msg.textContent="Shared — thanks for spreading the word!"; },
               function(err){ if(!(err && err.name==="AbortError")) copyShareScore(); });
      }
    }catch(e){ handedOff=false; }
    if(handedOff) return;
  }
  copyShareScore();
}
function openOverlay(id, btnId){
  var o=$(id); if(!o) return;
  overlayReturnFocus=$(btnId)||null;
  o.classList.remove("hidden");
  document.body.classList.add("overlay-open");
  var b=$(btnId); if(b) b.setAttribute("aria-expanded","true");
  o.scrollTop=0;
  var x=o.querySelector(".howto-x"); if(x) x.focus();
  /* The Trophy Room lives in the profile panel: its tune plays
     while that panel is open and stops when it closes. */
  if(id==="profilePanel"){ musicTrophyWanted=true; musicSync(); }
}
function closeOverlay(id, btnId){
  var o=$(id); if(!o) return;
  o.classList.add("hidden");
  document.body.classList.remove("overlay-open");
  var b=$(btnId); if(b) b.setAttribute("aria-expanded","false");
  if(overlayReturnFocus){ overlayReturnFocus.focus(); overlayReturnFocus=null; }
  if(id==="profilePanel"){ musicTrophyWanted=false; musicSync(); }
}

/* Post-game name save: renames the just-finished game's saved entry
   from "Player" to the entered name (trimmed; empty leaves the entry
   untouched), refreshes the results title, the rank line, and the
   cover board, and fills the cover name field so the next game
   starts with the name already in. The same name is also sent to
   the shared leaderboard for that game's row (see the shared
   block's post-game rename note). */
function saveLateName(){
  if(!state || !state.hsEntry || !state.startedNameless) return;
  var v=$("lateName").value.trim();
  if(!v){
    $("lateNameMsg").textContent="Type your name first — or leave this score under “Player”.";
    return;
  }
  var res=renameLocalScore(state.hsEntry, v, state.pace);
  if(!res){
    $("lateNameMsg").textContent="Couldn't save the name on this device — this score stays under “Player”.";
    return;
  }
  state.hsEntry.n=v;
  state.name=v;
  state.startedNameless=false;
  $("playerName").value=v;
  /* The profile remembers the rename too, so it shows the new
     name from now on (Stage 1 helper; guarded like the other
     cross-block calls). */
  if(typeof s1RememberPlayerName==="function") s1RememberPlayerName(v);
  $("resName").textContent=v;
  $("resTitle").textContent = state.endedEarly ? "Called It Early" : "Final Score";
  /* The "Rank on this device" line was removed from the results
     screen — a post-game rename refreshes the title and the
     boards, and leaves this line cleared like endGame does. */
  $("resRank").innerHTML="";
  $("lateNameMsg").textContent="Saved! This score is now under “"+v+"” on this device.";
  $("lateNameBtn").disabled=true;
  /* The same rename goes to the shared leaderboard. This flow
     only runs for a game started with no name, so its shared row
     (if the mode has one) was submitted as "Player" — rename it
     by the id the submit returned, which the submit handler kept
     on this game's state / device entry. If that response hasn't
     arrived yet, remember the wanted name against THIS game and
     the submit handler fires the rename the moment the id lands.
     A name that is empty or still "Player" never renames, and a
     game that was never submitted (practice round) sends nothing.
     Best-effort throughout: requestSharedRename stores a pending
     rename for retry and never blocks or errors this screen. */
  if(v!=="Player" && SHARED_MODES[modeLabel(state.suddenDeath ? "suddendeath" : (state.challenge ? "challenge" : state.mode))]){
    var sharedId=state.sharedId || (state.hsEntry && state.hsEntry.sharedId) || null;
    if(sharedId) requestSharedRename(sharedId, v);
    else sharedRenameWanted={game:state, name:v};
  }
  renderScoreBoard();
}
function holdTypedScroll(){
  if(document.body.classList.contains("kbopen")) typedUserHold=true;
}
function scrollTypedIntoView(){
  if(typedUserHold) return;
  var input=$("typedInput");
  if(!input || document.activeElement!==input) return;
  var row=input.parentNode;
  if(row && row.scrollIntoView) row.scrollIntoView({block:"end", behavior:"smooth"});
}
function scheduleTypedScroll(){ setTimeout(scrollTypedIntoView, 350); }