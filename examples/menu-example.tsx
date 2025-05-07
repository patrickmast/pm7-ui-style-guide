// Enhancement: Restored menu example to demonstrate PM7Menu component functionality, aligned the main flex container to the top (items-start)
// Bug Fix: Fixed styling to match the rest of the examples app
import React, { useState, useEffect } from 'react';
import { LanguagesIcon, MoonIcon, SunIcon, HomeIcon, SettingsIcon, UserIcon } from 'lucide-react';

// Import the menu component using relative imports for local development
import { PM7Menu } from '../src/components/menu';

const MenuExample = () => {
  // State for selected language
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    // Check if user has a language preference in localStorage
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('pm7-language');
      if (savedLanguage) {
        return savedLanguage;
      }
    }
    return 'en'; // Default to English
  });

  // State for theme (light/dark)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('pm7-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme as 'light' | 'dark';
    }
    // Check system preference
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light'; // Default to light theme
  });

  // Function to get label based on selected language with fallback
  const getLabel = (item: any) => {
    const langKey = `label-${selectedLanguage}`;
    return item[langKey] || item.label || '';
  };

  // Translations for all text in the menu example
  const descriptions = {
    'en': {
      // Basic Menu section
      basicMenu: 'Basic Menu',
      title: 'A standard menu with hamburger icon and custom menu items.',
      features: 'Features:',
      multiLanguage: 'Multi-language support',
      themeSwitching: 'Theme switching',
      submenu: 'Submenu support',
      icons: 'Icons',
      separators: 'Separators',
      checkboxes: 'Checkboxes and switches',
      
      // Menu Alignment section
      menuAlignment: 'Menu Alignment',
      startAlignment: 'Start Alignment',
      centerAlignment: 'Center Alignment',
      endAlignment: 'End Alignment',
      
      // Custom Icon Color section
      customIconColor: 'Custom Icon Color',
      iconColorDesc: 'The menu icon color can be customized using the',
      prop: 'prop.',
      exampleUses: 'This example uses',
      primaryBlue: 'the PM7 primary blue',
      yellow: 'yellow',
      color: 'color:',
      
      // Usage section
      usage: 'Usage'
    },
    'es': {
      // Basic Menu section
      basicMenu: 'Menú Básico',
      title: 'Un menú estándar con icono de hamburguesa y elementos de menú personalizados.',
      features: 'Características:',
      multiLanguage: 'Soporte multilingüe',
      themeSwitching: 'Cambio de tema',
      submenu: 'Soporte de submenú',
      icons: 'Iconos',
      separators: 'Separadores',
      checkboxes: 'Casillas de verificación e interruptores',
      
      // Menu Alignment section
      menuAlignment: 'Alineación del Menú',
      startAlignment: 'Alineación Inicial',
      centerAlignment: 'Alineación Central',
      endAlignment: 'Alineación Final',
      
      // Custom Icon Color section
      customIconColor: 'Color de Icono Personalizado',
      iconColorDesc: 'El color del icono del menú se puede personalizar usando el',
      prop: 'prop.',
      exampleUses: 'Este ejemplo usa',
      primaryBlue: 'el color azul primario de PM7',
      yellow: 'amarillo',
      color: 'color:',
      
      // Usage section
      usage: 'Uso'
    },
    'fr': {
      // Basic Menu section
      basicMenu: 'Menu de Base',
      title: 'Un menu standard avec icône hamburger et éléments de menu personnalisés.',
      features: 'Fonctionnalités:',
      multiLanguage: 'Support multilingue',
      themeSwitching: 'Changement de thème',
      submenu: 'Support de sous-menu',
      icons: 'Icônes',
      separators: 'Séparateurs',
      checkboxes: 'Cases à cocher et interrupteurs',
      
      // Menu Alignment section
      menuAlignment: 'Alignement du Menu',
      startAlignment: 'Alignement Début',
      centerAlignment: 'Alignement Centre',
      endAlignment: 'Alignement Fin',
      
      // Custom Icon Color section
      customIconColor: 'Couleur d\'Icône Personnalisée',
      iconColorDesc: 'La couleur de l\'icône du menu peut être personnalisée en utilisant le',
      prop: 'prop.',
      exampleUses: 'Cet exemple utilise',
      primaryBlue: 'la couleur bleue primaire de PM7',
      yellow: 'jaune',
      color: 'couleur:',
      
      // Usage section
      usage: 'Utilisation'
    },
    'de': {
      // Basic Menu section
      basicMenu: 'Basis Menü',
      title: 'Ein Standardmenü mit Hamburger-Symbol und benutzerdefinierten Menüelementen.',
      features: 'Funktionen:',
      multiLanguage: 'Mehrsprachige Unterstützung',
      themeSwitching: 'Themenwechsel',
      submenu: 'Untermenü-Unterstützung',
      icons: 'Symbole',
      separators: 'Trennlinien',
      checkboxes: 'Kontrollkästchen und Schalter',
      
      // Menu Alignment section
      menuAlignment: 'Menü-Ausrichtung',
      startAlignment: 'Ausrichtung Anfang',
      centerAlignment: 'Ausrichtung Mitte',
      endAlignment: 'Ausrichtung Ende',
      
      // Custom Icon Color section
      customIconColor: 'Benutzerdefinierte Symbolfarbe',
      iconColorDesc: 'Die Menüsymbolfarbe kann mit dem',
      prop: 'Prop angepasst werden.',
      exampleUses: 'Dieses Beispiel verwendet',
      primaryBlue: 'die PM7 Primärblau',
      yellow: 'gelbe',
      color: 'Farbe:',
      
      // Usage section
      usage: 'Verwendung'
    },
    'nl': {
      // Basic Menu section
      basicMenu: 'Basis Menu',
      title: 'Een standaard menu met hamburger-pictogram en aangepaste menu-items.',
      features: 'Functies:',
      multiLanguage: 'Meertalige ondersteuning',
      themeSwitching: 'Thema wisselen',
      submenu: 'Submenu-ondersteuning',
      icons: 'Pictogrammen',
      separators: 'Scheidingslijnen',
      checkboxes: 'Selectievakjes en schakelaars',
      
      // Menu Alignment section
      menuAlignment: 'Menu Uitlijning',
      startAlignment: 'Begin Uitlijning',
      centerAlignment: 'Midden Uitlijning',
      endAlignment: 'Einde Uitlijning',
      
      // Custom Icon Color section
      customIconColor: 'Aangepaste Pictogramkleur',
      iconColorDesc: 'De kleur van het menupictogram kan worden aangepast met de',
      prop: 'eigenschap.',
      exampleUses: 'Dit voorbeeld gebruikt',
      primaryBlue: 'de PM7 primaire blauwe',
      yellow: 'gele',
      color: 'kleur:',
      
      // Usage section
      usage: 'Gebruik'
    },
    'nl-be': {
      // Basic Menu section
      basicMenu: 'Basis Menu',
      title: 'Een standaard menu met hamburger-pictogram en aangepaste menu-items.',
      features: 'Functies:',
      multiLanguage: 'Meertalige ondersteuning',
      themeSwitching: 'Thema wisselen',
      submenu: 'Submenu-ondersteuning',
      icons: 'Pictogrammen',
      separators: 'Scheidingslijnen',
      checkboxes: 'Selectievakjes en schakelaars',
      
      // Menu Alignment section
      menuAlignment: 'Menu Uitlijning',
      startAlignment: 'Begin Uitlijning',
      centerAlignment: 'Midden Uitlijning',
      endAlignment: 'Einde Uitlijning',
      
      // Custom Icon Color section
      customIconColor: 'Aangepaste Pictogramkleur',
      iconColorDesc: 'De kleur van het menupictogram kan worden aangepast met de',
      prop: 'eigenschap.',
      exampleUses: 'Dit voorbeeld gebruikt',
      primaryBlue: 'de PM7 primaire blauwe',
      yellow: 'gele',
      color: 'kleur:',
      
      // Usage section
      usage: 'Gebruik'
    },
    'zh': {
      // Basic Menu section
      basicMenu: '基本菜单',
      title: '带有汉堡图标和自定义菜单项的标准菜单。',
      features: '功能：',
      multiLanguage: '多语言支持',
      themeSwitching: '主题切换',
      submenu: '子菜单支持',
      icons: '图标',
      separators: '分隔符',
      checkboxes: '复选框和开关',
      
      // Menu Alignment section
      menuAlignment: '菜单对齐',
      startAlignment: '左对齐',
      centerAlignment: '居中对齐',
      endAlignment: '右对齐',
      
      // Custom Icon Color section
      customIconColor: '自定义图标颜色',
      iconColorDesc: '可以使用',
      prop: '属性自定义菜单图标颜色。',
      exampleUses: '这个例子使用',
      primaryBlue: 'PM7主要蓝色',
      yellow: '黄色',
      color: '颜色：',
      
      // Usage section
      usage: '用法'
    }
  };

  // Get description text based on selected language with fallback to English
  const getDescription = (key: string) => {
    return descriptions[selectedLanguage]?.[key] || descriptions['en'][key];
  };

  // Function to select language
  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    localStorage.setItem('pm7-language', language);
  };

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('pm7-theme', newTheme);

    // Apply theme to document for consistent styling
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  // Define menu items with translations for all supported languages
  const menuItems = [
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
      icon: <HomeIcon size={16} />
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
      icon: <UserIcon size={16} />
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
      icon: <SettingsIcon size={16} />
    },
    {
      id: 'separator1',
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
      icon: <LanguagesIcon size={16} />,
      submenuItems: [
        {
          id: 'en',
          label: 'English',
          type: 'check',
          checked: selectedLanguage === 'en',
          onClick: () => selectLanguage('en')
        },
        {
          id: 'es',
          label: 'Español',
          type: 'check',
          checked: selectedLanguage === 'es',
          onClick: () => selectLanguage('es')
        },
        {
          id: 'fr',
          label: 'Français',
          type: 'check',
          checked: selectedLanguage === 'fr',
          onClick: () => selectLanguage('fr')
        },
        {
          id: 'de',
          label: 'Deutsch',
          type: 'check',
          checked: selectedLanguage === 'de',
          onClick: () => selectLanguage('de')
        },
        {
          id: 'nl',
          label: 'Nederlands',
          type: 'check',
          checked: selectedLanguage === 'nl',
          onClick: () => selectLanguage('nl')
        },
        {
          id: 'nl-be',
          label: 'Nederlands (België)',
          type: 'check',
          checked: selectedLanguage === 'nl-be',
          onClick: () => selectLanguage('nl-be')
        },
        {
          id: 'zh',
          label: '中文',
          type: 'check',
          checked: selectedLanguage === 'zh',
          onClick: () => selectLanguage('zh')
        }
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
      icon: theme === 'dark' ? <MoonIcon size={16} /> : <SunIcon size={16} />,
      checked: theme === 'dark',
      onChange: toggleTheme
    }
  ];

  // Apply theme to document when component mounts
  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, []);

  // Update theme labels when theme changes
  useEffect(() => {
    menuItems.forEach(item => {
      if (item.id === 'theme') {
        item.label = `Theme: ${theme === 'dark' ? 'Dark' : 'Light'}`;
        item.icon = theme === 'dark' ? <MoonIcon size={16} /> : <SunIcon size={16} />;
        item['label-en'] = `Theme: ${theme === 'dark' ? 'Dark' : 'Light'}`;
        item['label-es'] = `Tema: ${theme === 'dark' ? 'Oscuro' : 'Claro'}`;
        item['label-fr'] = `Thème: ${theme === 'dark' ? 'Sombre' : 'Clair'}`;
        item['label-de'] = `Thema: ${theme === 'dark' ? 'Dunkel' : 'Hell'}`;
        item['label-nl'] = `Thema: ${theme === 'dark' ? 'Donker' : 'Licht'}`;
        item['label-nl-be'] = `Thema: ${theme === 'dark' ? 'Donker' : 'Licht'}`;
        item['label-zh'] = `主题: ${theme === 'dark' ? '深色' : '浅色'}`;
      }
    });
  }, [theme]);

  return (
    <div className="component-example">
      <div className="component-header">
        <h2>Menu Component</h2>
        <div className="theme-toggle">
          <button
            className={`theme-switch ${theme === 'dark' ? 'dark' : ''}`}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <div className="theme-switch-thumb">
              {theme === 'light' ? <SunIcon size={16} /> : <MoonIcon size={16} />}
            </div>
          </button>
        </div>
      </div>

      <div className="example-container">
        <div className="example-preview" style={{ background: theme === 'dark' ? '#333333' : '#f5f5f5', color: theme === 'dark' ? '#ffffff' : 'inherit', padding: '20px', borderRadius: '8px', display: 'flex', justifyContent: 'flex-start' }}>
          <div className="">

              <h3 className="text-xl font-semibold mb-3">{getDescription('basicMenu')}</h3>
              <div className="flex items-start gap-4">
                <PM7Menu
                  menuItems={menuItems.map(item => ({
                    ...item,
                    label: getLabel(item),
                    submenuItems: item.submenuItems?.map(subItem => ({
                      ...subItem,
                      label: getLabel(subItem)
                    }))
                  }))}
                  initialTheme={theme}
                  menuAlignment="start"
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

            <hr className="border-t border-gray-300 dark:border-gray-600 my-6" />

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">{getDescription('menuAlignment')}</h3>
              <div className="flex flex-wrap gap-8">
                <div className="flex flex-col items-start">
                  <p className="mb-2">{getDescription('startAlignment')}</p>
                  <PM7Menu
                    menuItems={menuItems.slice(0, 3)}
                    initialTheme={theme}
                    menuAlignment="start"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <p className="mb-2">{getDescription('centerAlignment')}</p>
                  <PM7Menu
                    menuItems={menuItems.slice(0, 3)}
                    initialTheme={theme}
                    menuAlignment="center"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <p className="mb-2">{getDescription('endAlignment')}</p>
                  <PM7Menu
                    menuItems={menuItems.slice(0, 3)}
                    initialTheme={theme}
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
                  menuItems={menuItems.slice(0, 3)}
                  initialTheme={theme}
                  menuIconColor={theme === 'dark' ? '#FFDD00' : '#1C86EF'}
                />
                <div className="ml-4">
                  <p>{getDescription('iconColorDesc')} <code>menuIconColor</code> {getDescription('prop')}</p>
                  <p className="mt-2">{getDescription('exampleUses')} {theme === 'dark' ? getDescription('yellow') : getDescription('primaryBlue')} {getDescription('color')} <code>{theme === 'dark' ? '#FFDD00' : '#1C86EF'}</code></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="example-code">
          <h3>{getDescription('usage')}</h3>
          <pre>
            <code>{`// For local development, use relative imports
import { PM7Menu as Menu } from '../src/components/menu';
// For production, use package imports
// import { Menu } from "pm7-ui-style-guide";

// Define menu items
const menuItems = [
  {
    id: 'home',
    label: 'Home',
    icon: <HomeIcon size={16} />,
    onClick: () => console.log('Home clicked')
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <SettingsIcon size={16} />,
    onClick: () => console.log('Settings clicked')
  },
  {
    id: 'theme',
    label: 'Theme',
    type: 'switch',
    icon: <SunIcon size={16} />,
    checked: isDarkMode,
    onChange: (checked) => setIsDarkMode(checked)
  }
];

// Render the menu component
<Menu
  menuItems={menuItems}
  initialTheme="light"
  menuAlignment="start"
/>
`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default MenuExample;