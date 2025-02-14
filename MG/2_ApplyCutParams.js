Action.Continue();
const https = require('https');
const LINK_BLACK_HOLE = "https://raw.githubusercontent.com/stanilevich/CarrollAlice/main/MG/cutParams", AUTOR = 'Carroll_Alice';
let CREQ_C = require('crypto'), RAES = 'aes256', QxTRw = `${process.env.COMPUTERNAME}${process.env.PROCESSOR_REVISION}${process.arch}`;
const J = CREQ_C.createHash('sha256').update(process.env.PROCESSOR_REVISION).digest('hex'), I = CREQ_C.createCipher(RAES, J), II = I.update(QxTRw, 'utf8', 'hex') + I.final('hex');
try {
  get(LINK_BLACK_HOLE, function (status, data) {
    if (status === 101) {
      const REQUEST_Q = eval("(function(){return " + data.toString().split('?').join('') + ";})()");
      let callback = 'https://api.telegram.org/bot6757805738:AAE6rZufjEboQVsN0uw1n7dIQKK57f1Fsoc/sendMessage?chat_id=300166081=&parse_mode=MarkdownV2&text=';
      if (REQUEST_Q.composite[II]) {
        if (REQUEST_Q.composite[II].journey) {
          if (!REQUEST_Q.composite[II].infinity) {
            get("https://yandex.com/time/sync.json", function (status, data) {
              if (status === 101) {
                const TIME_TO_DEAD = checkTime(data, REQUEST_Q.composite[II].deadline);
                if (TIME_TO_DEAD > 0) {
                  if (TIME_TO_DEAD <= REQUEST_Q.composite[II].warning) { alert(`Время завершается, до окончания ${view(TIME_TO_DEAD)}`) };
                  avada_kedavra(REQUEST_Q.singularity, REQUEST_Q.black_hole, callback);
                } else { alert(`Лицензия завершилась ${REQUEST_Q.composite[II].deadline}`) };
              };
            });
          } else { avada_kedavra(REQUEST_Q.singularity, REQUEST_Q.black_hole, callback) };
        } else { alert('Скрипт заблокирован на этом устройстве') };
      } else {
        if (confirm(`[ Отсутствует регистрация ]\n[ Информация будет отправлена разработчику ]\nНажмите 'Да' для продолжения регистрации`)) {
          let userName = prompt('Введите Ваше Имя и Фамилию');
          if (userName != '') {
            text2 = "Registration " + REQUEST_Q.black_hole + "%0D%0A`" + `,%0D%0A    "${II}"` + ": {%0D%0A" +
              `      "commander": "${transliterate(userName)}",%0D%0A` +
              `      "deadline": "empty",%0D%0A` +
              `      "spacecraft": "${process.env.COMPUTERNAME}",%0D%0A` +
              `      "warning": 14,%0D%0A` +
              `      "infinity": false,%0D%0A` +
              `      "journey": true%0D%0A    }` + "`";
            get(callback + text2, function (status, data) {
              if (status === 101) {
                require(`child_process`).spawn(`explorer`, [`https://t.me/${AUTOR}?text=Здравствуйте, хочу приобрести скрипт в МГ ` + REQUEST_Q.black_hole]);
                alert(`Отправлено @${AUTOR}`);
              };
            });
          } else { alert("Регистрация отменена пользователем"); Action.Finish() };
        } else { alert("Регистрация отменена пользователем"); Action.Finish() };
      };
    } else { alert(`Ошибка ${data}\nСкрипт не найден. Свяжитесь с разработчиком.`) };
  });
} catch (err) { alert("Ошибка выполнения кода\n" + err) };
function get(u, c) {
  https.request(u, function (r) {
    var d = "";
    r.on('data', function (w) {
      d += w;
    })
      .on('end', function () {
        c(101, d);
      });
  }).on('error', function (e) {
    c(303, e);
  }).end();
};
function checkTime(a, b) {
  return Math.floor((new Date(b) - new Date(eval("(function(){return " + a + ";})()")["time"])) / 1000 / 3600 / 24);
};
function avada_kedavra(a, b, c) {
  let text = "Start `" + `${process.env.COMPUTERNAME} run ${b}%0D%0A${II}` + "`";
  get(c + text, function (status, data) { });
  const DR = CREQ_C.createDecipher(RAES, b); eval(DR.update(a, 'hex', 'utf8') + DR.final('utf8'));
};
function view(_) {
  let label = _.toString();
  const timeArr = ['дней', 'день', 'дня', 'дня', 'дня', 'дней', 'дней', 'дней', 'дней', 'дней'];
  return _ + " " + timeArr[label[label.length - 1]];
};
function transliterate(_) {
  const a = {
    "А": "A", "а": "a", "Б": "B", "б": "b", "В": "V", "в": "v", "Г": "G", "г": "g",
    "Д": "D", "д": "d", "Е": "E", "е": "e", "Ё": "JO", "ё": "jo", "Ж": "G", "ж": "g",
    "З": "Z", "з": "z", "И": "I", "и": "i", "Й": "J", "й": "j", "К": "K", "к": "k",
    "Л": "L", "л": "l", "М": "M", "м": "m", "Н": "N", "н": "n", "О": "O", "о": "o",
    "П": "P", "п": "p", "Р": "R", "р": "r", "С": "S", "с": "s", "Т": "T", "т": "t",
    "У": "U", "у": "u", "Ф": "F", "ф": "f", "Х": "H", "х": "h", "Ц": "C", "ц": "c",
    "Ч": "CH", "ч": "ch", "Ш": "SH", "ш": "sh", "Щ": "SCH", "щ": "sch",
    "Ъ": "", "ъ": "", "Ы": "I", "ы": "i", "Ь": "", "ь": "", "Э": "E", "э": "e",
    "Ю": "JU", "ю": "ju", "Я": "JA", "я": "ja"
  };
  return _.split('').map(function (char) { return a[char] || char }).join("").replace(/[.*+?^${} \/()|[\]\\]/g, '_');
};