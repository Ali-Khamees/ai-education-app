import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  Brain, 
  BookOpen, 
  HelpCircle, 
  Info, 
  MessageSquare, 
  Search, 
  Code, 
  Zap,
  Shield,
  Users,
  ArrowRight,
  ExternalLink
} from 'lucide-react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [selectedTool, setSelectedTool] = useState(null)
  const [toolDetails, setToolDetails] = useState("") // لاستخدام Markdown لاحقاً
  function openToolDetails(tool) {
    const html = `
      <h3 style="font-weight:700;margin:0 0 8px">${tool.name}</h3>
      <p style="margin:0 0 8px;color:#4b5563">${tool.description}</p>
      <h4 style="font-weight:600;margin:16px 0 8px">كيف أستفيد منها؟</h4>
      <ul style="padding-inline-start:18px;line-height:1.9">
        ${tool.uses.map(u => `<li>${u}</li>`).join("")}
      </ul>
      <p style="margin-top:12px"><b>الوصول:</b> ${tool.access}</p>
      <p style="margin-top:4px"><b>التكلفة:</b> ${tool.cost}</p>
    `
    setToolDetails(html)
    setSelectedTool(tool)
  }
  function closeToolDetails() {
    setSelectedTool(null)
  }

  const aiTools = [
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      description: 'مساعد ذكي للكتابة والإجابة على الأسئلة',
      icon: '/src/assets/icons/chatgpt.png',
      color: 'bg-green-500',
      uses: ['كتابة المحتوى', 'الترجمة', 'البحث', 'حل المشاكل'],
      access: 'موقع الويب وتطبيق الهاتف',
      cost: 'مجاني مع خيارات مدفوعة',
      url: 'https://chatgpt.com'
    },
    {
      id: 'gemini',
      name: 'Google Gemini',
      description: 'مساعد ذكي من Google للمهام المتنوعة',
      icon: '/src/assets/icons/gemini.png',
      color: 'bg-blue-500',
      uses: ['البحث الذكي', 'إنشاء المحتوى', 'تحليل البيانات'],
      access: 'موقع الويب وتطبيق الهاتف',
      cost: 'مجاني مع خيارات مدفوعة',
      url: 'https://gemini.google.com'
    },
    {
      id: 'deepseek',
      name: 'DeepSeek',
      description: 'منصة ذكاء اصطناعي متقدمة للبرمجة والتحليل',
      icon: '/src/assets/icons/deepseek.png',
      color: 'bg-purple-500',
      uses: ['البرمجة', 'التحليل العلمي', 'حل المسائل المعقدة'],
      access: 'موقع الويب',
      cost: 'مجاني مع خيارات مدفوعة',
      url: 'https://chat.deepseek.com'
    },
    {
      id: 'copilot',
      name: 'Microsoft Copilot',
      description: 'مساعد ذكي مدمج في أدوات Microsoft',
      icon: '/src/assets/icons/copilot.png',
      color: 'bg-orange-500',
      uses: ['تحسين الإنتاجية في Office', 'إنشاء العروض التقديمية'],
      access: 'موقع الويب، تطبيقات Office، Windows',
      cost: 'مجاني مع خيارات مدفوعة',
      url: 'https://copilot.microsoft.com'
    }
  ]

  const faqs = [
    {
      question: 'ما هو الذكاء الاصطناعي؟',
      answer: 'الذكاء الاصطناعي هو تقنية تمكن الحاسوب من محاكاة الذكاء البشري في المهام مثل التعلم والتفكير وحل المشاكل.'
    },
    {
      question: 'هل هذه الأدوات آمنة للاستخدام؟',
      answer: 'نعم، هذه الأدوات آمنة عند استخدامها بشكل صحيح. يجب تجنب مشاركة المعلومات الحساسة أو السرية.'
    },
    {
      question: 'كيف يمكن استخدامها في العمل الحكومي؟',
      answer: 'يمكن استخدامها في كتابة التقارير، ترجمة الوثائق، إعداد العروض التقديمية، والرد على استفسارات المواطنين.'
    },
    {
      question: 'ما هي التكلفة؟',
      answer: 'معظم هذه الأدوات تقدم خدمات مجانية أساسية، مع خيارات مدفوعة للميزات المتقدمة.'
    }
  ]

  const HomeScreen = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4 py-8">
        <div className="flex justify-center">
          <div className="p-4 bg-blue-100 rounded-full">
            <Brain className="h-12 w-12 text-blue-600" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">تعليم الذكاء الاصطناعي</h1>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          دليلك الشامل لأدوات الذكاء الاصطناعي للموظفين الحكوميين
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">4</div>
            <div className="text-sm text-gray-600">أدوات رئيسية</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">مجاني</div>
            <div className="text-sm text-gray-600">للبدء</div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Start */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            البدء السريع
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <span>اختر أداة الذكاء الاصطناعي المناسبة</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <span>أنشئ حساب جديد</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <span>ابدأ الاستخدام</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const ToolsScreen = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">أدوات الذكاء الاصطناعي</h2>
        <p className="text-gray-600">اكتشف الأدوات المتاحة وكيفية استخدامها</p>
      </div>

      <div className="space-y-4">
        {aiTools.map((tool) => {
          return (
            <Card key={tool.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 ${tool.color} rounded-lg`}>
                    <img 
                      src={tool.icon} 
                      alt={tool.name} 
                      className="h-10 w-10 object-contain rounded bg-white p-1"
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                    <CardDescription className="text-sm">{tool.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">الاستخدامات:</h4>
                  <div className="flex flex-wrap gap-1">
                    {tool.uses.map((use, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {use}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div>
                    <span className="font-semibold">الوصول: </span>
                    <span className="text-gray-600">{tool.access}</span>
                  </div>
                  <div>
                    <span className="font-semibold">التكلفة: </span>
                    <span className="text-gray-600">{tool.cost}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(tool.url, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 ml-1" />
                    زيارة الموقع
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1" onClick={() => openToolDetails(tool)}>
                    <Info className="h-4 w-4 ml-1" />
                    تفاصيل أكثر
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )

  const GuideScreen = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">دليل البدء السريع</h2>
        <p className="text-gray-600">تعلم كيفية استخدام أدوات الذكاء الاصطناعي بفعالية</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>مقدمة عن الذكاء الاصطناعي</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">
            الذكاء الاصطناعي هو مجال في علوم الحاسوب يهدف إلى إنشاء أنظمة قادرة على أداء مهام تتطلب عادة ذكاء بشري. 
            هذه الأدوات يمكنها مساعدتك في العمل اليومي من خلال أتمتة المهام المتكررة وتقديم اقتراحات ذكية.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>كيفية اختيار الأداة المناسبة</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-3 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900">للكتابة والترجمة</h4>
            <p className="text-blue-800 text-sm">استخدم ChatGPT أو Google Gemini</p>
          </div>
          <div className="p-3 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-900">للبرمجة والتطوير</h4>
            <p className="text-green-800 text-sm">استخدم DeepSeek أو GitHub Copilot</p>
          </div>
          <div className="p-3 bg-orange-50 rounded-lg">
            <h4 className="font-semibold text-orange-900">لأدوات Office</h4>
            <p className="text-orange-800 text-sm">استخدم Microsoft Copilot</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>نصائح للاستخدام الفعال</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 mt-1 text-blue-500 flex-shrink-0" />
              <span>كن واضحاً ومحدداً في طلباتك</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 mt-1 text-blue-500 flex-shrink-0" />
              <span>قدم السياق والخلفية للمهمة</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 mt-1 text-blue-500 flex-shrink-0" />
              <span>راجع النتائج دائماً قبل الاستخدام</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 mt-1 text-blue-500 flex-shrink-0" />
              <span>لا تشارك معلومات حساسة أو سرية</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )

  const FAQScreen = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">الأسئلة الشائعة</h2>
        <p className="text-gray-600">إجابات على الأسئلة الأكثر شيوعاً</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg flex items-start gap-2">
                <HelpCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                {faq.question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-green-500" />
            نصائح الأمان
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 mt-1 text-green-500 flex-shrink-0" />
              <span>لا تشارك كلمات المرور أو المعلومات الشخصية</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 mt-1 text-green-500 flex-shrink-0" />
              <span>تجنب مشاركة وثائق سرية أو حساسة</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 mt-1 text-green-500 flex-shrink-0" />
              <span>راجع سياسات الخصوصية لكل أداة</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 mt-1 text-green-500 flex-shrink-0" />
              <span>استخدم كلمات مرور قوية وفريدة</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )

  const AboutScreen = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">حول التطبيق</h2>
        <p className="text-gray-600">معلومات عن تطبيق تعليم الذكاء الاصطناعي</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>الهدف من التطبيق</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">
            يهدف هذا التطبيق إلى نشر الوعي بأدوات الذكاء الاصطناعي بين موظفي الوزارات الحكومية، 
            وتقديم دليل شامل لكيفية الوصول إلى هذه الأدوات واستخدامها بفعالية في العمل اليومي.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-500" />
            الجمهور المستهدف
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">
            موظفو الوزارات الحكومية من جميع المستويات الوظيفية والتخصصات، 
            الذين يسعون لتحسين إنتاجيتهم وجودة عملهم باستخدام تقنيات الذكاء الاصطناعي.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>الميزات الرئيسية</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 mt-1 text-blue-500 flex-shrink-0" />
              <span>دليل شامل لأدوات الذكاء الاصطناعي الرئيسية</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 mt-1 text-blue-500 flex-shrink-0" />
              <span>خطوات مفصلة لإنشاء الحسابات</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 mt-1 text-blue-500 flex-shrink-0" />
              <span>أمثلة عملية للاستخدام في العمل الحكومي</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 mt-1 text-blue-500 flex-shrink-0" />
              <span>نصائح الأمان والخصوصية</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 mt-1 text-blue-500 flex-shrink-0" />
              <span>واجهة مستخدم سهلة ومتجاوبة</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>الإصدار الحالي</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">الإصدار 1.0.0</span>
            <Badge variant="outline">تجريبي</Badge>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            آخر تحديث: اغسطس 2025
          </p>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* Main Content */}
        <div className="p-4 pb-20">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsContent value="home">
              <HomeScreen />
            </TabsContent>
            <TabsContent value="tools">
              <ToolsScreen />
            </TabsContent>
            <TabsContent value="guide">
              <GuideScreen />
            </TabsContent>
            <TabsContent value="faq">
              <FAQScreen />
            </TabsContent>
            <TabsContent value="about">
              <AboutScreen />
            </TabsContent>
          </Tabs>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200">
          <div className="grid grid-cols-5 gap-1 p-2">
            <Button
              variant={activeTab === 'home' ? 'default' : 'ghost'}
              size="sm"
              className="flex flex-col items-center gap-1 h-auto py-2"
              onClick={() => setActiveTab('home')}
            >
              <Brain className="h-4 w-4" />
              <span className="text-xs">الرئيسية</span>
            </Button>
            <Button
              variant={activeTab === 'tools' ? 'default' : 'ghost'}
              size="sm"
              className="flex flex-col items-center gap-1 h-auto py-2"
              onClick={() => setActiveTab('tools')}
            >
              <Zap className="h-4 w-4" />
              <span className="text-xs">الأدوات</span>
            </Button>
            <Button
              variant={activeTab === 'guide' ? 'default' : 'ghost'}
              size="sm"
              className="flex flex-col items-center gap-1 h-auto py-2"
              onClick={() => setActiveTab('guide')}
            >
              <BookOpen className="h-4 w-4" />
              <span className="text-xs">الدليل</span>
            </Button>
            <Button
              variant={activeTab === 'faq' ? 'default' : 'ghost'}
              size="sm"
              className="flex flex-col items-center gap-1 h-auto py-2"
              onClick={() => setActiveTab('faq')}
            >
              <HelpCircle className="h-4 w-4" />
              <span className="text-xs">أسئلة</span>
            </Button>
            <Button
              variant={activeTab === 'about' ? 'default' : 'ghost'}
              size="sm"
              className="flex flex-col items-center gap-1 h-auto py-2"
              onClick={() => setActiveTab('about')}
            >
              <Info className="h-4 w-4" />
              <span className="text-xs">حول</span>
            </Button>
          </div>
        </div>
        {/* Modal للتفاصيل */}
          {selectedTool && (
            <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40" onClick={closeToolDetails}>
              <div
                className="bg-white w-full sm:max-w-lg rounded-t-2xl sm:rounded-2xl shadow-xl p-4 sm:p-6 animate-in slide-in-from-bottom-4"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold">{selectedTool.name}</h3>
                  <button onClick={closeToolDetails} className="text-gray-500 hover:text-gray-700 text-sm">إغلاق ✕</button>
                </div>

                {/* محتوى التفاصيل (HTML مبسط الآن) */}
                <div className="prose prose-slate max-w-none rtl" dangerouslySetInnerHTML={{ __html: toolDetails }} />

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Button variant="outline" onClick={closeToolDetails}>رجوع</Button>
                  <Button onClick={() => window.open(selectedTool.url, '_blank')}>زيارة الموقع</Button>
                </div>
              </div>
            </div>
          )}

      </div>
    </div>
  )
}

export default App

