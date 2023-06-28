<?php
$curl = curl_init();
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($curl, CURLOPT_AUTOREFERER, true);
curl_setopt($curl, CURLOPT_URL, 'https://note.com/diawel/rss');
$xml = curl_exec($curl);

$rss = simplexml_load_string($xml);
$articles = [];
foreach ($rss->channel->item as $item) {
  $article = [
    'title' => (string) $item->title,
    'description' => (string) $item->description,
    'link' => (string) $item->link
  ];
  $thumbnail = $item->children("media", true);
  if ($thumbnail)
    $article['thumbnail'] = (string) $thumbnail;
  $articles[] = $article;
}

header('Content-Type: application/json; charset=utf-8');
echo json_encode($articles);