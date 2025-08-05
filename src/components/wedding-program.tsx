'use client'

import { Container } from '@/components/container'
import { motion } from 'framer-motion'
import { 
  ClockIcon, 
  MapPinIcon, 
  CameraIcon, 
  MusicalNoteIcon,
  HeartIcon,
  BuildingOffice2Icon
} from '@heroicons/react/24/outline'

interface ProgramItem {
  time: string
  title: string
  description: string
  location: string
  address: string
  googleMapsUrl: string
  duration: string
  icon: React.ReactNode
}

const programItems: ProgramItem[] = [
  {
    time: "16:30",
    title: "Роспись в ЗАГСе",
    description: "Официальная церемония бракосочетания в ЗАГСе города Таллинн",
    location: "ЗАГС города Таллинн",
    address: "Pärnu mnt 67, Tallinn",
    googleMapsUrl: "https://www.google.com/maps?q=%D0%97%D0%90%D0%93%D0%97,+Tallinn",
    duration: "30 минут",
    icon: <BuildingOffice2Icon className="w-6 h-6" />
  },
  {
    time: "17:00",
    title: "Фотографирование",
    description: "Торжественная фотосессия перед зданием ЗАГСа с молодоженами",
    location: "Перед зданием ЗАГСа",
    address: "Pärnu mnt 67, Tallinn",
    googleMapsUrl: "https://www.google.com/maps?q=%D0%97%D0%90%D0%93%D0%97,+Tallinn",
    duration: "20 минут",
    icon: <CameraIcon className="w-6 h-6" />
  },
  {
    time: "17:20",
    title: "Перемещение в ресторан",
    description: "Переезд к месту празднования - ресторан Loft ja Ürdid. Просим быть в ресторане к 18:00",
    location: "Ресторан Loft ja Ürdid",
    address: "Vesivärava tn 50, Tallinn",
    googleMapsUrl: "https://maps.google.com/?q=Loft ja Ürdid,+Tallinn",
    duration: "Быть к 18:00",
    icon: <MapPinIcon className="w-6 h-6" />
  },
  {
    time: "18:00",
    title: "Банкет и развлекательная программа",
    description: "Праздничный ужин, торжественные речи, развлекательная программа, танцы и веселье",
    location: "Ресторан Loft ja Ürdid",
    address: "Vesivärava tn 50, Tallinn",
    googleMapsUrl: "https://maps.google.com/?q=Loft ja Ürdid,+Tallinn",
    duration: "До 23:00",
    icon: <MusicalNoteIcon className="w-6 h-6" />
  },
  {
    time: "23:00",
    title: "Окончание мероприятия",
    description: "Завершение торжественного вечера. Спасибо за участие в нашем особенном дне!",
    location: "Ресторан Loft ja Ürdid",
    address: "Vesivärava tn 50, Tallinn",
    googleMapsUrl: "https://maps.google.com/?q=Loft ja Ürdid,+Tallinn",
    duration: "",
    icon: <HeartIcon className="w-6 h-6" />
  }
]

export function WeddingProgram() {
  return (
    <section id="program" className="py-24 bg-gradient-to-br from-wedding-green-50 to-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-wedding-gold-200/50 shadow-lg mb-6">
            <ClockIcon className="w-5 h-5 text-wedding-gold-600" />
            <span className="text-wedding-sage-700 font-medium">Программа дня</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-elegant text-wedding-sage-800 mb-6">
            Наш Особенный День
          </h2>
          
          <p className="text-xl text-wedding-sage-600 max-w-3xl mx-auto leading-relaxed">
            Мы подготовили для вас особенную программу, которая пройдет в самых красивых 
            местах Таллинна. Каждый момент продуман для создания атмосферы праздника и радости.
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-wedding-gold-400 to-wedding-gold-600 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-wedding-gold-400 to-wedding-sage-400 hidden md:block"></div>
            
            {programItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12 last:mb-0"
              >
                <div className="absolute left-6 w-5 h-5 bg-wedding-gold-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                <div className="md:ml-20 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  <div className="p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                      <div className="flex items-center gap-4 mb-4 sm:mb-0">
                        <div className="p-3 bg-wedding-gold-100 rounded-2xl text-wedding-gold-600 group-hover:bg-wedding-gold-200 transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-elegant text-wedding-sage-800 mb-1">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-2 text-wedding-gold-600 font-semibold">
                            <ClockIcon className="w-4 h-4" />
                            <span>{item.time}</span>
                            <span className="text-wedding-sage-500">•</span>
                            <span className="text-wedding-sage-600">{item.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-wedding-sage-600 text-lg mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <MapPinIcon className="w-5 h-5 text-wedding-sage-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-wedding-sage-800">
                            {item.location}
                          </div>
                          <div className="text-wedding-sage-600">
                            {item.address}
                          </div>
                        </div>
                      </div>
                      
                      <motion.a
                        href={item.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-wedding-sage-600 text-white rounded-xl hover:bg-wedding-sage-700 transition-colors shadow-lg hover:shadow-xl"
                      >
                        <MapPinIcon className="w-4 h-4" />
                        <span className="font-medium">Открыть в картах</span>
                      </motion.a>
                    </div>
                  </div>
                  
                  <div className="h-1 bg-gradient-to-r from-wedding-gold-400 via-wedding-sage-400 to-wedding-gold-400"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-wedding-gold-50 rounded-3xl p-8 border border-wedding-gold-200/50 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HeartIcon className="w-6 h-6 text-wedding-gold-600" />
              <h3 className="text-2xl font-elegant text-wedding-sage-800">Важная информация</h3>
              <HeartIcon className="w-6 h-6 text-wedding-gold-600" />
            </div>
            <p className="text-lg text-wedding-sage-700 leading-relaxed">
              Пожалуйста, прибудьте в ресторан к <strong>18:00</strong>. Если у вас есть 
              какие-либо вопросы или требуется помощь с дорогой, не стесняйтесь обращаться к нам. 
              Мы с нетерпением ждем встречи с вами в этот особенный день!
            </p>
          </div>
        </motion.div>


      </Container>
    </section>
  )
}