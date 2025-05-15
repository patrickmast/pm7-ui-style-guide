// Refactor: Extracted the "Demo" tab content from example-menu.tsx to this file as ExampleMenuDemo.
import React from 'react';
import { PM7Menu, PM7MenuIcon } from '../src/components/menu';
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
        { id: 'nl', label: 'Nederlands', type: 'check', checked: selectedLanguage === 'nl', onClick: () => handleLanguageChange('nl') },
        { id: 'nl-be', label: 'Nederlands (België)', type: 'check', checked: selectedLanguage === 'nl-be', onClick: () => handleLanguageChange('nl-be') },
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
    <div className="p-6">
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">{getDescription('basicMenu')}</h3>
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
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">{getDescription('menuAlignment')}</h3>
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
        <h3 className="text-xl font-semibold mb-3">{getDescription('customIconColor')}</h3>
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
            menuIconColorLight={'#1C86EF'} // PM7 Blue
            menuIconColorDark={'#FFDD00'} // Yellow
          />
          <div className="ml-4">
            <p>{getDescription('iconColorDesc')} <code>menuIconColor</code> {getDescription('prop')}</p>
            <p className="mt-2">{getDescription('exampleUses')} {theme === 'dark' ? getDescription('yellow') : getDescription('primaryBlue')} {getDescription('color')} <code>{theme === 'dark' ? '#FFDD00' : '#1C86EF'}</code></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleMenuDemo;
