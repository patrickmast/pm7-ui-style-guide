// Enhancement: Synced with README. Updated to demonstrate all new props and best practices, including showUncheckedIcon and custom label color props. Added clear comments for each demo section.
import React from 'react';
import { PM7Menu, PM7MenuIcon } from '../src/components/menu';
import { PM7Card } from '../src/components/card';
import { HomeIcon, SettingsIcon, UserIcon, MoonIcon, SunIcon, LanguagesIcon } from 'lucide-react';

interface Descriptions {
  [key: string]: {
    basicMenu: string;
    title: string;
    features: string;
    multiLanguage: string;
    themeSwitching: string;
    submenu: string;
    icons: string;
    separators: string;
    checkboxes: string;
    menuAlignment: string;
    startAlignment: string;
    centerAlignment: string;
    endAlignment: string;
    customIconColor: string;
    iconColorDesc: string;
    prop: string;
    exampleUses: string;
    primaryBlue: string;
    yellow: string;
    color: string;
  };
}

type ThemeType = 'light' | 'dark';
type LanguageType = 'en' | 'es' | 'fr' | 'de' | 'nl' | 'nl-be' | 'zh';

interface ExtendedMenuItemType {
  id: string;
  label: string;
  [key: string]: any;
  icon?: React.ReactNode;
  checked?: boolean;
  type?: string;
  submenuItems?: ExtendedMenuItemType[];
  onClick?: () => void;
  onChange?: () => void;
}

const ExampleMenuDemo = ({ theme }: { theme: ThemeType }) => {
  const [selectedLanguage, setSelectedLanguage] = React.useState<LanguageType>(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('pm7-language-demo');
      if (savedLanguage && ['en', 'es', 'fr', 'de', 'nl', 'nl-be', 'zh'].includes(savedLanguage)) {
        return savedLanguage as LanguageType;
      }
    }
    return 'en';
  });

  // Add state for trigger border and background demo
  const [showTriggerBorder, setShowTriggerBorder] = React.useState(true);
  const [showTriggerBackground, setShowTriggerBackground] = React.useState(true);
  const [showTriggerOnHover, setShowTriggerOnHover] = React.useState(false);

  const handleLanguageChange = (lang: LanguageType) => {
    setSelectedLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('pm7-language-demo', lang);
    }
  };

  const getLabel = (item: ExtendedMenuItemType): string => {
    const langKey = `label-${selectedLanguage}`;
    return item[langKey] || item.label || '';
  };

  // Add a function to get the flag emoji for the selected language
  const getFlagIcon = (lang: LanguageType) => {
    switch (lang) {
      case 'en': return '🇬🇧'; // UK flag for English
      case 'es': return '🇪🇸'; // Spain
      case 'fr': return '🇫🇷'; // France
      case 'de': return '🇩🇪'; // Germany
      case 'nl': return '🇳🇱'; // Netherlands
      case 'nl-be': return '🇧🇪'; // Belgium
      case 'zh': return '🇨🇳'; // China
      default: return '🏳️';
    }
  };

  // Memoized icons
  const homeIcon = React.useMemo(() => <HomeIcon size={16} className="menu-item-svg-icon" />, []);
  const profileIcon = React.useMemo(() => <UserIcon size={16} className="menu-item-svg-icon" />, []);
  const settingsIcon = React.useMemo(() => <SettingsIcon size={16} className="menu-item-svg-icon" />, []);
  const flagIcon = React.useMemo(() => <span style={{ fontSize: 16, marginRight: 4 }}>{getFlagIcon(selectedLanguage)}</span>, [selectedLanguage]);
  const themeIcon = React.useMemo(() => theme === 'dark' ? <MoonIcon size={16} /> : <SunIcon size={16} />, [theme]);

  // Memoize menuItems array
  const menuItems = React.useMemo(() => [
    {
      id: 'home',
      label: 'Home',
      'label-en': 'Home',
      'label-es': 'Inicio',
      'label-fr': 'Accueil',
      'label-de': 'Startseite',
      'label-nl': 'Home',
      'label-nl-be': 'Home',
      'label-zh': '首页',
      onClick: () => console.log('Home selected'),
      icon: homeIcon
    },
    {
      id: 'profile',
      label: 'Profile',
      'label-en': 'Profile',
      'label-es': 'Perfil',
      'label-fr': 'Profil',
      'label-de': 'Profil',
      'label-nl': 'Profiel',
      'label-nl-be': 'Profiel',
      'label-zh': '个人资料',
      onClick: () => console.log('Profile selected'),
      icon: profileIcon
    },
    {
      id: 'settings',
      label: 'Settings',
      'label-en': 'Settings',
      'label-es': 'Ajustes',
      'label-fr': 'Paramètres',
      'label-de': 'Einstellungen',
      'label-nl': 'Instellingen',
      'label-nl-be': 'Instellingen',
      'label-zh': '设置',
      onClick: () => console.log('Settings selected'),
      icon: settingsIcon
    },
    {
      id: 'separator1',
      label: '',
      type: 'separator'
    },
    {
      id: 'language',
      label: 'Language',
      'label-en': 'Language',
      'label-es': 'Idioma',
      'label-fr': 'Langue',
      'label-de': 'Sprache',
      'label-nl': 'Taal',
      'label-nl-be': 'Taal',
      'label-zh': '语言',
      type: 'submenu',
      icon: flagIcon,
      submenuItems: [
        { id: 'en', label: 'English', type: 'check', checked: selectedLanguage === 'en', onClick: () => handleLanguageChange('en') },
        { id: 'es', label: 'Español', type: 'check', checked: selectedLanguage === 'es', onClick: () => handleLanguageChange('es') },
        { id: 'fr', label: 'Français', type: 'check', checked: selectedLanguage === 'fr', onClick: () => handleLanguageChange('fr') },
        { id: 'de', label: 'Deutsch', type: 'check', checked: selectedLanguage === 'de', onClick: () => handleLanguageChange('de') },
        { id: 'separator-lang', type: 'separator' },
        { id: 'nl', label: 'Nederlands', type: 'check', checked: selectedLanguage === 'nl', onClick: () => handleLanguageChange('nl') },
        { id: 'nl-be', label: 'Nederlands (België)', type: 'check', checked: selectedLanguage === 'nl-be', onClick: () => handleLanguageChange('nl-be') },
        { id: 'separator-lang2', type: 'separator' },
        { id: 'zh', label: '中文', type: 'check', checked: selectedLanguage === 'zh', onClick: () => handleLanguageChange('zh') }
      ]
    },
    {
      id: 'theme',
      label: `Theme: ${theme === 'dark' ? 'Dark' : 'Light'}`,
      'label-en': `Theme: ${theme === 'dark' ? 'Dark' : 'Light'}`,
      'label-es': `Tema: ${theme === 'dark' ? 'Oscuro' : 'Claro'}`,
      'label-fr': `Thème: ${theme === 'dark' ? 'Sombre' : 'Clair'}`,
      'label-de': `Thema: ${theme === 'dark' ? 'Dunkel' : 'Hell'}`,
      'label-nl': `Thema: ${theme === 'dark' ? 'Donker' : 'Licht'}`,
      'label-nl-be': `Thema: ${theme === 'dark' ? 'Donker' : 'Licht'}`,
      'label-zh': `主题: ${theme === 'dark' ? '深色' : '浅色'}`,
      type: 'switch',
      icon: themeIcon,
      checked: theme === 'dark',
      onChange: () => {
        // Theme is now controlled by the App component
        // This is just for display in the menu example
        console.log('Theme toggle clicked in menu example')
      }
    }
  ], [homeIcon, profileIcon, settingsIcon, flagIcon, themeIcon, selectedLanguage, theme]);

  const descriptions: Descriptions = {
    en: {
      basicMenu: 'Basic Menu',
      title: 'A standard menu with hamburger icon and custom menu items.',
      features: 'Features:',
      multiLanguage: 'Multi-language support',
      themeSwitching: 'Theme switching',
      submenu: 'Submenu support',
      icons: 'Icons',
      separators: 'Separators',
      checkboxes: 'Checkboxes and switches',
      menuAlignment: 'Menu Alignment',
      startAlignment: 'Start Alignment',
      centerAlignment: 'Center Alignment',
      endAlignment: 'End Alignment',
      customIconColor: 'Custom Icon Color',
      iconColorDesc: 'The menu icon color can be customized using the',
      prop: 'prop.',
      exampleUses: 'This example uses',
      primaryBlue: 'the PM7 primary blue',
      yellow: 'yellow',
      color: 'color:',
    },
    es: {
      basicMenu: 'Menú Básico',
      title: 'Un menú estándar con icono de hamburguesa y elementos de menú personalizados.',
      features: 'Características:',
      multiLanguage: 'Soporte multilingüe',
      themeSwitching: 'Cambio de tema',
      submenu: 'Soporte de submenú',
      icons: 'Iconos',
      separators: 'Separadores',
      checkboxes: 'Casillas de verificación e interruptores',
      menuAlignment: 'Alineación del Menú',
      startAlignment: 'Alineación Inicial',
      centerAlignment: 'Alineación Central',
      endAlignment: 'Alineación Final',
      customIconColor: 'Color de Icono Personalizado',
      iconColorDesc: 'El color del icono del menú se puede personalizar usando la',
      prop: 'propiedad.',
      exampleUses: 'Este ejemplo usa',
      primaryBlue: 'el azul primario de PM7',
      yellow: 'amarillo',
      color: 'color:',
    },
    fr: {
      basicMenu: 'Menu de Base',
      title: 'Un menu standard avec icône hamburger et éléments de menu personnalisés.',
      features: 'Fonctionnalités:',
      multiLanguage: 'Support multilingue',
      themeSwitching: 'Changement de thème',
      submenu: 'Support de sous-menu',
      icons: 'Icônes',
      separators: 'Séparateurs',
      checkboxes: 'Cases à cocher et interrupteurs',
      menuAlignment: 'Alignement du Menu',
      startAlignment: 'Alignement au Début',
      centerAlignment: 'Alignement au Centre',
      endAlignment: 'Alignement à la Fin',
      customIconColor: 'Couleur d\'Icône Personnalisée',
      iconColorDesc: 'La couleur de l\'icône du menu peut être personnalisée à l\'aide de la',
      prop: 'propriété.',
      exampleUses: 'Cet exemple utilise',
      primaryBlue: 'le bleu primaire PM7',
      yellow: 'jaune',
      color: 'couleur:',
    },
    de: {
      basicMenu: 'Basis-Menü',
      title: 'Ein Standard-Menü mit Hamburger-Symbol und benutzerdefinierten Menüelementen.',
      features: 'Funktionen:',
      multiLanguage: 'Mehrsprachige Unterstützung',
      themeSwitching: 'Themenwechsel',
      submenu: 'Untermenü-Unterstützung',
      icons: 'Symbole',
      separators: 'Trennlinien',
      checkboxes: 'Kontrollkästchen und Schalter',
      menuAlignment: 'Menü-Ausrichtung',
      startAlignment: 'Ausrichtung am Anfang',
      centerAlignment: 'Zentrale Ausrichtung',
      endAlignment: 'Ausrichtung am Ende',
      customIconColor: 'Benutzerdefinierte Symbolfarbe',
      iconColorDesc: 'Die Farbe des Menüsymbols kann mit der',
      prop: 'Eigenschaft angepasst werden.',
      exampleUses: 'Dieses Beispiel verwendet',
      primaryBlue: 'das PM7-Primärblau',
      yellow: 'gelb',
      color: 'Farbe:',
    },
    nl: {
      basicMenu: 'Basis Menu',
      title: 'Een standaard menu met hamburger-pictogram en aangepaste menu-items.',
      features: 'Functies:',
      multiLanguage: 'Meertalige ondersteuning',
      themeSwitching: 'Thema wisselen',
      submenu: 'Submenu-ondersteuning',
      icons: 'Pictogrammen',
      separators: 'Scheidingslijnen',
      checkboxes: 'Selectievakjes en schakelaars',
      menuAlignment: 'Menu Uitlijning',
      startAlignment: 'Begin Uitlijning',
      centerAlignment: 'Midden Uitlijning',
      endAlignment: 'Einde Uitlijning',
      customIconColor: 'Aangepaste Pictogramkleur',
      iconColorDesc: 'De kleur van het menupictogram kan worden aangepast met de',
      prop: 'eigenschap.',
      exampleUses: 'Dit voorbeeld gebruikt',
      primaryBlue: 'de PM7 primaire blauwe',
      yellow: 'gele',
      color: 'kleur:',
    },
    'nl-be': {
      basicMenu: 'Basis Menu',
      title: 'Een standaard menu met hamburger-pictogram en aangepaste menu-items.',
      features: 'Functies:',
      multiLanguage: 'Meertalige ondersteuning',
      themeSwitching: 'Thema wisselen',
      submenu: 'Submenu-ondersteuning',
      icons: 'Pictogrammen',
      separators: 'Scheidingslijnen',
      checkboxes: 'Selectievakjes en schakelaars',
      menuAlignment: 'Menu Uitlijning',
      startAlignment: 'Begin Uitlijning',
      centerAlignment: 'Midden Uitlijning',
      endAlignment: 'Einde Uitlijning',
      customIconColor: 'Aangepaste Pictogramkleur',
      iconColorDesc: 'De kleur van het menupictogram kan worden aangepast met de',
      prop: 'eigenschap.',
      exampleUses: 'Dit voorbeeld gebruikt',
      primaryBlue: 'de PM7 primaire blauwe',
      yellow: 'gele',
      color: 'kleur:',
    },
    zh: {
      basicMenu: '基本菜单',
      title: '带有汉堡图标和自定义菜单项的标准菜单。',
      features: '功能：',
      multiLanguage: '多语言支持',
      themeSwitching: '主题切换',
      submenu: '子菜单支持',
      icons: '图标',
      separators: '分隔符',
      checkboxes: '复选框和开关',
      menuAlignment: '菜单对齐',
      startAlignment: '开始对齐',
      centerAlignment: '居中对齐',
      endAlignment: '结束对齐',
      customIconColor: '自定义图标颜色',
      iconColorDesc: '菜单图标颜色可以使用',
      prop: '属性进行自定义。',
      exampleUses: '此示例使用',
      primaryBlue: 'PM7主要蓝色',
      yellow: '黄色',
      color: '颜色：',
    },
  };
  const getDescription = (key: keyof typeof descriptions['en']) => {
    return descriptions[selectedLanguage]?.[key] || descriptions['en'][key] || key;
  };
  return (
    <div style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', paddingBottom: '0.5rem' }}>
      {/* Checkbox for trigger border demo */}
      <div className="mb-4 flex flex-col gap-2">
        <div className="flex items-center">
          <input
            id="show-trigger-border"
            type="checkbox"
            className="mr-2"
            checked={showTriggerBorder}
            onChange={e => setShowTriggerBorder(e.target.checked)}
          />
          <label htmlFor="show-trigger-border" className="select-none cursor-pointer">
            Show border on trigger
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="show-trigger-background"
            type="checkbox"
            className="mr-2"
            checked={showTriggerBackground}
            onChange={e => setShowTriggerBackground(e.target.checked)}
          />
          <label htmlFor="show-trigger-background" className="select-none cursor-pointer">
            Show background on trigger
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="show-trigger-on-hover"
            type="checkbox"
            className="mr-2"
            checked={showTriggerOnHover}
            onChange={e => setShowTriggerOnHover(e.target.checked)}
          />
          <label htmlFor="show-trigger-on-hover" className="select-none cursor-pointer">
            Show border/background on hover only
          </label>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{getDescription('basicMenu')}</h2>
        <div className="flex items-start gap-4">
          <PM7Menu
            menuItems={menuItems.map((item: any) => ({
              ...item,
              label: getLabel(item),
              submenuItems: item.submenuItems?.map((subItem: any) => ({
                ...subItem,
                label: getLabel(subItem)
              }))
            }))}
            theme={theme}
            menuTriggerBorder={showTriggerBorder}
            menuTriggerBackground={showTriggerBackground}
            menuTriggerOnHover={showTriggerOnHover}
          />
          <div className="ml-4">
            <p>{getDescription('title')}</p>
            <p className="mt-2">{getDescription('features')}</p>
            <ul className="list-disc ml-5 mt-1">
              <li>{getDescription('multiLanguage')}</li>
              <li>{getDescription('themeSwitching')}</li>
              <li>{getDescription('submenu')}</li>
              <li>{getDescription('icons')}</li>
              <li>{getDescription('separators')}</li>
              <li>{getDescription('checkboxes')}</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-300 dark:border-gray-600 my-6" />
      
      {/* Menu coloring section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Menu coloring</h2>
        <p className="mb-4">Demonstration of a PM7Menu trigger with white background and black border.</p>
        <PM7Card style={{ backgroundColor: theme === 'dark' ? '#4B5563' : '#E5E7EB', padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <PM7Menu
              menuItems={menuItems.slice(0, 3).map((item: any) => ({
                ...item,
                label: getLabel(item),
                submenuItems: item.submenuItems?.map((subItem: any) => ({
                  ...subItem,
                  label: getLabel(subItem)
                }))
              }))}
              theme={theme}
              menuTriggerBorder={true}
              menuTriggerBackground={true}
              menuTriggerOnHover={false}
              menuTriggerBackgroundColor="#FFFFFF"
              menuTriggerBackgroundColorDark="#FFFFFF"
              menuTriggerBorderColor="#000000"
              menuTriggerBorderColorDark="#000000"
              menuTriggerIconColor="#000000"
              menuTriggerIconColorDark="#000000"
            />
          </div>
        </PM7Card>
      </div>
      <hr className="border-t border-gray-300 dark:border-gray-600 my-6" />
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{getDescription('menuAlignment')}</h2>
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col items-start">
            <p className="mb-2">{getDescription('startAlignment')}</p>
            <PM7Menu
              menuItems={menuItems.slice(0, 3).map((item: any) => ({
                ...item,
                label: getLabel(item),
                submenuItems: item.submenuItems?.map((subItem: any) => ({
                  ...subItem,
                  label: getLabel(subItem)
                }))
              }))}
              theme={theme}
              menuAlignment="start"
            />
          </div>
          <div className="flex flex-col items-start">
            <p className="mb-2">{getDescription('centerAlignment')}</p>
            <PM7Menu
              menuItems={menuItems.slice(0, 3).map((item: any) => ({
                ...item,
                label: getLabel(item),
                submenuItems: item.submenuItems?.map((subItem: any) => ({
                  ...subItem,
                  label: getLabel(subItem)
                }))
              }))}
              theme={theme}
              menuAlignment="center"
            />
          </div>
          <div className="flex flex-col items-start">
            <p className="mb-2">{getDescription('endAlignment')}</p>
            <PM7Menu
              menuItems={menuItems.slice(0, 3).map((item: any) => ({
                ...item,
                label: getLabel(item),
                submenuItems: item.submenuItems?.map((subItem: any) => ({
                  ...subItem,
                  label: getLabel(subItem)
                }))
              }))}
              theme={theme}
              menuAlignment="end"
            />
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-300 dark:border-gray-600 my-6" />
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{getDescription('customIconColor')}</h2>
        <div className="flex items-start gap-4">
          <PM7Menu
            menuItems={menuItems.slice(0, 3).map((item: any) => ({
              ...item,
              label: getLabel(item),
              submenuItems: item.submenuItems?.map((subItem: any) => ({
                ...subItem,
                label: getLabel(subItem)
              }))
            }))}
            theme={theme}
            menuTriggerIconColor={'#1C86EF'} // PM7 Blue
            menuTriggerIconColorDark={'#FFDD00'} // Yellow
          />
          <div className="ml-4">
            <p>{getDescription('iconColorDesc')} <code>menuTriggerIconColor</code> / <code>menuTriggerIconColorDark</code> {getDescription('prop')}</p>
            <p className="mt-2">{getDescription('exampleUses')} {theme === 'dark' ? getDescription('yellow') : getDescription('primaryBlue')} {getDescription('color')} <code>{theme === 'dark' ? '#FFDD00' : '#1C86EF'}</code></p>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-300 dark:border-gray-600 my-6" />

      {/* DEMO: showUncheckedIcon prop */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Show Unchecked Icon (showUncheckedIcon)</h2>
        <p className="mb-2">This example shows check items with both checked and unchecked states. The <code>showUncheckedIcon</code> prop is enabled, so all items show an icon (checked or unchecked).</p>
        <PM7Menu
          menuItems={[
            { id: 'check1', label: 'Checked Item', type: 'check', checked: true },
            { id: 'check2', label: 'Unchecked Item', type: 'check', checked: false },
            { id: 'radio1', label: 'Radio 1', type: 'radio', checked: false },
            { id: 'radio2', label: 'Radio 2', type: 'radio', checked: true },
          ]}
          theme={theme}
          showUncheckedIcon={true}
        />
      </div>
      <hr className="border-t border-gray-300 dark:border-gray-600 my-6" />

      {/* DEMO: theme-aware label color props */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Custom Trigger Label Color</h2>
        <p className="mb-2">This example uses a label as the menu trigger with custom label colors for light and dark mode using the theme-aware color props.</p>
        <PM7Menu
          menuItems={[
            { id: 'about', label: 'About', onClick: () => console.log('About') },
            { id: 'help', label: 'Help', onClick: () => console.log('Help') },
          ]}
          theme={theme}
          menuLabel="Help"
          menuTriggerLabelColor="#1C86EF" // PM7 Blue
          menuTriggerLabelColorDark="#FFDD00" // Yellow
        />
      </div>
      <hr className="border-t border-gray-300 dark:border-gray-600 my-6" />
      {/* 1. Custom SVG as menu icon */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Custom SVG Icon as Menu Trigger</h2>
        <p className="mb-2">This example uses a custom SVG as the menu trigger icon.</p>
        <PM7Menu
          menuItems={menuItems.slice(0, 3).map((item: any) => ({
            ...item,
            label: getLabel(item),
            submenuItems: item.submenuItems?.map((subItem: any) => ({
              ...subItem,
              label: getLabel(subItem)
            }))
          }))}
          theme={theme}
          menuIcon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={24} height={24}>
              <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <path d="m9 11 3 3 3-3" />
            </svg>
          }
        />
      </div>
      <hr className="border-t border-gray-300 dark:border-gray-600 my-6" />
      {/* 2. Label as menu trigger */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Label as Menu Trigger</h2>
        <p className="mb-2">This example uses a label ("File") as the menu trigger, similar to classic desktop apps.</p>
        <PM7Menu
          menuItems={[
            { id: 'new', label: 'New', onClick: () => console.log('New') },
            { id: 'open', label: 'Open', onClick: () => console.log('Open') },
            { id: 'save', label: 'Save', onClick: () => console.log('Save') },
            { id: 'sep', type: 'separator' },
            { id: 'close', label: 'Close', onClick: () => console.log('Close') },
          ]}
          theme={theme}
          menuLabel="File"
        />
      </div>
      <hr className="border-t border-gray-300 dark:border-gray-600 my-6" />
      {/* 3. Label and SVG as menu trigger */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Label and SVG as Menu Trigger</h2>
        <p className="mb-2">This example uses both a label ("File") and a custom SVG as the menu trigger.</p>
        <PM7Menu
          menuItems={[
            { id: 'new', label: 'New', onClick: () => console.log('New') },
            { id: 'open', label: 'Open', onClick: () => console.log('Open') },
            { id: 'save', label: 'Save', onClick: () => console.log('Save') },
            { id: 'sep', type: 'separator' },
            { id: 'close', label: 'Close', onClick: () => console.log('Close') },
          ]}
          theme={theme}
          menuLabel="File"
          menuIcon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
              <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <path d="m9 11 3 3 3-3" />
            </svg>
          }
          menuTriggerIconColor={'#1C86EF'} // PM7 Blue
          menuTriggerIconColorDark={'#FFDD00'} // Yellow
          menuTriggerLabelColor = {'#1C86EF'} // PM7 Blue
          menuTriggerLabelColorDark = {'#FFDD00'} // Yellow
        />
      </div>
      <hr className="border-t border-gray-300 dark:border-gray-600 my-6" />
      {/* 4. Submenu with Separators Example */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Submenu with Separators</h2>
        <p className="mb-2">This example demonstrates that separators can be used within submenus to group related items.</p>
        <PM7Menu
          menuItems={[
            { id: 'edit', label: 'Edit', submenuItems: [
              { id: 'undo', label: 'Undo', onClick: () => console.log('Undo') },
              { id: 'redo', label: 'Redo', onClick: () => console.log('Redo') },
              { id: 'edit-sep1', type: 'separator' },
              { id: 'cut', label: 'Cut', onClick: () => console.log('Cut') },
              { id: 'copy', label: 'Copy', onClick: () => console.log('Copy') },
              { id: 'paste', label: 'Paste', onClick: () => console.log('Paste') },
              { id: 'edit-sep2', type: 'separator' },
              { id: 'selectall', label: 'Select All', onClick: () => console.log('Select All') }
            ]},
            { id: 'view', label: 'View', submenuItems: [
              { id: 'zoomin', label: 'Zoom In', onClick: () => console.log('Zoom In') },
              { id: 'zoomout', label: 'Zoom Out', onClick: () => console.log('Zoom Out') },
              { id: 'view-sep', type: 'separator' },
              { id: 'fullscreen', label: 'Full Screen', onClick: () => console.log('Full Screen') }
            ]}
          ]}
          theme={theme}
          menuLabel="Edit"
        />
      </div>
    </div>
  );
};

export default ExampleMenuDemo;
