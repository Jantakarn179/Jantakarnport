/**
 * ==============================================================================
 * สคริปต์เว็บไซต์เรซูเม่/พอร์ตโฟลิโอ ใบบุญ (จันทกานต์ เพิ่มบุญมา)
 * - การจัดเก็บและเรนเดอร์ข้อมูลผลงาน (Portfolio Data)
 * - ระบบสลับหน้าแบบ Single Page (Hash Routing)
 * - ลูกเล่นตุ๊กตาหมาเด้งเมื่อคลิกหน้าเว็บ (Pop-up Puppy Toy)
 * ==============================================================================
 */

// ==============================================================================
// 1. ข้อมูลผลงานและประสบการณ์ (Portfolio Data Array)
// 💡 คุณสามารถแก้ไข เพิ่ม หรือลบข้อมูลผลงานได้จาก Array นี้โดยตรง:
// - id: รหัสอ้างอิงสำหรับ URL Hash เช่น 1 (#work-1)
// - icon: ไอคอนอีโมจิประจำผลงาน
// - title: ชื่อผลงาน
// - summary: คำอธิบายสั้นๆ (แสดงในการ์ดหน้าแรก)
// - detail: คำอธิบายอย่างละเอียด (แสดงในหน้ารายละเอียดผลงาน)
// - imgs: อาร์เรย์ของที่อยู่ไฟล์รูป เช่น ['images/project1.jpg', 'images/project2.jpg']
//         *หากปล่อยว่างไว้ [] ระบบจะแสดงช่องกรอบเส้นประ 3 ช่อง "ใส่รูปผลงานตรงนี้" ให้อัตโนมัติ*
// - isPlaceholder: true สำหรับการ์ดช่องว่างที่รอใส่ผลงานในอนาคต (กรอบเส้นประ)
// ==============================================================================
const portfolioData = [
  {
    id: 1,
    icon: '💬',
    title: 'LINE Chatbot ร้านส้มตำบ้านสวนจอมทอง',
    summary: 'สร้างแชตบอตให้ร้านอาหารของครอบครัว เพื่อช่วยตอบคำถามลูกค้า แนะนำเมนู และอำนวยความสะดวกในการสั่งอาหาร',
    detail: 'โปรเจกต์พัฒนาแชตบอตบน LINE Official Account สำหรับร้านอาหารของครอบครัว โดยออกแบบโครงสร้างการสนทนา (Conversation Flow) ตอบคำถามอัตโนมัติเกี่ยวกับเมนูแนะนำ ราคา เส้นทางร้าน และโปรโมชัน ช่วยลดเวลาในการตอบข้อความซ้ำๆ และเพิ่มความสะดวกสบายให้แก่ลูกค้า',
    imgs: [], // 💡 วิธีใส่รูป: ใส่ path เช่น ['images/line-bot-1.jpg', 'images/line-bot-2.jpg']
    isPlaceholder: false
  },
  {
    id: 2,
    icon: '🎮',
    title: 'Workshop เกม 3D ด้วย Gen AI',
    summary: 'เรียนรู้การสร้างเกม 3D โดยใช้ AI ช่วยในการสร้าง Asset, ออกแบบฉาก และแนวคิดเกมเพลย์',
    detail: 'เข้าร่วมการอบรมเชิงปฏิบัติการ (Workshop) การสร้างเกม 3D โดยประยุกต์ใช้เทคโนโลยี Generative AI เข้ามาช่วยในการ Generate โมเดล 3D, Texture พื้นผิว, เพลงและเสียงประกอบ รวมถึงร่างสคริปต์เกม ทำให้เข้าใจกระบวนการผสาน AI เข้ากับงานพัฒนาเกมเชิงสร้างสรรค์',
    imgs: [],
    isPlaceholder: false
  },
  {
    id: 3,
    icon: '🐍',
    title: 'ค่าย Python',
    summary: 'เข้าร่วมค่ายเขียนโปรแกรมภาษา Python ฝึกฝนตรรกะการคิดและการแก้ปัญหาด้วยโค้ด',
    detail: 'เข้าร่วมกิจกรรมค่ายเขียนโปรแกรมภาษา Python ได้เรียนรู้ตั้งแต่พื้นฐานทางตรรกะ (Logic), ตัวแปร, ฟังก์ชัน, โครงสร้างข้อมูล และการทำมินิโปรเจกต์แก้ปัญหา เสริมสร้างพื้นฐานด้านการคิดเชิงคำนวณ (Computational Thinking) และทักษะการเขียนโค้ดอย่างเป็นระบบ',
    imgs: [],
    isPlaceholder: false
  },
  {
    id: 4,
    icon: '🎨',
    title: 'ประธานชมรมศิลปะสร้างสรรค์',
    summary: 'นำทีมทำกิจกรรมและงานศิลปะของชมรม วางแผนการจัดนิทรรศการและส่งเสริมความคิดสร้างสรรค์',
    detail: 'ทำหน้าที่บริหารจัดการชมรมศิลปะสร้างสรรค์ เป็นผู้นำในการวางแผนจัดกิจกรรม นิทรรศการ และเวิร์กช็อปศิลปะภายในสถาบัน ดูแลการสื่อสารและการแบ่งบทบาทหน้าที่ของสมาชิกในทีม ฝึกฝนทักษะการเป็นผู้นำและการแก้ปัญหาเฉพาะหน้า',
    imgs: [],
    isPlaceholder: false
  },
  {
    id: 5,
    icon: '🏐',
    title: 'กัปตันทีมเก้าอี้ลูกบอล',
    summary: 'เป็นหัวหน้าทีมกีฬาเก้าอี้ลูกบอล วางแผนกลยุทธ์ สร้างกำลังใจ และพาทีมเข้าร่วมแข่งขัน',
    detail: 'รับหน้าที่เป็นกัปตันทีมกีฬาเก้าอี้ลูกบอล วางแผนการฝึกซ้อม จัดวางตำแหน่งและกลยุทธ์ในการแข่งขัน สร้างขวัญกำลังใจและความสามัคคีให้แก่สมาชิกในทีม เสริมสร้างทักษะการทำงานเป็นทีม (Teamwork) และความมีน้ำใจนักกีฬา',
    imgs: [],
    isPlaceholder: false
  },
  {
    id: 6,
    icon: '🐾',
    title: 'ช่องผลงานที่ 6',
    summary: 'ใส่ชื่อผลงานและคำอธิบายตรงนี้',
    detail: 'พื้นที่สำหรับกรอกรายละเอียดเพิ่มเติมของผลงานที่ 6 เช่น ที่มาของโปรเจกต์ เทคโนโลยีหรือเครื่องมือที่ใช้ ปัญหาที่พบ และผลลัพธ์ที่ได้รับจากการทำโครงงาน',
    imgs: [],
    isPlaceholder: true
  },
  {
    id: 7,
    icon: '🐾',
    title: 'ช่องผลงานที่ 7',
    summary: 'ใส่ชื่อผลงานและคำอธิบายตรงนี้',
    detail: 'พื้นที่สำหรับกรอกรายละเอียดเพิ่มเติมของผลงานที่ 7 เช่น ที่มาของโปรเจกต์ เทคโนโลยีหรือเครื่องมือที่ใช้ ปัญหาที่พบ และผลลัพธ์ที่ได้รับจากการทำโครงงาน',
    imgs: [],
    isPlaceholder: true
  },
  {
    id: 8,
    icon: '🐾',
    title: 'ช่องผลงานที่ 8',
    summary: 'ใส่ชื่อผลงานและคำอธิบายตรงนี้',
    detail: 'พื้นที่สำหรับกรอกรายละเอียดเพิ่มเติมของผลงานที่ 8 เช่น ที่มาของโปรเจกต์ เทคโนโลยีหรือเครื่องมือที่ใช้ ปัญหาที่พบ และผลลัพธ์ที่ได้รับจากการทำโครงงาน',
    imgs: [],
    isPlaceholder: true
  },
  {
    id: 9,
    icon: '🐾',
    title: 'ช่องผลงานที่ 9',
    summary: 'ใส่ชื่อผลงานและคำอธิบายตรงนี้',
    detail: 'พื้นที่สำหรับกรอกรายละเอียดเพิ่มเติมของผลงานที่ 9 เช่น ที่มาของโปรเจกต์ เทคโนโลยีหรือเครื่องมือที่ใช้ ปัญหาที่พบ และผลลัพธ์ที่ได้รับจากการทำโครงงาน',
    imgs: [],
    isPlaceholder: true
  }
];

// ==============================================================================
// 2. การเรนเดอร์การ์ดผลงานในหน้าหลัก (Render Portfolio Cards)
// ==============================================================================
function renderPortfolioCards() {
  const container = document.getElementById('portfolio-grid');
  if (!container) return;

  container.innerHTML = '';

  portfolioData.forEach((item) => {
    const card = document.createElement('a');
    card.href = `#work-${item.id}`;
    card.className = `portfolio-card ${item.isPlaceholder ? 'is-placeholder' : ''}`;
    card.setAttribute('aria-label', `ดูรายละเอียดผลงาน: ${item.title}`);

    card.innerHTML = `
      <div class="card-top">
        <div class="card-icon-badge" aria-hidden="true">${item.icon}</div>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-summary">${item.summary}</p>
      </div>
      <div class="card-action">
        <span>ดูผลงาน 🐾</span>
      </div>
    `;

    container.appendChild(card);
  });
}

// ==============================================================================
// 3. ระบบสลับหน้ารายละเอียดผลงาน (Single Page Hash Routing)
// รองรับปุ่มย้อนกลับของเบราว์เซอร์ และการกดดูรายละเอียด
// ==============================================================================
function handleRouting() {
  const hash = window.location.hash;
  const mainView = document.getElementById('main-view');
  const detailView = document.getElementById('detail-view');
  const siteHeader = document.querySelector('.site-header');

  if (!mainView || !detailView) return;

  // ตรวจสอบว่า hash เป็นรูปแบบ #work-1, #work-2 หรือไม่
  const workMatch = hash.match(/^#work-(\d+)$/);

  if (workMatch) {
    const workId = parseInt(workMatch[1], 10);
    const workItem = portfolioData.find((w) => w.id === workId);

    if (workItem) {
      // ซ่อนหน้าหลัก แล้วแสดงหน้ารายละเอียด
      mainView.style.display = 'none';
      detailView.style.display = 'block';

      // เลื่อนหน้าจอขึ้นบนสุดอย่างนุ่มนวล
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // ใส่ข้อมูลลงในหน้ารายละเอียด
      document.getElementById('detail-icon').textContent = workItem.icon;
      document.getElementById('detail-title').textContent = workItem.title;
      document.getElementById('detail-summary').textContent = workItem.summary;

      // รายละเอียดเพิ่มเติม (สีจางตามที่กำหนด)
      const detailBody = document.getElementById('detail-body');
      detailBody.innerHTML = `
        <p>${workItem.detail}</p>
        <p class="detail-note">✨ โปรเจกต์นี้แสดงถึงความตั้งใจและการเรียนรู้ในการนำทักษะด้านดิจิทัลมาประยุกต์ใช้งานจริง</p>
      `;

      // แกลเลอรี่รูปภาพ
      const galleryContainer = document.getElementById('detail-gallery');
      galleryContainer.innerHTML = '';

      if (workItem.imgs && workItem.imgs.length > 0) {
        // กรณีมีรูปภาพ
        workItem.imgs.forEach((imgSrc, idx) => {
          const wrap = document.createElement('div');
          wrap.className = 'gallery-image-wrap';
          wrap.innerHTML = `<img src="${imgSrc}" alt="${workItem.title} รูปที่ ${idx + 1}" class="gallery-img" loading="lazy">`;
          galleryContainer.appendChild(wrap);
        });
      } else {
        // กรณีไม่มีรูป ให้แสดงกล่องกรอบเส้นประ 3 ช่อง "ใส่รูปผลงานตรงนี้"
        for (let i = 1; i <= 3; i++) {
          const emptyBox = document.createElement('div');
          emptyBox.className = 'empty-gallery-box';
          emptyBox.innerHTML = `
            <div class="empty-box-icon" aria-hidden="true">📷</div>
            <span class="empty-box-text">ใส่รูปผลงานตรงนี้</span>
          `;
          galleryContainer.appendChild(emptyBox);
        }
      }

      return;
    }
  }

  // หากไม่ใช่หน้ารายละเอียดผลงาน ให้แสดงหน้าหลักตามปกติ
  const wasDetailOpen = detailView.style.display === 'block';
  mainView.style.display = 'block';
  detailView.style.display = 'none';

  // หากกลับมาจากหน้ารายละเอียด และมี hash ให้เลื่อนไปที่ส่วนนั้น
  if (wasDetailOpen) {
    if (hash === '#portfolio' || !hash) {
      const portfolioSec = document.getElementById('portfolio');
      if (portfolioSec) {
        // หน่วงเวลาเล็กน้อยเพื่อให้เบราว์เซอร์เรนเดอร์ display: block เสร็จสมบูรณ์
        setTimeout(() => {
          portfolioSec.scrollIntoView({ behavior: 'smooth' });
        }, 30);
      }
    }
  }
}

// ผูกเหตุการณ์ปุ่มกลับไปหน้าผลงาน
function setupBackButton() {
  const backBtn = document.getElementById('back-button');
  if (backBtn) {
    backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // อัปเดต hash เป็น #portfolio เพื่อให้ hashchange จัดการเลื่อนกลับ
      window.location.hash = '#portfolio';
    });
  }
}

// ==============================================================================
// 4. ลูกเล่นตุ๊กตาหมาการ์ตูนเด้งตอนคลิก (Pop-up Puppy Toy)
// - SVG วาดเอง หน้ากลม หูตก สีน้ำตาลทอง ปากสีครีม ลิ้นชมพู แก้มชมพูจางๆ ขนาด 104px
// - ดักฟัง pointerdown ทั่วทั้งเอกสาร
// - จำกัดไม่เกิน 8-9 ตัวพร้อมกัน
// - ลบออกจาก DOM อัตโนมัติเมื่ออนิเมชันจบ
// ==============================================================================
const PUPPY_SVG = `
<svg viewBox="0 0 104 104" width="104" height="104" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="overflow: visible;">
  <!-- เงาใต้ตัวตุ๊กตา -->
  <ellipse cx="52" cy="98" rx="34" ry="4.5" fill="rgba(74, 52, 38, 0.22)" />

  <!-- หูตกข้างซ้าย (Floppy Ear Left) -->
  <path d="M 27 34 C 13 34, 11 50, 13 69 C 14 78, 22 81, 28 76 C 34 70, 36 50, 34 38 Z" fill="#b07543" />
  <path d="M 24 43 C 18 47, 16 57, 18 69 C 19 73, 24 74, 27 70 C 29 65, 30 52, 28 44 Z" fill="#8d5628" opacity="0.3" />

  <!-- หูตกข้างขวา (Floppy Ear Right) -->
  <path d="M 77 34 C 91 34, 93 50, 91 69 C 90 78, 82 81, 76 76 C 70 70, 68 50, 70 38 Z" fill="#b07543" />
  <path d="M 80 43 C 86 47, 88 57, 86 69 C 85 73, 80 74, 77 70 C 75 65, 74 52, 76 44 Z" fill="#8d5628" opacity="0.3" />

  <!-- หัวกลม สีน้ำตาลทอง (Round Face) -->
  <circle cx="52" cy="52" r="37" fill="#c68b59" />

  <!-- ปอยขนด้านบน -->
  <path d="M 50 14 C 47 19, 49 23, 52 23 C 55 23, 57 19, 54 14 Z" fill="#b07543" />

  <!-- คิ้วดุ๊กดิ๊กน่ารัก -->
  <ellipse cx="38" cy="35" rx="3.5" ry="1.8" transform="rotate(-10 38 35)" fill="#845127" />
  <ellipse cx="66" cy="35" rx="3.5" ry="1.8" transform="rotate(10 66 35)" fill="#845127" />

  <!-- ดวงตากลมโตเป็นประกาย -->
  <circle cx="37" cy="45" r="5.5" fill="#301d10" />
  <circle cx="39" cy="43.5" r="2.1" fill="#ffffff" />
  <circle cx="35" cy="47" r="1.1" fill="#ffffff" />

  <circle cx="67" cy="45" r="5.5" fill="#301d10" />
  <circle cx="69" cy="43.5" r="2.1" fill="#ffffff" />
  <circle cx="65" cy="47" r="1.1" fill="#ffffff" />

  <!-- แก้มชมพูจางๆ (Blush Cheeks) -->
  <ellipse cx="26" cy="58" rx="6.5" ry="4" fill="#f89cb2" opacity="0.65" />
  <ellipse cx="78" cy="58" rx="6.5" ry="4" fill="#f89cb2" opacity="0.65" />

  <!-- ปากสีครีม (Cream Muzzle) -->
  <path d="M 52 48 C 39 48, 33 54, 33 65 C 33 76, 42 80, 52 80 C 62 80, 71 76, 71 65 C 71 54, 65 48, 52 48 Z" fill="#fff9f0" />

  <!-- จมูกสีน้ำตาลเข้ม -->
  <path d="M 46 54 C 46 52, 58 52, 58 54 C 58 58, 54 62, 52 62 C 50 62, 46 58, 46 54 Z" fill="#3d2415" />
  <ellipse cx="50" cy="54" rx="2" ry="1" fill="#ffffff" opacity="0.65" />

  <!-- เส้นรอยยิ้ม -->
  <path d="M 52 62 L 52 66" stroke="#3d2415" stroke-width="2" stroke-linecap="round" />
  <path d="M 47 66 C 49 69, 52 69, 52 66 C 52 69, 55 69, 57 66" stroke="#3d2415" stroke-width="2" stroke-linecap="round" fill="none" />

  <!-- ลิ้นสีชมพูแลบออกมาอย่างมีความสุข -->
  <path d="M 48 67 C 48 76, 56 76, 56 67 Z" fill="#f28b9f" />
  <line x1="52" y1="67" x2="52" y2="73" stroke="#d4677f" stroke-width="1.2" />
</svg>
`;

const MAX_PUPPIES = 8; // จำกัดจำนวนตุ๊กตาหมาไม่เกิน 8-9 ตัวพร้อมกัน

function spawnPuppy(x, y) {
  const container = document.getElementById('dog-pop-container');
  if (!container) return;

  // หากมีจำนวนเกินที่กำหนด ให้ลบตัวที่เก่าที่สุดออกก่อน
  while (container.children.length >= MAX_PUPPIES) {
    if (container.firstChild) {
      container.firstChild.remove();
    }
  }

  // สร้าง Element สำหรับตุ๊กตาหมา
  const puppyItem = document.createElement('div');
  puppyItem.className = 'pop-dog-item';
  puppyItem.style.left = `${x}px`;
  puppyItem.style.top = `${y}px`;
  puppyItem.innerHTML = PUPPY_SVG;

  // ลบ Element เมื่อแอนิเมชันจบลง
  puppyItem.addEventListener('animationend', () => {
    puppyItem.remove();
  });

  // สำรองกรณี animationend ไม่ถูกยิง (เช่น การสลับแท็บ)
  setTimeout(() => {
    if (puppyItem.parentNode) {
      puppyItem.remove();
    }
  }, 1700);

  container.appendChild(puppyItem);
}

// ดักจับการแตะ/คลิกทั่วทั้งเอกสาร (pointerdown)
function setupPuppyClickListener() {
  document.addEventListener('pointerdown', (e) => {
    // ป้องกันการคลิกจากปุ่ม scrollbar
    if (e.clientX > window.innerWidth || e.clientY > window.innerHeight) return;
    spawnPuppy(e.clientX, e.clientY);
  });
}

// ==============================================================================
// 5. การเริ่มต้นทำงานเมื่อโหลดหน้าเว็บ (Initialization)
// ==============================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderPortfolioCards();
  setupBackButton();
  setupPuppyClickListener();
  handleRouting();

  // ดักจับการเปลี่ยน URL Hash
  window.addEventListener('hashchange', handleRouting);
});
