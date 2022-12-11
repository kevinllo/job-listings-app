
export default function Cards(data) {
  document.querySelector('#section').innerHTML = data.map(elem => `
 <div class = "cards" ${!elem.new ? `style="border-left:none"` : ""}>
    <div class="profile-description">
    <div class="img-container">
     <img src="${elem.logo}" alt="${elem.company}" />
   </div>
    <div class="img-container-mb">
      <img src="${elem.logo}" alt="${elem.company}" />
    </div>
   <div class="details">
     <div class="details-1">
       <span>${elem.company}</span>
       ${elem.new ? `<span id="new">NEW!</span>` : ""}
       ${elem.featured ? `<span id="featured">FEATURED</span>` : ""}
     </div>
     <div class="details-2">
        <p id="role">${elem.position}</p>
     </div>
     <div class="details-3">
       <span>${elem.postedAt}</span>
       <span>${elem.contract}</span>
       <span>${elem.location}</span>
     </div>
 </div>
</div>
<div class="profile-skills">

<span>${elem.role}</span>
<span>${elem.level}</span>
  ${elem.languages.length > 0 ? elem.languages.map(e => `<span>${e}</span>`).join(' ') : ""}
  ${elem.tools.length > 0 ? elem.tools.map(e => `<span>${e}</span>`).join(' ') : ""}
</div>


</div>
 `).join('');
}

