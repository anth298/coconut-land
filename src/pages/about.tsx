import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import Image from 'next/image'

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src="https://cdn3.ivivu.com/2022/07/C%C3%B4n-Ph%E1%BB%A5ng-B%E1%BA%BFn-Tre-ivivu-1.jpg"
            alt="Về Bến Tre"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-3 font-light">
              GIỚI THIỆU
            </p>
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-6">
              Về Bến Tre
            </h1>
            <p className="text-lg md:text-xl font-light">
              Vùng đất của dừa xanh và sông nước
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="https://ik.imagekit.io/tvlk/blog/2022/09/du-lich-ben-tre-3.jpg"
                alt="Lịch sử Bến Tre"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Lịch sử hình thành
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Bến Tre là một tỉnh thuộc vùng Đồng bằng sông Cửu Long, được thành lập từ năm 1900.
                  Vùng đất này có lịch sử phát triển lâu đời, gắn liền với quá trình khai phá vùng đất
                  phương Nam của dân tộc Việt Nam.
                </p>
                <p>
                  Trong thời kỳ kháng chiến chống Pháp và chống Mỹ, Bến Tre là một trong những cái nôi
                  của phong trào Đồng Khởi, nơi khởi nguồn của phong trào "Đồng khởi Bến Tre" năm 1960.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Văn hóa đặc sắc
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Bến Tre là vùng đất có nền văn hóa đa dạng, phong phú, kết hợp giữa văn hóa
                  Việt Nam truyền thống và văn hóa sông nước miền Tây.
                </p>
                <p>
                  Nơi đây còn lưu giữ nhiều nét văn hóa độc đáo như: hát bội, đờn ca tài tử,
                  các lễ hội truyền thống và các làng nghề thủ công truyền thống.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <div className="relative h-64 w-full overflow-hidden rounded-lg">
                <Image
                  src="https://media.mia.vn/uploads/blog-du-lich/dac-san-ben-tre-11-1637570358.jpg"
                  alt="Văn hóa Bến Tre"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Geography Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/04_2020/hoi-quan-ong-kieng.jpg"
                alt="Địa lý Bến Tre"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Địa lý tự nhiên
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Bến Tre nằm ở hạ lưu sông Mê Kông, được bao bọc bởi sông Tiền và sông Ba Lai.
                  Địa hình chủ yếu là đồng bằng, có nhiều kênh rạch chằng chịt tạo nên một mạng lưới
                  giao thông đường thủy thuận tiện.
                </p>
                <p>
                  Khí hậu nhiệt đới gió mùa, nóng ẩm quanh năm, thuận lợi cho phát triển nông nghiệp,
                  đặc biệt là cây dừa và các loại cây ăn trái.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Economy Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Kinh tế và phát triển
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Bến Tre là một trong những tỉnh có nền kinh tế phát triển năng động ở khu vực
                  Đồng bằng sông Cửu Long. Kinh tế chủ yếu dựa trên nông nghiệp, thủy sản và
                  công nghiệp chế biến.
                </p>
                <p>
                  Tỉnh đang tập trung phát triển du lịch sinh thái, du lịch văn hóa và các ngành
                  công nghiệp chế biến nông sản, thủy sản. Đặc biệt, Bến Tre nổi tiếng với các
                  sản phẩm từ dừa như kẹo dừa, dầu dừa, than hoạt tính từ gáo dừa.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="https://i.ytimg.com/vi/B7U8qs_a2f0/maxresdefault.jpg"
                alt="Kinh tế Bến Tre"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 