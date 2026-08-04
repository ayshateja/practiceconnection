/* ===========================================================
   Practice Connection — app logic
   =========================================================== */

const app = document.getElementById('app');

function esc(s){
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function topbar(showBack, backHref, backLabel){
  return `
    <div class="topbar">
      <a class="brand" href="#/">
        <span class="brand-mark" aria-hidden="true"></span>
        Practice Connection
      </a>
      <div class="nav-actions">
        ${showBack ? `<a class="btn" href="${backHref}">&larr; ${esc(backLabel)}</a>` : ''}
        <a class="btn btn-ghost" href="#/">Menu</a>
      </div>
    </div>
  `;
}

/* ---------- ROUTES ---------- */

function router(){
  const hash = location.hash || '#/';
  const parts = hash.replace(/^#\//,'').split('/').filter(Boolean);

  if(parts.length === 0){
    renderHome();
  } else if(parts[0] === 'category' && parts[1] && CATEGORIES[parts[1]]){
    if(parts[1] === 'journal'){
      if(parts[2] !== undefined){
        renderJournalPage(findJournalIndex(parts[2]));
      } else {
        renderJournalTOC();
      }
    } else if(parts[2] !== undefined){
      renderCard(parts[1], parseInt(parts[2],10));
    } else {
      renderTOC(parts[1]);
    }
  } else {
    renderHome();
  }
  window.scrollTo({top:0, behavior:'instant' in window ? 'instant':'auto'});
}

function findJournalIndex(id){
  const i = JOURNAL_PAGES.findIndex(p => p.id === id);
  return i === -1 ? 0 : i;
}

/* ---------- DRAW A CARD ---------- */

const CARD_CATEGORY_KEYS = ["anchor","see-clearly","move-toward","share-yourself","stay-connected"];

function drawCard(catKey){
  const key = catKey || CARD_CATEGORY_KEYS[Math.floor(Math.random() * CARD_CATEGORY_KEYS.length)];
  const cards = CARDS[key];
  const idx = Math.floor(Math.random() * cards.length);
  const newHash = `#/category/${key}/${idx}`;
  if(location.hash === newHash){
    router();
  } else {
    location.hash = newHash;
  }
}

/* ---------- HOME ---------- */

function renderHome(){
  const order = ["anchor","see-clearly","move-toward","share-yourself","stay-connected","journal"];

  app.innerHTML = `
    <div class="topbar topbar-home">
      <div class="topbar-left">
        <button type="button" class="btn-draw-small" id="draw-any-btn">Draw a card for me</button>
      </div>
      <a class="brand" href="#/">
        <span class="brand-mark" aria-hidden="true"></span>
        Practice Connection
      </a>
      <div class="nav-actions"></div>
    </div>

    <div class="hero">
      <p class="eyebrow">A digital companion</p>
      <h1>Practice Connection<br><em>Card Deck</em></h1>
      <p class="lede">Small experiments in relating differently. Select a capacity and card that resonates. There&rsquo;s no wrong place to start.</p>
    </div>

    <div class="deck" role="list" aria-label="Card categories">
      ${order.map(key => {
        const c = CATEGORIES[key];
        const count = key === 'journal' ? JOURNAL_PAGES.length : CARDS[key].length;
        return `
        <a class="deck-tile" role="listitem" href="#/category/${key}" style="background:${c.tile}; color:${c.ink}">
          <span class="tile-index">${count} ${key === 'journal' ? 'pages' : 'cards'}</span>
          <span class="tile-name">${esc(c.name)}</span>
        </a>`;
      }).join('')}
    </div>
    <p class="hero-hint" style="text-align:center">Tap a category to see its cards.</p>

    <p class="safety-note">Practice Connection is a self-guided practice, not therapy or crisis support. You can stop or pause at any time.</p>

    <p class="site-footer">Designed by Aysha Teja</p>
  `;

  document.getElementById('draw-any-btn').addEventListener('click', () => drawCard());
}

/* ---------- TABLE OF CONTENTS ---------- */

function stripHtml(html){
  const d = document.createElement('div');
  d.innerHTML = html;
  return d.textContent || '';
}

function renderTOC(catKey){
  const cat = CATEGORIES[catKey];
  const cards = CARDS[catKey];

  app.innerHTML = `
    ${topbar(true, '#/', 'Menu')}
    <div class="section-head">
      <div class="section-chip" style="background:${cat.tile}"></div>
      <h1>${esc(cat.name)}</h1>
    </div>
    <p class="section-tagline">${esc(cat.tagline)}</p>

    <div class="toc-grid">
      ${cards.map((card,i) => `
        <a class="toc-card" href="#/category/${catKey}/${i}" style="background:${cat.bg}">
          <div class="toc-title">${esc(card.title)}</div>
        </a>
      `).join('')}
    </div>
  `;
}

/* ---------- FULL CARD ---------- */

function renderCard(catKey, index){
  const cat = CATEGORIES[catKey];
  const cards = CARDS[catKey];
  if(index < 0 || index >= cards.length){ renderTOC(catKey); return; }
  const card = cards[index];

  app.innerHTML = `
    ${topbar(true, `#/category/${catKey}`, cat.name + ' contents')}

    <div class="card-stage">
      <div class="card" style="background:${cat.bg}">
        <h2 class="card-title">${esc(card.title)}</h2>
        <div class="card-body">
          ${card.paragraphs.map(p => `<p>${p}</p>`).join('')}
          ${card.list ? `<ul>${card.list.map(li => `<li>${esc(li)}</li>`).join('')}</ul>` : ''}
        </div>
        ${card.quote ? `<blockquote class="card-quote" style="border-color:${cat.tile}">${card.quote}</blockquote>` : ''}
        ${card.question ? `
          <div class="card-star" aria-hidden="true">&#10022;</div>
          <p class="card-question">${card.question}</p>
        ` : ''}
        <div class="card-footer"><span>${esc(cat.name)}</span></div>
      </div>
    </div>

    <div class="card-nav">
      <a class="btn" href="#/category/${catKey}/${index-1}" ${index<=0?'disabled':''}>&larr; Previous</a>
      <a class="btn" href="#/category/${catKey}">All ${esc(cat.name)} cards</a>
      <a class="btn" href="#/category/${catKey}/${index+1}" ${index>=cards.length-1?'disabled':''}>Next &rarr;</a>
    </div>
  `;
}

/* ---------- JOURNAL: TOC ---------- */

function renderJournalTOC(){
  const cat = CATEGORIES['journal'];

  app.innerHTML = `
    ${topbar(true, '#/', 'Menu')}
    <div class="section-head">
      <div class="section-chip" style="background:${cat.tile}"></div>
      <h1>${esc(cat.name)}</h1>
    </div>
    <p class="section-tagline">${esc(cat.tagline)} Your entries save automatically on this device.</p>

    <div class="toc-grid">
      ${JOURNAL_PAGES.map((p) => `
        <a class="toc-card" href="#/category/journal/${p.id}" style="background:${cat.bg}">
          <span class="toc-num">${journalKindLabel(p)}</span>
          <div>
            <div class="toc-title">${esc(p.title)}${p.index ? ' ' + p.index : ''}</div>
          </div>
        </a>
      `).join('')}
    </div>
  `;
}

function journalKindLabel(p){
  const labels = {
    welcome: 'Start here', visualization: 'Reflection', longing: 'Reflection',
    notice: 'Notice practice', reflect: 'Reflection', practice: 'Weekly practice',
    celebrate: 'Reflection', words: 'Reference'
  };
  return labels[p.kind] || 'Journal';
}

/* ---------- JOURNAL: storage ---------- */

const STORE_PREFIX = 'pc_journal__';

function jGet(key){
  try{ return localStorage.getItem(STORE_PREFIX + key) || ''; }catch(e){ return ''; }
}
function jSet(key, value){
  try{ localStorage.setItem(STORE_PREFIX + key, value); }catch(e){}
}
function jClearPage(pageId){
  try{
    Object.keys(localStorage)
      .filter(k => k.startsWith(STORE_PREFIX + pageId + '__'))
      .forEach(k => localStorage.removeItem(k));
  }catch(e){}
}

function wireAutosave(root){
  const inputs = root.querySelectorAll('[data-store]');
  inputs.forEach(el => {
    const key = el.getAttribute('data-store');
    el.value = jGet(key);
    let t;
    el.addEventListener('input', () => {
      clearTimeout(t);
      t = setTimeout(() => {
        jSet(key, el.value);
        const note = root.querySelector('.jp-save-note');
        if(note){
          note.classList.add('show');
          clearTimeout(note._t);
          note._t = setTimeout(()=>note.classList.remove('show'), 1400);
        }
      }, 400);
    });
  });
}

/* ---------- JOURNAL: full page ---------- */

function renderJournalPage(idx){
  const cat = CATEGORIES['journal'];
  const page = JOURNAL_PAGES[idx];
  if(!page){ renderJournalTOC(); return; }

  let body = '';
  switch(page.kind){
    case 'welcome': body = journalWelcome(); break;
    case 'visualization': body = journalVisualization(page); break;
    case 'longing': body = journalLonging(page); break;
    case 'notice': body = journalNotice(page); break;
    case 'reflect': body = journalReflect(page); break;
    case 'practice': body = journalPractice(page); break;
    case 'celebrate': body = journalCelebrate(page); break;
    case 'words': body = journalWords(page); break;
  }

  app.innerHTML = `
    ${topbar(true, '#/category/journal', 'Journal contents')}
    <div class="card-stage">
      <div class="journal-page">
        ${body}
      </div>
    </div>
    <div class="card-nav">
      <a class="btn" href="#/category/journal/${idx>0 ? JOURNAL_PAGES[idx-1].id : page.id}" ${idx<=0?'disabled':''}>&larr; Previous</a>
      <a class="btn" href="#/category/journal">All journal pages</a>
      <a class="btn" href="#/category/journal/${idx<JOURNAL_PAGES.length-1 ? JOURNAL_PAGES[idx+1].id : page.id}" ${idx>=JOURNAL_PAGES.length-1?'disabled':''}>Next &rarr;</a>
    </div>
  `;

  wireAutosave(app);

  const resetBtn = app.querySelector('[data-reset]');
  if(resetBtn){
    resetBtn.addEventListener('click', () => {
      if(confirm('Clear what you\u2019ve written on this page? This can\u2019t be undone.')){
        jClearPage(page.id);
        renderJournalPage(idx);
      }
    });
  }
}

function pageKicker(p){
  return `<div class="jp-kicker">${p.index ? p.kind + ' &middot; page ' + p.index : 'Practice Connection Journal'}</div>`;
}

function journalWelcome(){
  return `
    <div class="jp-kicker">Practice Connection Journal</div>
    <h2>Welcome.</h2>
    <p class="jp-sub">We all long for meaningful connection.</p>
    <p>This journal is designed to be used alongside the Practice Connection cards. Together, they invite you to imagine the kinds of relationships you want, notice the patterns that shape your responses and practice new ways of relating.</p>
    <p>As you move through these pages, be gentle with yourself. Every pattern you notice once helped protect you in some way. Curiosity will take you further than self-judgment.</p>
    <p>I hope this journal becomes a safe place to grow the courage, skills, and capacity for the kind of relationships you long for.</p>
    <p style="font-size:.9rem;color:var(--ink-soft);border-top:1px dashed rgba(0,80,0,.25);padding-top:1rem;margin-top:1.6rem;"><strong>A note on support:</strong> Practice Connection is designed to support reflection and practice, not to replace therapy or mental health care. If a practice brings up more than you want to hold on your own, consider reaching out to a therapist or someone you trust.</p>
  `;
}

function journalVisualization(page){
  return `
    ${pageKicker(page)}
    <h2>Visualization</h2>
    <p class="jp-sub">&ldquo;Change is a courageous act of radical imagination.&rdquo; &mdash; Marcelo Bronstein</p>
    <p>Write (or draw) about a day in the life from the future when you feel more connected, whatever that may mean for you. Start from when you wake up and walk through the day, paying attention to the small and big moments of connection.</p>
    <p>You can be as detailed or dreamy as you like. Feel free to use the prompts below to guide you, if helpful:</p>
    <ul class="jp-prompt-list">
      ${VISUALIZATION_PROMPTS.map(p=>`<li>${p}</li>`).join('')}
    </ul>
    <div class="jp-field">
      <label for="viz-text">Your day in the future</label>
      <textarea id="viz-text" data-store="visualization__entry" rows="10" placeholder="It's morning. I wake up and..."></textarea>
    </div>
    ${saveRow()}
    ${resetRow()}
  `;
}

function journalLonging(page){
  return `
    ${pageKicker(page)}
    <h2>What You're Longing For</h2>
    <p>Based on the visualization, what kinds of connections do you long for? Below are some examples, but by no means exhaustive:</p>
    <ul class="jp-prompt-list">
      ${LONGING_EXAMPLES.map(p=>`<li>${p}</li>`).join('')}
    </ul>
    <div class="jp-field">
      <label for="longing-text">What you're longing for</label>
      <textarea id="longing-text" data-store="longing__entry" rows="8" placeholder="I'm longing for..."></textarea>
    </div>
    ${saveRow()}
    ${resetRow()}
  `;
}

function journalNotice(page){
  const examples = page.showExamples ? `
    <div class="jp-examples-toggle">
      ${NOTICE_EXAMPLES.map(ex => `
        <div class="jp-example"><strong>${esc(ex.label)}</strong>${esc(ex.text)}</div>
      `).join('')}
    </div>
  ` : '';

  return `
    ${pageKicker(page)}
    <h2>Notice</h2>
    <p class="jp-sub">Understand where you are today</p>
    <p>When a moment of connection doesn't go the way you hoped, use these questions to better understand what might have been happening.</p>
    ${examples}
    ${NOTICE_QUESTIONS.map((q,i) => `
      <div class="jp-field">
        <label for="notice-${page.index}-${i}">${esc(q)}</label>
        <textarea id="notice-${page.index}-${i}" data-store="${page.id}__q${i}" rows="2"></textarea>
      </div>
    `).join('')}
    ${saveRow()}
    ${resetRow()}
  `;
}

function journalReflect(page){
  return `
    ${pageKicker(page)}
    <h2>What Are You Beginning to Notice?</h2>
    <p>As you look back across your Notice pages:</p>
    <div class="jp-field">
      <label for="reflect-stands-out">What stands out?</label>
      <textarea id="reflect-stands-out" data-store="reflect__stands_out" rows="5"></textarea>
    </div>
    <div class="jp-field">
      <label for="reflect-curious">What are you curious to try next?</label>
      <textarea id="reflect-curious" data-store="reflect__curious" rows="5"></textarea>
    </div>
    ${saveRow()}
    ${resetRow()}
  `;
}

function journalPractice(page){
  return `
    ${pageKicker(page)}
    <h2>Practice</h2>
    <p class="jp-sub">Practice creates change</p>
    <p>${page.index === 1 ? "If you're using the Practice Connection cards, choose one or two cards to practice this week. Then use these pages to reflect." : "Choose one or two cards to practice this week, then use this page to reflect."}</p>
    <div class="jp-field">
      <label for="practice-${page.index}-week">For the week ended</label>
      <input type="date" id="practice-${page.index}-week" data-store="${page.id}__week">
    </div>
    ${PRACTICE_QUESTIONS.map((q,i) => `
      <div class="jp-field">
        <label for="practice-${page.index}-${i}">${esc(q)}</label>
        <textarea id="practice-${page.index}-${i}" data-store="${page.id}__q${i}" rows="2"></textarea>
      </div>
    `).join('')}
    ${saveRow()}
    ${resetRow()}
  `;
}

function journalCelebrate(page){
  return `
    ${pageKicker(page)}
    <h2>Celebrate!</h2>
    <p class="jp-sub">Pause and notice how far you've come</p>
    <p>Use this page to celebrate the small, courageous steps you took toward connection. Whether things went as planned or not, what are you proud of? What did you learn? How have you grown?</p>
    <div class="jp-field">
      <label for="celebrate-text">Your reflection</label>
      <textarea id="celebrate-text" data-store="celebrate__entry" rows="10"></textarea>
    </div>
    ${saveRow()}
    ${resetRow()}
  `;
}

function journalWords(){
  return `
    <div class="jp-kicker">Reference</div>
    <h2>Words to Describe Your Experience</h2>
    <p class="jp-sub">Use this anytime you're stuck for words</p>
    <div class="jp-word-groups">
      <div>
        <h3>Feelings</h3>
        <ul>${FEELINGS_WORDS.map(w=>`<li>${esc(w)}</li>`).join('')}</ul>
      </div>
      <div>
        <h3>Body sensations</h3>
        <ul>${BODY_WORDS.map(w=>`<li>${esc(w)}</li>`).join('')}</ul>
      </div>
    </div>
  `;
}

function saveRow(){
  return `<div class="jp-save-row"><span class="jp-save-note">Saved on this device</span></div>`;
}
function resetRow(){
  return `<div class="reset-row"><button type="button" data-reset>Clear this page</button></div>`;
}

/* ---------- init ---------- */

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);
router();
