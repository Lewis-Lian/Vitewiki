---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://i615.cn/img1.png',
    name: 'Lewis_Lian   ',
    title: 'admin',
    links: [
      { icon: 'github', link: 'https://github.com/Lewis-Lian' }
    ]
  }

]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      关于我
    </template>
    <template #lead>
      下定决心，不怕牺牲，排除万难，去争取胜利!
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>