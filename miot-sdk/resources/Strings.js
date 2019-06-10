import locale from "miot/host/locale";
const placeholderRegex = /(\{[\d|\w]+\})/;
const getStrings = strings => {
  const language = locale.language;
  return strings[language] || strings['zh'];
}
const formatString = (str, ...valuesForPlaceholders) => {
  return (str || '')
    .split(placeholderRegex)
    .filter(textPart => !!textPart)
    .map(textPart => {
      if (textPart.match(placeholderRegex)) {
        const matchedKey = textPart.slice(1, -1);
        let valueForPlaceholder = valuesForPlaceholders[matchedKey];
        // If no value found, check if working with an object instead
        if (valueForPlaceholder == undefined) {
          const valueFromObjectPlaceholder = valuesForPlaceholders[0][matchedKey];
          if (valueFromObjectPlaceholder !== undefined) {
            valueForPlaceholder = valueFromObjectPlaceholder;
          } else {
            // If value still isn't found, then it must have been undefined/null
            return valueForPlaceholder;
          }
        }
        return valueForPlaceholder;
      }
      return textPart;
    }).join('');
}
// 为了 autoComplete
let strings = {
  setting: '',
  featureSetting: '',
  commonSetting: '',
  name: '',
  location: '',
  memberSet: '',
  share: '',
  btGateway: '',
  voiceAuth: '',
  ifttt: '',
  firmwareUpgrade: '',
  more: '',
  help: '',
  legalInfo: '',
  deleteDevice: '',
  autoUpgrade: '',
  checkUpgrade: '',
  security: '',
  feedback: '',
  timezone: '',
  addToDesktop: '',
  // MHDatePicker
  cancel: '',
  ok: '',
  am: '',
  pm: '',
  months: '',
  days: '',
  hours: '',
  minutes: '',
  seconds: '',
  month: '',
  day: '',
  hour: '',
  minute: '',
  second: '',
  yearUnit: '',
  monthUnit: '',
  dayUnit: '',
  hourUnit: '',
  minuteUnit: '',
  secondUnit: '',
  dateSubTitle: '',
  time24SubTitle: '',
  time12SubTitle: '',
  singleSubTitle: '',
}
strings = getStrings({
  zh: {
    setting: '设置',
    featureSetting: '功能设置',
    commonSetting: '通用设置',
    name: '设备名称',
    location: '位置管理',
    memberSet: '按键设置',
    share: '设备共享',
    btGateway: '蓝牙网关',
    voiceAuth: '语音授权',
    ifttt: '智能场景',
    firmwareUpgrade: '固件升级',
    more: '更多设置',
    help: '使用帮助',
    legalInfo: '法律信息',
    deleteDevice: '删除设备',
    autoUpgrade: '固件自动升级',
    checkUpgrade: '检查固件升级',
    security: '安全设置',
    feedback: '反馈问题',
    timezone: '设备时区',
    addToDesktop: '添加桌面快捷方式',
    // MHDatePicker
    cancel: '取消',
    ok: '确定',
    am: '上午',
    pm: '下午',
    months: '个月',
    days: '天',
    hours: '小时',
    minutes: '分钟',
    seconds: '秒钟',
    month: '个月',
    day: '天',
    hour: '小时',
    minute: '分钟',
    second: '秒钟',
    yearUnit: '年',
    monthUnit: '月',
    dayUnit: '日',
    hourUnit: '时',
    minuteUnit: '分',
    secondUnit: '秒',
    dateSubTitle: '{0}年{1}月{2}日', // 2019年06月03日
    time24SubTitle: '{0}:{1}', // 11:43
    time12SubTitle: '{0} {1}:{2}', // 上午 11:43
    singleSubTitle: '{0} {1}', // 5 小时
  },
  zh_tw: {
    setting: '設定',
    featureSetting: '功能設定',
    commonSetting: '一般設定',
    name: '裝置名稱',
    location: '位置管理',
    memberSet: '按鍵設定',
    share: '裝置共用',
    btGateway: '藍牙網關',
    voiceAuth: '語音授權',
    ifttt: '智能場景',
    firmwareUpgrade: '韌體更新',
    more: '更多設定',
    help: '使用説明',
    legalInfo: '法律資訊',
    deleteDevice: '刪除裝置',
    autoUpgrade: '韌體自动更新',
    checkUpgrade: '檢查韌體更新',
    security: '安全設定',
    feedback: '反饋問題',
    timezone: '裝置時區',
    addToDesktop: '新増捷徑至桌面',
  },
  zh_hk: {
    setting: '設定',
    featureSetting: '功能設定',
    commonSetting: '一般設定',
    name: '裝置名稱',
    location: '位置管理',
    memberSet: '按鍵設定',
    share: '裝置共用',
    btGateway: '藍牙網關',
    voiceAuth: '語音授權',
    ifttt: '智慧場景',
    firmwareUpgrade: '韌體更新',
    more: '更多設定',
    help: '使用説明',
    legalInfo: '法律資訊',
    deleteDevice: '刪除裝置',
    autoUpgrade: '韌體自动更新',
    checkUpgrade: '檢查韌體更新',
    security: '安全設定',
    feedback: '反饋問題',
    timezone: '裝置時區',
    addToDesktop: '新增捷徑到桌面',
  },
  en: {
    setting: 'Settings',
    featureSetting: 'Shortcut settings',
    commonSetting: 'General settings',
    name: 'Device name',
    location: 'Manage locations',
    memberSet: 'Key settings',
    share: 'Shared devices',
    btGateway: 'BLE Gateway',
    voiceAuth: 'Voice authorization',
    ifttt: 'Automation',
    firmwareUpgrade: 'Firmware updates',
    more: 'Additional settings',
    help: 'Help',
    legalInfo: 'Legal information',
    deleteDevice: 'Remove device',
    autoUpgrade: 'Automatically update firmware',
    checkUpgrade: 'Check for firmware updates',
    security: 'Security settings',
    feedback: 'Feedback',
    timezone: 'Device time zone',
    addToDesktop: 'Add to Home screen',
    // MHDatePicker
    cancel: 'Cancel',
    ok: 'Confirm',
    am: 'AM',
    pm: 'PM',
    months: 'months',
    days: 'days',
    hours: 'hours',
    minutes: 'minutes',
    seconds: 'seconds',
    month: 'month',
    day: 'day',
    hour: 'hour',
    minute: 'minute',
    second: 'second',
    yearUnit: '',
    monthUnit: '',
    dayUnit: '',
    hourUnit: '',
    minuteUnit: '',
    secondUnit: '',
    dateSubTitle: '{0}-{1}-{2}', // 2019-06-03
    time24SubTitle: '{0}:{1}', // 11:43
    time12SubTitle: '{1}:{2} {0}', // 11:43 am
    singleSubTitle: '{0} {1}', // 1 hour | 2 hours
  },
  ko: {
    setting: '설정',
    featureSetting: '바로가기 설정',
    commonSetting: '일반 설정',
    name: '기기 이름',
    location: '위치 관리',
    memberSet: '버튼 설정',
    share: '공유된 기기',
    btGateway: 'BLE 게이트웨이',
    voiceAuth: '음성 권한',
    ifttt: '자동화',
    firmwareUpgrade: '펌웨어 업데이트',
    more: '추가 설정',
    help: '도움말',
    legalInfo: '법률 정보',
    deleteDevice: '기기 제거',
    autoUpgrade: '펌웨어 자동 업데이트',
    checkUpgrade: '펌웨어 업데이트 확인',
    security: '보안 설정',
    feedback: '피드백',
    timezone: '디바이스 시간대',
    addToDesktop: '홈 화면에 추가',
  },
  ru: {
    setting: 'Настройки',
    featureSetting: 'Настройки ярлыков',
    commonSetting: 'Общие настройки',
    name: 'Имя устройства',
    location: 'Управлять местами',
    memberSet: 'Настройка кнопок',
    share: 'Общие устройства',
    btGateway: 'BLE шлюз',
    voiceAuth: 'Голосовая авторизация',
    ifttt: 'Автоматизация',
    firmwareUpgrade: 'Проверить наличие обновлений',
    more: 'Дополнительные настройки',
    help: 'Справка',
    legalInfo: 'Легальная информация',
    deleteDevice: 'Удалить устройство',
    autoUpgrade: 'Автоматическое обновление встроенного ПО',
    checkUpgrade: 'Проверить наличие обновлений',
    security: 'Параметры безопасности',
    feedback: 'Отзыв',
    timezone: 'Часовой пояс устройства',
    addToDesktop: 'Добавить на главный экран',
  },
  es: {
    setting: 'Configuración',
    featureSetting: 'Ajustes de acceso directo',
    commonSetting: 'Ajustes generales',
    name: 'Nombre del dispositivo',
    location: 'Gestionar ubicaciones',
    memberSet: 'Ajustes de los botones',
    share: 'Dispositivos compartidos',
    btGateway: 'Entrada BLE',
    voiceAuth: 'Autorización de voz',
    ifttt: 'Automatización',
    firmwareUpgrade: 'Actualizaciones de firmware',
    more: 'Ajustes adicionales',
    help: 'Ayuda',
    legalInfo: 'Información legal',
    deleteDevice: 'Eliminar dispositivo',
    autoUpgrade: 'Actualizar automáticamente el firmware',
    checkUpgrade: 'Buscar actualizaciones de firmware',
    security: 'Ajustes de seguridad',
    feedback: 'Comentario',
    timezone: 'Zona horaria del dispositivo',
    addToDesktop: 'Añadir a la pantalla de Inicio',
  },
  fr: {
    setting: 'Paramètres',
    featureSetting: 'Réglages des raccourcis',
    commonSetting: 'Réglages généraux',
    name: "Nom de l'appareil",
    location: 'Gérer les emplacements',
    memberSet: 'Paramètres des boutons',
    share: 'Appareils partagés',
    btGateway: 'Passerelle BLE',
    voiceAuth: 'Autorisation vocale',
    ifttt: 'Automatisation',
    firmwareUpgrade: 'Les mises à jour du micrologiciel',
    more: 'Paramètres supplémentaires',
    help: 'Aide',
    legalInfo: 'Information légale',
    deleteDevice: "Supprimer l'appareil",
    autoUpgrade: 'Mise à jour automatique du firmware',
    checkUpgrade: 'Vérifier les mises à jour du micrologiciel',
    security: 'Paramètres de sécurité',
    feedback: 'Retour',
    timezone: 'Fuseau horaire de l’appareil',
    addToDesktop: "Ajouter à l'écran d'accueil'"
  },
  it: {
    setting: 'Impostazioni',
    featureSetting: 'Impostazioni collegamenti',
    commonSetting: 'Impostazioni generali',
    name: 'Nome dispositivo',
    location: 'Gestisci posizioni',
    memberSet: 'Impostazioni pulsante',
    share: 'Dispositivi condivisi',
    btGateway: 'Gateway BLE',
    voiceAuth: 'Autorizzazione vocale',
    ifttt: 'Automazione',
    firmwareUpgrade: 'Aggiornamenti firmware',
    more: 'Impostazioni aggiuntive',
    help: 'Guida',
    legalInfo: 'Informazione legale',
    deleteDevice: 'Rimuovi dispositivo',
    autoUpgrade: 'Aggiorna automaticamente il firmware',
    checkUpgrade: 'Controlla aggiornamenti firmware',
    security: 'Impostazioni di sicurezza',
    feedback: 'Feedback',
    timezone: 'Fuso orario del dispositivo',
    addToDesktop: 'Aggiungi a schermata iniziale',
  },
  de: {
    setting: 'Einstellungen',
    featureSetting: 'Verknüpfungseinstellungen',
    commonSetting: 'Allgemeine Einstellungen',
    name: 'Gerätename',
    location: 'Standorte verwalten',
    memberSet: 'Schaltflächen-Einstellungen',
    share: 'Geteilte Geräte',
    btGateway: 'BLE-Gateway',
    voiceAuth: 'Identitätsnachweis über die Stimme',
    ifttt: 'Automatisierung',
    firmwareUpgrade: 'Firmware-Aktualisierungen',
    more: 'Zusätzliche Einstellungen',
    help: 'Hilfe',
    legalInfo: 'Rechtsinformation',
    deleteDevice: 'Geräte entfernen',
    autoUpgrade: 'Firmware automatisch aktualisieren',
    checkUpgrade: 'Nach Firmware-Aktualisierungen suchen',
    security: 'Sicherheitseinstellungen',
    feedback: 'Feedback',
    timezone: 'Gerätezeitzone',
    addToDesktop: 'Zur Startseite hinzufügen',
  },
  id: {
    setting: 'Pengaturan',
    featureSetting: 'Pengaturan pintasan',
    commonSetting: 'Pengaturan umum',
    name: 'Nama perangkat',
    location: 'Kelola lokasi',
    memberSet: 'Pengaturan tombol',
    share: 'Perangkat yang dibagikan',
    btGateway: 'Gerbang BLE',
    voiceAuth: 'Otorisasi suara',
    ifttt: 'Otomatisasi',
    firmwareUpgrade: 'Pembaruan firmware',
    more: 'Pengaturan tambahan',
    help: 'Bantuan',
    legalInfo: 'Informasi hukum',
    deleteDevice: 'Hapus perangkat',
    autoUpgrade: 'Perbarui firmware secara otomatis',
    checkUpgrade: 'Periksa pembaruan firmware',
    security: 'Pengaturan keamanan',
    feedback: 'Umpan balik',
    timezone: 'Zona waktu perangkat',
    addToDesktop: 'Tambahkan ke layar Beranda',
  },
  pl: {
    setting: 'Ustawienia',
    featureSetting: 'Ustawienia skrótów',
    commonSetting: 'Ustawienia ogólne',
    name: 'Nazwa urządzenia',
    location: 'Zarządzaj lokalizacjami',
    memberSet: 'Ustawienia przycisku',
    share: 'Udostępnione urządzenia',
    btGateway: 'Bramka BLE',
    voiceAuth: 'Autoryzacja głosu',
    ifttt: 'Automatyzacja',
    firmwareUpgrade: 'Aktualizacje oprogramowania sprzętowe',
    more: 'Dodatkowe ustawienia',
    help: 'Pomoc',
    legalInfo: 'Informacje prawne',
    deleteDevice: 'Usuń urządzenie',
    autoUpgrade: 'Automatyczna aktualizacja oprogramowania układowego',
    checkUpgrade: 'Sprawdź aktualizacje oprogramowania sprzętowe',
    security: 'Ustawienia bezpieczeństwa',
    feedback: 'Informacje zwrotne',
    timezone: 'Strefa czasowa urządzenia',
    addToDesktop: 'Dodaj do ekranu głównego',
  },
  vi: {
    setting: 'Cài đặt',
    featureSetting: 'Cài đặt phím tắt',
    commonSetting: 'Cài đặt chung',
    name: 'Tên thiết bị',
    location: 'Quản lý các vị trí',
    memberSet: 'Cài đặt nút',
    share: 'Thiết bị dùng chung',
    btGateway: 'Cổng BLE',
    voiceAuth: 'Cấp quyền bằng giọng nói',
    ifttt: 'Tự động',
    firmwareUpgrade: 'Kiểm tra bản cập nhật chương trình cơ sở',
    more: 'Cài đặt khác',
    help: 'Trợ giúp',
    legalInfo: 'Thông tin hợp pháp',
    deleteDevice: 'Xóa thiết bị',
    autoUpgrade: 'Tự động cập nhật chương trình cơ sở',
    checkUpgrade: 'Kiểm tra bản cập nhật chương trình cơ sở',
    security: 'Cài đặt bảo mật',
    feedback: 'Phản hồi',
    timezone: 'Múi giờ thiết bị',
    addToDesktop: 'Thêm vào Màn hình chính',
  },
  ja: {
    setting: '設定',
    featureSetting: 'ショートカット設定',
    commonSetting: '全般設定',
    name: 'デバイス名',
    location: '位置を管理する',
    memberSet: 'ボタンの設定',
    share: '共有デバイス',
    btGateway: 'BLE ゲートウェイ',
    voiceAuth: '音声承認',
    ifttt: '自動化',
    firmwareUpgrade: 'ファームウェア更新する',
    more: '詳細設定',
    help: 'ヘルプ',
    legalInfo: '法律情報',
    deleteDevice: 'デバイスを削除する',
    autoUpgrade: 'ファームウェアの自動アップグレード',
    checkUpgrade: 'ファームウェア更新プログラムの有無を確認する',
    security: 'セキュリティ設定',
    feedback: 'フィードバック',
    timezone: 'デバイスタイムゾーン',
    addToDesktop: 'ホーム画面に追加する',
  },
  th: {
    setting: 'การตั้งค่า',
    featureSetting: 'การตั้งค่าทางลัด',
    commonSetting: 'การตั้งค่าทั่วไป',
    name: 'ชื่ออุปกรณ์',
    location: 'จัดการตำแหน่งที่ตั้ง',
    memberSet: 'การตั้งค่าปุ่ม',
    share: 'อุปกรณ์ที่แชร์',
    btGateway: 'เกตเวย์ BLE',
    voiceAuth: 'การอนุญาตด้วยเสียง',
    ifttt: 'ระบบอัตโนมัติ',
    firmwareUpgrade: 'ตรวจสอบหาการอัปเดตเฟิร์มแวร์',
    more: 'การตั้งค่าเพิ่มเติม',
    help: 'ความช่วยเหลือ',
    legalInfo: 'ข้อมูลทางกฎหมาย',
    deleteDevice: 'ลบอุปกรณ์ออก',
    autoUpgrade: 'อัปเดตเฟิร์มแวร์โดยอัตโนมัติ',
    checkUpgrade: 'ตรวจสอบหาการอัปเดตเฟิร์มแวร์',
    security: 'การตั้งค่าความปลอดภัย',
    feedback: 'คำติชม',
    timezone: 'โซนเวลาของอุปกรณ์',
    addToDesktop: 'เพิ่มไปยังหน้าโฮม',
  }
});
export default strings;
export { formatString };