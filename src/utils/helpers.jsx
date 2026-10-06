export const getUserName = (name) => {
    return "@" + name.toLowerCase().replaceAll(" ","_")
}

export const trends = [
  { title: '#React', posts: '12.5K', category: 'Yazılım / Trend' },
  { title: '#Frontend', posts: '108.2K', category: 'Türkiye / Trend' },
  { title: 'Süper Lig', posts: '45.1K', category: 'Spor / Canlı' },
  { title: 'Firebase', posts: '5.4K', category: 'Teknoloji / Trend' },
  { title: 'UI Design', posts: '3.1K', category: 'Tasarım / Popüler' },
]
export const suggestions = [
  { name: 'Mert Yılmaz', handle: '@mertyilmaz' },
  { name: 'Aylin Demir', handle: '@aylind' },
  { name: 'Can Efe', handle: '@cane' },
]