from aiogram import Bot, Dispatcher, executor, types
from aiogram.types.web_app_info import WebAppInfo


# Объект бота
bot = Bot("7684779732:AAH9bXvOvqrqeAY8G_oxLJzm_8VEp5D0uA8")
# Диспетчер
dp = Dispatcher(bot)

@dp.message_handler(commands=["start"])
async def start(message: types.Message):
    markup = types.ReplyKeyboardMarkup()
    markup.add(types.KeyboardButton("Открыть веб-страницу", web_app=WebAppInfo(url='https://f1056784.xsph.ru/')))
    await message.answer("Сайт открыт!", reply_markup=markup)


executor.start_polling(dp)
