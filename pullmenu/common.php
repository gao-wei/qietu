<?php
function getParentId($id)
{
	global $db;
	if(isset($id))
	{
		$sql="select parentId from ".TB_PREFIX."menu where id=$id limit 1";
		$parentId=$db->get_var($sql);
		return $parentId==0?$id:$parentId;
	}
	else
	{
		return $id;
	}
}
function main_menu($str='<li>||</li>',$select_str='<li class="selected">||</li>',$span_style='')
{
	global $db,$params,$menu_arr;
	$menu = $db->get_results("select * from ".TB_PREFIX."menu where deep = 0 and isHidden=0 order by ordering");
	if(!empty($str))
	{
		$strarr= explode('||',$str);
		if(empty($select_str))
		$select_str=$str;
		$select_strarr = explode('||',$select_str);
	}
	if($menu)
	{
		foreach ($menu as $o)
		{
			if(URLREWRITE)
			{
				if(empty($span_style))
				{
					if($o->isExternalLinks=='0')
					{
						if($params['id']==$o->id || $menu_arr['parentId']==$o->id)
						echo $select_strarr[0].'<a href="/'.$o->menuName.'/">'.$o->title."</a>".$select_strarr[1];
						else
						echo $strarr[0].'<a href="/'.$o->menuName.'/">'.$o->title."</a>".$strarr[1];
					}
					elseif($o->isExternalLinks=='1')
					{
						echo $strarr[0].'<a target="_blank" href="'.$o->redirectUrl.'">'.$o->title."</a>".$strarr[1];
					}
				}
				else
				{
					if($o->isExternalLinks=='0')
					{
						if($params['id']==$o->id || $menu_arr['parentId']==$o->id)
						echo $select_strarr[0].'<a href="/'.$o->menuName.'/">'.$span_style.$o->title."</span></a>".$select_strarr[1];
						else
						echo $strarr[0].'<a href="/'.$o->menuName.'/">'.$span_style.$o->title."</span></a>".$strarr[1];
					}
					elseif($o->isExternalLinks=='1')
					{
						echo $strarr[0].'<a target="_blank" href="'.$o->redirectUrl.'">'.$span_style.$o->title."</span></a>".$strarr[1];
					}
				}
				
			}
			else
			{
				if(empty($span_style))
				{
					if($o->isExternalLinks=='0')
					{
						if($params['id']==$o->id || $menu_arr['parentId']==$o->id)
						echo $select_strarr[0].'<a href="./?p='.$o->id.'">'.$o->title."</a>".$select_strarr[1];
						else
						echo $strarr[0].'<a href="./?p='.$o->id.'">'.$o->title."</a>".$strarr[1];
					}
					elseif($o->isExternalLinks=='1')
					{
						echo $strarr[0].'<a target="_blank" href="'.$o->redirectUrl.'">'.$o->title."</a>".$strarr[1];
					}
				}
				else
				{
					if($o->isExternalLinks=='0')
					{
						if($params['id']==$o->id || $menu_arr['parentId']==$o->id)
						echo $select_strarr[0].'<a href="./?p='.$o->id.'">'.$span_style.$o->title."</span></a>".$select_strarr[1];
						else
						echo $strarr[0].'<a href="./?p='.$o->id.'">'.$span_style.$o->title."</span></a>".$strarr[1];
					}
					elseif($o->isExternalLinks=='1')
					{
						echo $strarr[0].'<a target="_blank" href="'.$o->redirectUrl.'">'.$span_style.$o->title."</span></a>".$strarr[1];
					}
				}
			}
		}
	}
	else
	echo 'No channel';
}
function sub_menu($str='<li>||</li>',$select_str='<li class="selected">||</li>',$span_style='')
{
	global $db,$params,$menu_arr;
	$pid = $menu_arr['parentId']==0?$params['id']:$menu_arr['parentId'];
	if(!empty($str))
	{
		$strarr= explode('||',$str);
		if(empty($select_str))
		$select_str=$str;
		$select_strarr = explode('||',$select_str);
	}
	if(function_exists(ex_sub_menu))
	{
		ex_sub_menu($strarr,$select_strarr,$params['id'],$params['cid'],$span_style='');
	}
	if(($menu_arr['deep'] ==0 && $menu_arr['type'] == 'product') || ($menu_arr['deep'] ==0 && $menu_arr['type'] != 'product') || ($menu_arr['deep'] !=0 && $menu_arr['type'] != 'product'))
	{
		$menu = $db->get_results("select * from ".TB_PREFIX."menu where deep = 1 and isHidden=0 and parentId = $pid order by ordering");
		if($menu)
		{
			foreach ($menu as $o)
			{
				if(URLREWRITE)
				{
					if(empty($span_style))
					{
						if($o->isExternalLinks=='0')
						{
							if($params['id']==$o->id || $menu_arr['parentId']==$o->id)
							echo $select_strarr[0].'<a href="/'.$o->menuName.'/">'.$o->title."</a>".$select_strarr[1];
							else
							echo $strarr[0].'<a href="/'.$o->menuName.'/">'.$o->title."</a>".$strarr[1];
						}
						elseif($o->isExternalLinks=='1')
						{
							echo $strarr[0].'<a target="_blank" href="'.$o->redirectUrl.'">'.$o->title."</a>".$strarr[1];
						}
					}
					else
					{
						if($o->isExternalLinks=='0')
						{
							if($params['id']==$o->id || $menu_arr['parentId']==$o->id)
							echo $select_strarr[0].'<a href="/'.$o->menuName.'/">'.$span_style.$o->title."</span></a>".$select_strarr[1];
							else
							echo $strarr[0].'<a href="/'.$o->menuName.'/">'.$span_style.$o->title."</span></a>".$strarr[1];
						}
						elseif($o->isExternalLinks=='1')
						{
							echo $strarr[0].'<a target="_blank" href="'.$o->redirectUrl.'">'.$span_style.$o->title."</span></a>".$strarr[1];
						}
					}
				}
				else
				{
					if(empty($span_style))
					{
						if($o->isExternalLinks=='0')
						{
							if($params['id']==$o->id || $menu_arr['parentId']==$o->id)
							echo $select_strarr[0].'<a href="./?p='.$o->id.'">'.$o->title."</a>".$select_strarr[1];
							else
							echo $strarr[0].'<a href="./?p='.$o->id.'">'.$o->title."</a>".$strarr[1];
						}
						elseif($o->isExternalLinks=='1')
						{
							echo $strarr[0].'<a target="_blank" href="'.$o->redirectUrl.'">'.$o->title."</a>".$strarr[1];
						}
					}
					else
					{
						if($o->isExternalLinks=='0')
						{
							if($params['id']==$o->id || $menu_arr['parentId']==$o->id)
							echo $select_strarr[0].'<a href="./?p='.$o->id.'">'.$span_style.$o->title."</span></a>".$select_strarr[1];
							else
							echo $strarr[0].'<a href="./?p='.$o->id.'">'.$span_style.$o->title."</span></a>".$strarr[1];
						}
						elseif($o->isExternalLinks=='1')
						{
							echo $strarr[0].'<a target="_blank" href="'.$o->redirectUrl.'">'.$span_style.$o->title."</span></a>".$strarr[1];
						}
					}
				}
			}
		}
	}
}
function call_sub_menu($smId,$str='<li>||</li>',$select_str='<li class="selected">||</li>',$span_style='')
{
	global $db,$params,$menu_arr;
	if(!empty($str))
	{
		$strarr= explode('||',$str);
		if(empty($select_str))
		$select_str=$str;
		$select_strarr = explode('||',$select_str);
	}
	$pid = getParentId($params['id']);
	if($smId != $pid)
	{
		$tempMenu =get_model_type(intval($smId));
		if($tempMenu['type'] == 'product')
		{
			global $pfileName;
			$pfileName = $tempMenu['menuName'];
			require_once(ABSPATH.'/inc/class.categorytree.php');
			class proTree extends contentCategoryTree{};
			$proTree = new proTree($smId,$strarr,$select_strarr,$params['cid']);
		}
		else
		{
			$menu = $db->get_results("select * from ".TB_PREFIX."menu where deep = 1 and isHidden=0 and parentId = $smId order by ordering");
			if($menu)
			{
				foreach ($menu as $o)
				{
					if(URLREWRITE)
					{
						if(empty($span_style))
						{
							if($o->isExternalLinks=='0')
							{
								if($params['id']==$o->id)
								echo $select_strarr[0].'<a href="/'.$o->menuName.'/">'.$o->title."</a>".$select_strarr[1];
								else
								echo $strarr[0].'<a href="/'.$o->menuName.'/">'.$o->title."</a>".$strarr[1];
							}
							elseif($o->isExternalLinks=='1')
							{
								echo $strarr[0].'<a target="_blank" href="'.$o->redirectUrl.'">'.$o->title."</a>".$strarr[1];
							}
						}
						else
						{
							if($o->isExternalLinks=='0')
							{
								if($params['id']==$o->id)
								echo $select_strarr[0].'<a href="/'.$o->menuName.'/">'.$span_style.$o->title."</span></a>".$select_strarr[1];
								else
								echo $strarr[0].'<a href="/'.$o->menuName.'/">'.$span_style.$o->title."</span></a>".$strarr[1];
							}
							elseif($o->isExternalLinks=='1')
							{
								echo $strarr[0].'<a target="_blank" href="'.$o->redirectUrl.'">'.$o->title."</a>".$strarr[1];
							}
						}
					}
					else
					{
						if(empty($span_style))
						{
							if($o->isExternalLinks=='0')
							{
								if($params['id']==$o->id)
								echo $select_strarr[0].'<a href="/?p='.$o->id.'">'.$o->title."</a>".$select_strarr[1];
								else
								echo $strarr[0].'<a href="/?p='.$o->id.'">'.$o->title."</a>".$strarr[1];
							}
							elseif($o->isExternalLinks=='1')
							{
								echo $strarr[0].'<a target="_blank" href="'.$o->redirectUrl.'">'.$o->title."</a>".$strarr[1];
							}
						}
						else
						{
							if($o->isExternalLinks=='0')
							{
								if($params['id']==$o->id)
								echo $select_strarr[0].'<a href="/?p='.$o->id.'">'.$span_style.$o->title."</span></a>".$select_strarr[1];
								else
								echo $strarr[0].'<a href="/?p='.$o->id.'">'.$span_style.$o->title."</span></a>".$strarr[1];
							}
							elseif($o->isExternalLinks=='1')
							{
								echo $strarr[0].'<a target="_blank" href="'.$o->redirectUrl.'">'.$o->title."</a>".$strarr[1];
							}
						}
					}
				}
			}
		}
	}
}
function isComments()
{
	global $params,$db;
	
	$part_path = ABSPATH.'/skins/'.STYLENAME.'/parts/comment_index.php';
	$content_part_path=ABSPATH.'/content/comment/parts_index.php';
	
	$sql = "select isComment from ".TB_PREFIX."menu where id=".$params['id'];
	$isComment = $db->get_var($sql);
	if(($isComment == '1' && $params['action'] == 'view') || ($isComment == '1' && $params['model'] == 'article'))
	{
		if(file_exists($part_path))
		require($part_path);
		else 
		require($content_part_path);
	}
}
function get_location($str='>>')
{
	global $db,$params,$menu_arr;
	if(!empty($menu_arr['id']))
	{
		if(URLREWRITE)
		{
			$temp_str 	= '<a href="/'.get_root_path().'">首页</a>';
			if($menu_arr['deep']=='0')
			{
				$temp_str   .= $str.'<a href="/'.$menu_arr['menuName'].'/">'.$menu_arr['title'].'</a>';//一级栏目
			}
			if($menu_arr['deep']=='1')
			{
				$tempParentId=$menu_arr['parentId'];
				$menu 		= $db->get_row("select * from ".TB_PREFIX."menu where deep = 0 and id=$tempParentId order by ordering");
				$temp_str   .= $str.'<a href="/'.$menu->menuName.'/">'.$menu->title.'</a>';//一级栏目
				$temp_str   .= $str.'<a href="/'.$menu_arr['menuName'].'/">'.$menu_arr['title'].'</a>';//二级栏目
			}
			if($menu_arr['deep']=='2')
			{
				$tempParentId=$menu_arr['parentId'];
				$menusub 		= $db->get_row("select * from ".TB_PREFIX."menu where deep = 1 and id=$tempParentId order by ordering");
				$pid=getParentId($menusub->id);
				$menu 		= $db->get_row("select * from ".TB_PREFIX."menu where deep = 0 and id=$pid order by ordering");
				$temp_str.= $str.'<a href="/'.$menu->menuName.'/">'.$menu->title.'</a>';//一级栏目
				$temp_str.= $str.'<a href="/'.$menusub->menuName.'/">'.$menusub->title.'</a>';//二级栏目
				$temp_str.= $str.'<a href="/'.$menu_arr['menuName'].'/">'.$menu_arr['title'].'</a>';//三级栏目
			}
		}
		else
		{
			$temp_str 	= '<a href="./">首页</a>';
			if($menu_arr['deep']=='0')
			{
				$temp_str   .= $str.'<a href="./?p='.$menu_arr['id'].'">'.$menu_arr['title'].'</a>';//一级栏目
			}
			if($menu_arr['deep']=='1')
			{
				$tempParentId=$menu_arr['parentId'];
				$menu 		= $db->get_row("select * from ".TB_PREFIX."menu where deep = 0 and id=$tempParentId order by ordering");
				$temp_str   .= $str.'<a href="./?p='.$menu->id.'">'.$menu->title.'</a>';//一级栏目
				$temp_str   .= $str.'<a href="./?p='.$menu_arr['id'].'">'.$menu_arr['title'].'</a>';//二级栏目
			}
			if($menu_arr['deep']=='2')
			{
				$tempParentId=$menu_arr['parentId'];
				$menusub 		= $db->get_row("select * from ".TB_PREFIX."menu where deep = 1 and id=$tempParentId order by ordering");
				$pid=getParentId($menusub->id);
				$menu 		= $db->get_row("select * from ".TB_PREFIX."menu where deep = 0 and id=$pid order by ordering");
				$temp_str.= $str.'<a href="./?p='.$menu->id.'">'.$menu->title.'</a>';//一级栏目
				$temp_str.= $str.'<a href="./?p='.$menusub->id.'">'.$menusub->title.'</a>';//二级栏目
				$temp_str.= $str.'<a href="./?p='.$menu_arr['id'].'">'.$menu_arr['title'].'</a>';//三级栏目
			}
		}
	}
	return $temp_str;
}
function get_subMenu_name()
{
	global $db,$params;
	$sql = "SELECT title FROM ".TB_PREFIX."menu WHERE id=".$params['id'];
	if(URLREWRITE)
	return '<a href="/">'.$db->get_var($sql).'</a>';
	else

	return '<a href="/?p='.$params['id'].'">'.$db->get_var($sql).'</a>';
}
function getIdByFile($file)
{
	global $db;
	$sql="select id from ".TB_PREFIX."menu where menuName='$file'";
	return $db->get_var($sql);
}
function get_menuName($id)
{
	global $db;
	if($id==0)
	return 'list';
	else
	return $db->get_var("select menuName from ".TB_PREFIX."menu where id=$id");
}
function get_channel_name($id)
{
	global $db;
	if($id)
	{
		$result=(array)$db->get_row("select * from ".TB_PREFIX."menu where id=$id");
		return $result['title'];
	}
	else
	return null;
}
function get_title_name($p,$r)
{
	global $db,$request;
	$p = intval($p);
	$r = intval($r);
	if($p)
	{
		$result=(array)$db->get_row("select * from ".TB_PREFIX."menu where id=$p");
		$type=$result['type'];
	}
	if(intval($r)>0)
	{
		if($type=='list')
		{
			$listTableName = TB_PREFIX.'list_'.getListYear($r);
			$channel=(array)$db->get_row("select * from ".$listTableName." where id=$r");
			return $channel['title'].' '.$result['title'].' '.$result['summary'].' '.SITENAME;
		}
		if($type=='solutions')
		{
			$channel=(array)$db->get_row("select * from ".TB_PREFIX."solutions where id=$r");
			return $channel['title'].' '.$result['title'].' '.SITENAME;
		}
		else if($type=='product'||$type=='productlist')
		{
			$channel=(array)$db->get_row("select * from ".TB_PREFIX."$type where id=$r");
			return $channel['name'].' '.$result['title'].' '.SITENAME;
		}
		else if($type=='picture')
		{
			$channel=(array)$db->get_row("select * from ".TB_PREFIX."$type where id=$r");
			return $channel['title'].' '.$result['title'].' '.SITENAME;
		}
		else if($type=='video')
		{
			$channel=(array)$db->get_row("select * from ".TB_PREFIX."$type where id=$r");
			return $channel['title'].' '.$result['title'].' '.SITENAME;
		}
		else if($type=='jobs')
		{
			$channel=(array)$db->get_row("select * from ".TB_PREFIX."$type where id=$r");
			return $channel['jobName'].' '.$result['title'].' '.SITENAME;
		}
		else if($type=='download')
		{
			$channel=(array)$db->get_row("select * from ".TB_PREFIX."$type where id=$r");
			return $channel['softwareName'].' '.$result['title'].' '.SITENAME;
		}
		else if($type=='shopping')
		{
			$channel=(array)$db->get_row("select * from ".TB_PREFIX."shopping_product where id=$r");
			return $channel['name'].' '.$result['title'].' '.SITENAME;
		}
		else
		{
			$channel=(array)$db->get_row("select * from ".TB_PREFIX."$type where id=$r");
			return $channel['title'].' '.$result['title'].' '.SITENAME;
		}
	}
	else
	{
		if($p!='')
		{
			return $result['title'].' '.SITENAME;
		}
		else
			return SITENAME;
	}
}
function get_description_name($p,$r)
{
	global $db,$request;
	$p = intval($p);
	$r = intval($r);
	if($p)
	{
		$result=(array)$db->get_row("select * from ".TB_PREFIX."menu where id=$p");
		$type=$result['type'];
	}
	if(intval($r)>0)
	{
		if($type=='list')
		{
			$listTableName = TB_PREFIX.'list_'.getListYear($r);
			$listContentTableName = TB_PREFIX.'list_content_'.getListYear($r);
			$channel=(array)$db->get_row("select * from ".$listTableName." as a,".$listContentTableName." as b where a.guid=b.guid and a.id=$r");
			if(!empty($channel['tags']))
			return $channel['tags'].' '.htmlspecialchars(cnSubstr(trim(strip_tags($channel['content'])),0,150));
			elseif(!empty($channel['summary']))
			return htmlspecialchars($channel['summary']);
			elseif(!empty($channel['content']))
			return htmlspecialchars(cnSubstr(trim(strip_tags($channel['content'])),0,300));
			else
			return htmlspecialchars($channel['title'].' '.$result['title'].' '.$result['summary'].' '.SITENAME);
		}
		if($type=='solutions')
		{
			$channel=(array)$db->get_row("select * from ".TB_PREFIX."solutions as a,".TB_PREFIX."solutions_content as b where a.guid=b.guid and a.id=$r");
			if(!empty($channel['tags']))
			return htmlspecialchars($channel['tags'].' '.cnSubstr(trim(strip_tags($channel['content'])),0,150));
			elseif(!empty($channel['content']))
			return htmlspecialchars(cnSubstr(trim(strip_tags($channel['content'])),0,300));
			else
			return htmlspecialchars($channel['title'].' '.$result['title'].' '.$result['summary'].' '.SITENAME);
		}
		else if($type=='product'||$type=='productlist')
		{
			$channel=(array)$db->get_row("select * from ".TB_PREFIX."$type where id=$r");
			if(!empty($channel['summary']))
			return htmlspecialchars($channel['summary']);
			elseif(!empty($channel['content']))
			return htmlspecialchars(cnSubstr(trim(strip_tags($channel['content'])),0,300));
			else
			return htmlspecialchars($channel['name'].' '.$result['title'].' '.$result['summary'].' '.SITENAME);
		}
		else if($type=='picture')
		{
			$channel=(array)$db->get_row("select * from ".TB_PREFIX."$type where id=$r");
			if(!empty($channel['summary']))
			return htmlspecialchars(cnSubstr(trim(strip_tags($channel['summary'])),0,300));
			elseif(!empty($channel['description']))
			return htmlspecialchars(cnSubstr(trim(strip_tags($channel['description'])),0,300));
			else
			return htmlspecialchars($channel['title'].' '.$result['title'].' '.$result['summary'].' '.SITENAME);
		}
		else if($type=='video')
		{
			$channel=(array)$db->get_row("select * from ".TB_PREFIX."$type where id=$r");
			if(!empty($channel['summary']))
			return htmlspecialchars($channel['summary']);
			elseif(!empty($channel['description']))
			return htmlspecialchars(cnSubstr(trim(strip_tags($channel['description'])),0,300));
			else
			return htmlspecialchars($channel['title'].' '.$result['title'].' '.$result['summary'].' '.SITENAME);
		}
		else if($type=='jobs')
		{
			$channel=(array)$db->get_row("select * from ".TB_PREFIX."$type where id=$r");
			if(!empty($channel['jobName']) || !empty($channel['summary']))
			return htmlspecialchars($channel['jobName'].','.cnSubstr(trim(strip_tags($channel['summary'])),0,300));
			else
			return htmlspecialchars($channel['jobName'].' '.$result['title'].' '.$result['summary'].' '.SITENAME);
		}
		else if($type=='download')
		{
			$channel=(array)$db->get_row("select * from ".TB_PREFIX."$type where id=$r");
			if(!empty($channel['softwareName']) || !empty($channel['introduce']))
			return htmlspecialchars($channel['softwareName'].','.cnSubstr(trim(strip_tags($channel['introduce'])),0,300));
			else
			return htmlspecialchars($channel['softwareName'].' '.$result['title'].' '.$result['summary'].' '.SITENAME);
		}
		else if($type=='shopping')
		{
			$channel=(array)$db->get_row("select * from ".TB_PREFIX."shopping_product where id=$r");
			if(!empty($channel['name']) || !empty($channel['summary']))
			return htmlspecialchars($channel['name'].','.cnSubstr(trim(strip_tags($channel['summary'])),0,300));
			else
			return htmlspecialchars($channel['name'].' '.$result['title'].' '.$result['summary'].' '.SITENAME);
		}
		else
		{
			$channel=(array)$db->get_row("select * from ".TB_PREFIX."$type where id=$r");
			if(!empty($channel['tags']))
			return htmlspecialchars($channel['tags']);
			elseif(!empty($channel['summary']))
			return htmlspecialchars($channel['summary']);
			elseif(!empty($channel['content']))
			return htmlspecialchars(cnSubstr(trim(strip_tags($channel['content'])),0,300));
			else
			return htmlspecialchars($channel['title'].' '.$result['title'].' '.$result['summary'].' '.SITENAME);
		}
	}
	else
	{
		if($type=='article')
		{
			if(intval($request['mdtp'])>0)
			$request['mdtp']=intval($request['mdtp'])-1;
			else
			$request['mdtp']=intval($request['mdtp']);
			
			$channel=(array)$db->get_row("select * from ".TB_PREFIX."$type where channelId=$p and pageId=".$request['mdtp']);
			if(!empty($channel['summary']))
			return htmlspecialchars($channel['summary']);
			elseif(!empty($channel['content']))
			return htmlspecialchars(cnSubstr(trim(strip_tags($channel['content'])),0,300));
			else
			return htmlspecialchars($channel['name'].' '.$result['summary'].' '.SITENAME);
		}
		else if($type=='jobs')
		{
			$channel=(array)$db->get_results("select * from ".TB_PREFIX."$type where channelId=$p order by id desc limit 100");
			if(count($channel)>0)
			{
				$tempJobName=null;
				$tempJobName='招聘 招募 ';
				foreach($channel as $o)
				{
					$tempJobName = $tempJobName.$o->jobName.' ';
				}
				return htmlspecialchars($tempJobName.' job jobs Recruitment');
			}			
			else
			{
				return htmlspecialchars($result['title'].' '.$result['summary'].' '.SITENAME);
			}
		}
		else if($type=='guestbook')
		{
			$channel=(array)$db->get_results("select * from ".TB_PREFIX."$type where channelId=$p order by id desc limit 3");
			if(count($channel)>0)
			{
				$tempJobName=null;
				$tempJobName='用户留言/反馈/回馈 ';
				foreach($channel as $o)
				{
					$tempJobName = $tempJobName.$o->name.' '.trim(strip_tags($o->content)).' '.trim(strip_tags($o->content1)).' ';
				}
				return htmlspecialchars($tempJobName.' guestbook bbs');
			}			
			else
			{
				return htmlspecialchars($result['title'].' '.$result['summary'].' '.SITENAME);
			}
		}
		else
			return htmlspecialchars($result['title'].' '.$result['summary'].' '.SITENAME);
	}
}

 function pull_down_menu($select_style='',$li_style='',$a_style='',$ul_style='')
{
   global $db,$params,$request;  //自己生成导航下拉菜单

        $menuRoot = $db->get_results("select * from ".TB_PREFIX."menu  where deep=0 and isHidden=0 order by ordering asc"); //生成所有菜单根节点数组，按deep parentid获取
        if(!empty($menuRoot)){
        foreach($menuRoot as $o)
        {
		if($o->isExternalLinks=='0')
			{
				if($params['id']==$o->id)
				 echo '<li '.$select_style.'><a href="./?p='.$o->id.'" target="_self">'.$o->title.'</a>';
				else
				 echo '<li ><a href="./?p='.$o->id.'" target="_self">'.$o->title.'</a>';
			}
		elseif($o->isExternalLinks=='1')
			{
				 echo '<li ><a href="./?p='.$o->id.'" target="_self">'.$o->title.'</a>';
			}
		
                if($o->type=="product"){//产品频道特殊，子分类在不同的表格查找
                        $submenuRoot=$db->get_results("select * from ".TB_PREFIX."product_category where channelId =".$o->id." and deep=0 order by ordering asc"); //获取产品子栏目节点
                        if(!empty($submenuRoot)){
                        echo '<ul '.$ul_style.'>';
                                foreach($submenuRoot as $osub)
                                {
                                echo '<li '.$li_style.'><a href="./?p='.$o->id.'&c='.$osub->id.'" '.$a_style.'>'.$osub->title.'</a></li>';
                                }
                                echo '</ul>';
                        }//有产品子节点内容
                }else{
                        $submenuRoot=$db->get_results("select * from ".TB_PREFIX."menu  where parentid=".$o->id." and isHidden=0 order by ordering asc"); //获取子栏目节点
                        if(!empty($submenuRoot)){
                        echo '<ul '.$ul_style.'>';
                                foreach($submenuRoot as $osub)
                                {
                                echo '<li '.$li_style.'><a href="./?p='.$osub->id.'" '.$a_style.'>'.$osub->title.'</a></li>';
                                }
                                echo '</ul>';
                        }//有子节点内容
                 }
                        echo '</li>';
        }
        }//有可输出内容
  }
?>