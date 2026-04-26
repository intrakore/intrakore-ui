<script setup lang="ts">
import { reactive } from 'vue'
import { Sidebar } from 'frappe-ui'

import Notifications from 'lucide-vue-next'
import Deals from 'lucide-vue-next'
import Organizations from 'lucide-vue-next'
import Tasks from 'lucide-vue-next'
import Notes from 'lucide-vue-next'
import Link from 'lucide-vue-next'
import EmailTemplates from 'lucide-vue-next'
import Moon from 'lucide-vue-next'
import CallLogs from 'lucide-vue-next'
import Settings from 'lucide-vue-next'
import User from 'lucide-vue-next'
import Contacts from 'lucide-vue-next'
import Leads from 'lucide-vue-next'

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme')
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', newTheme)
}

const crmSidebar = reactive({
  header: {
    title: 'Frappe CRM',
    subtitle: 'Jane Doe',
    logo: 'https://raw.githubusercontent.com/frappe/crm/develop/.github/logo.svg',
    menuItems: [
      { label: 'Toggle Theme', icon: Moon, onClick: toggleTheme },
      {
        label: 'Help',
        to: '/help',
        icon: Settings,
        onClick: () => alert('Help clicked!'),
      },
      {
        label: 'Logout',
        to: '/logout',
        icon: User,
        onClick: () => alert('Logging out...'),
      },
    ],
  },
  sections: [
    {
      label: '',
      items: [{ label: 'Notifications', icon: Notifications, to: '' }],
    },
    {
      label: '',
      items: [
        { label: 'Leads', icon: Leads, to: '/leads' },
        { label: 'Deals', icon: Deals, to: '/deals' },
        { label: 'Contacts', icon: Contacts, to: '/contacts' },
        { label: 'Organizations', icon: Organizations, to: '/organizations' },
        { label: 'Notes', icon: Notes, to: '/notes' },
        { label: 'Tasks', icon: Tasks, to: '/tasks' },
        { label: 'Call Logs', icon: CallLogs, to: '/call-logs' },
        {
          label: 'Email Templates',
          icon: EmailTemplates,
          to: '/email-templates',
        },
      ],
    },
    {
      label: 'Views',
      collapsible: true,
      items: [
        { label: 'My Open Deals', icon: Link, to: '/my-open-deals' },
        { label: 'Partnership Deals', icon: Link, to: '/partnership-deals' },
        { label: 'Unassigned Deals', icon: Link, to: '/unassigned-deals' },
        {
          label: 'Enterprise Pipeline',
          icon: Link,
          to: '/enterprise-pipeline',
        },
      ],
    },
  ],
})
</script>

<template>
  <Sidebar :header="crmSidebar.header" :sections="crmSidebar.sections" />
</template>
