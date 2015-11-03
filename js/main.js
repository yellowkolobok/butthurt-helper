function takeBugurt(){
                var rawBugurt = document.getElementById('bugurt').value;
                
                if(rawBugurt.indexOf('[B]' && '[/B]') >-1 ){
                    transformBugurt = rawBugurt.toUpperCase();
                    document.getElementById('bugurt').value = transformBugurt;
                }
                else{
                    transformBugurt = "[B]" + rawBugurt.toUpperCase() + "[/B]";
                    document.getElementById('bugurt').value = transformBugurt;
                }
                    
            };

            document.getElementById('go').onclick = takeBugurt;

;;



var description = [
  "img/1.png", "img/2.png", "img/3.png", "img/8.png", "img/13.png", "img/14.png", "img/15.png", "img/16.png", "img/17.png", "img/18.png", "img/19.png", "img/21.png", "img/25.png", "img/30.png", "img/41.png", "img/42.png", "img/44.png", "img/47.png", "img/50.png", "img/60.png", "img/61.png", "img/67.png", "img/75.png", "img/77.png", "img/82.png", "img/83.png", "img/85.png", "img/86.png", "img/87.png", "img/90.png", "img/93.png", "img/97.png", "img/98.png", "img/111.png", "img/112.png", "img/116.png", "img/117.png", "img/122.png", "img/123.png", "img/130.png", "img/131.png", "img/139.png", "img/141.png", "img/153.png", "img/154.png", "img/155.png", "img/156.png", "img/161.png", "img/169.png", "img/170.png", "img/177.png", "img/182.png", "img/186.png", "img/194.png", "img/195.png", "img/196.png", "img/197.png", "img/202.png", "img/208.png", "img/212.png", "img/215.png", "img/216.png", "img/220.png", "img/221.png", "img/230.png", "img/235.png", "img/238.png", "img/245.png", "img/247.png", "img/248.png", "img/250.png", "img/259.png", "img/261.png", "img/264.png", "img/265.png", "img/268.png", "img/271.png", "img/274.png", "img/276.png", "img/277.png", "img/278.png", "img/280.png", "img/281.png", "img/283.png", "img/285.png", "img/290.png", "img/298.png", "img/303.png", "img/304.png", "img/312.png", "img/313.png", "img/316.png", "img/317.png", "img/319.png", "img/320.png", "img/327.png", "img/328.png", "img/330.png", "img/331.png", "img/332.png", "img/333.png", "img/334.png", "img/345.png", "img/352.png", "img/356.png", "img/360.png", "img/369.png", "img/370.png", "img/373.png", "img/376.png", "img/380.png", "img/383.png", "img/384.png", "img/388.png", "img/397.png", "img/398.png", "img/399.png", "img/403.png", "img/410.png", "img/413.png", "img/414.png", "img/416.png", "img/417.png", "img/418.png", "img/421.png", "img/424.png", "img/435.png", "img/437.png", "img/445.png", "img/455.png", "img/458.png", "img/464.png", "img/465.png", "img/466.png", "img/468.png", "img/478.png", "img/480.png", "img/483.png", "img/487.png", "img/491.png", "img/498.png", "img/501.png", "img/508.png", "img/510.png", "img/512.png", "img/517.png", "img/520.png", "img/523.png", "img/524.png", "img/529.png", "img/536.png", "img/542.png", "img/552.png", "img/553.png", "img/559.png", "img/560.png", "img/562.png", "img/572.png", "img/573.png", "img/574.png", "img/583.png", "img/586.png", "img/591.png", "img/595.png", "img/596.png", "img/597.png", "img/624.png", "img/625.png", "img/626.png", "img/635.png", "img/636.png", "img/640.png", "img/641.png", "img/644.png", "img/651.png", "img/652.png", "img/656.png", "img/674.png", "img/676.png", "img/677.png", "img/678.png", "img/681.png", "img/682.png", "img/685.png", "img/686.png", "img/688.png", "img/693.png", "img/695.png", "img/698.png", "img/699.png", "img/700.png", "img/701.png", "img/706.png", "img/707.png", "img/708.png", "img/710.png", "img/724.png", "img/741.png", "img/743.png", "img/744.png", "img/747.png", "img/754.png", "img/757.png", "img/758.png", "img/759.png", "img/760.png", "img/761.png", "img/766.png", "img/776.png", "img/779.png", "img/783.png", "img/784.png", "img/790.png", "img/791.png", "img/796.png", "img/806.png", "img/807.png", "img/828.png", "img/855.png", "img/864.png", "img/877.png", "img/879.png", "img/881.png", "img/882.png", "img/884.png", "img/886.png", "img/889.png", "img/892.png", "img/894.png", "img/898.png", "img/899.png", "img/903.png", "img/905.png", "img/906.png", "img/917.png", "img/932.png", "img/944.png", "img/946.png", "img/955.png", "img/957.png", "img/961.png", "img/965.png", "img/968.png", "img/972.png", "img/973.png", "img/983.png", "img/991.png", "img/992.png", "img/994.png", "img/1001.png", "img/1008.png", "img/1011.png", "img/1012.png", "img/1013.png", "img/1016.png", "img/1019.png", "img/1021.png", "img/1028.png", "img/1031.png", "img/1032.png", "img/1035.png", "img/1043.png", "img/1046.png", "img/1049.png", "img/1054.png", "img/1062.png", "img/1064.png", "img/1065.png", "img/1086.png", "img/1093.png", "img/1094.png", "img/1099.png", "img/1104.png", "img/1108.png", "img/1112.png", "img/1113.png", "img/1115.png", "img/1116.png", "img/1117.png", "img/1118.png", "img/1122.png", "img/1123.png", "img/1127.png", "img/1128.png", "img/1137.png", "img/1141.png", "img/1142.png", "img/1143.png", "img/1144.png", "img/1146.png", "img/1148.png", "img/1150.png", "img/1153.png", "img/1154.png", "img/1158.png", "img/1163.png", "img/1165.png", "img/1170.png", "img/1171.png", "img/1172.png", "img/1177.png", "img/1182.png", "img/1195.png", "img/1196.png", "img/1204.png", "img/1213.png", "img/1214.png", "img/1219.png", "img/1222.png", "img/1229.png", "img/1234.png", "img/1241.png", "img/1248.png", "img/1255.png", "img/1256.png", "img/1266.png", "img/1268.png", "img/1270.png", "img/1271.png", "img/1272.png", "img/1273.png", "img/1274.png", "img/1277.png", "img/1279.png", "img/1280.png", "img/1282.png", "img/1283.png", "img/1285.png", "img/1287.png", "img/1289.png", "img/1293.png", "img/1295.png", "img/1297.png", "img/1299.png", "img/1315.png", "img/1318.png", "img/1326.png", "img/1327.png", "img/1328.png", "img/1330.png", "img/1333.png", "img/1341.png", "img/1345.png", "img/1346.png", "img/1349.png", "img/1350.png", "img/1351.png", "img/1352.png", "img/1354.png", "img/1357.png", "img/1359.png", "img/1360.png", "img/1361.png", "img/1364.png", "img/1365.png", "img/1368.png", "img/1370.png", "img/1372.png", "img/1376.png", "img/1386.png", "img/1388.png", "img/1399.png", "img/1404.png", "img/1405.png", "img/1406.png", "img/1410.png", "img/1415.png", "img/1416.png", "img/1418.png", "img/1423.png", "img/1426.png", "img/1431.png", "img/1433.png", "img/1443.png", "img/1445.png", "img/1446.png", "img/1452.png", "img/1453.png", "img/1454.png", "img/1456.png", "img/1459.png", "img/1460.png", "img/1461.png", "img/1463.png", "img/1469.png", "img/1470.png", "img/1483.png", "img/1489.png", "img/1499.png", "img/1507.png", "img/1508.png", "img/1512.png", "img/1513.png", "img/1517.png", "img/1519.png", "img/1550.png", "img/1552.png", "img/1562.png", "img/1563.png", "img/1571.png", "img/1572.png", "img/1586.png", "img/1593.png", "img/1594.png", "img/1604.png", "img/1623.png", "img/1628.png", "img/1634.png", "img/1638.png", "img/1645.png", "img/1649.png", "img/1654.png", "img/1656.png", "img/1663.png", "img/1665.png", "img/1666.png", "img/1674.png", "img/1676.png", "img/1680.png", "img/1690.png", "img/1694.png", "img/1695.png", "img/1703.png", "img/1706.png", "img/1730.png", "img/1765.png", "img/1772.png", "img/1773.png", "img/1774.png", "img/1796.png", "img/1801.png", "img/1804.png", "img/1806.png", "img/1827.png", "img/1843.png", "img/1853.png", "img/1856.png", "img/1866.png", "img/1868.png", "img/1869.png", "img/1870.png", "img/1871.png", "img/1878.png", "img/1879.png", "img/1887.png", "img/1889.png", "img/1895.png", "img/1900.png", "img/1903.png", "img/1923.png", "img/1928.png", "img/1943.png", "img/1955.png", "img/1958.png", "img/1961.png", "img/1962.png", "img/1965.png", "img/1967.png", "img/1968.png", "img/1984.png", "img/1987.png", "img/2010.png", "img/2012.png", "img/2014.png", "img/2015.png", "img/2016.png", "img/2020.png", "img/2021.png", "img/2027.png", "img/2028.png", "img/2029.png", "img/2030.png", "img/2039.png", "img/2040.png", "img/2041.png", "img/2042.png", "img/2043.png", "img/2044.png", "img/2045.png"
];

var size = description.length
var x = Math.floor(size*Math.random());
document.getElementById('image1').src=description[x];
document.getElementById('link1').value = "http://yellowkolobok.github.io/butthurt-helper" + "/" + description[x];
var x = Math.floor(size*Math.random());
document.getElementById('image2').src=description[x];
document.getElementById('link2').value = "http://yellowkolobok.github.io/butthurt-helper" + "/" + description[x];
var x = Math.floor(size*Math.random());
document.getElementById('image3').src=description[x];
document.getElementById('link3').value = "http://yellowkolobok.github.io/butthurt-helper" + "/" + description[x];
var x = Math.floor(size*Math.random());
document.getElementById('image4').src=description[x];
document.getElementById('link4').value = "http://yellowkolobok.github.io/butthurt-helper" + "/" + description[x];

var copyTextareaBtn = document.querySelector('.js-textareacopybtn');

copyTextareaBtn.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('.js-copytextarea');
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'Скопировано' : 'Чет не получилось :(';
    console.log('Сообщение скопировано:' + msg);
  } catch (err) {
    console.log('Не скопировалось');
  }
});
