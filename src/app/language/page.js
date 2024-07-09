"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NavbarIn from "../components/NavbarIn";
function LanguageSelection() {
	const [isOpen, setIsOpen] = useState(false);
	const [difficulty, setDifficulty] = useState("");
	const [language, setLanguage] = useState("");
	const [searchTerm, setSearchTerm] = useState("");
	const [flags, setFlags] = useState([]);
	const [step, setStep] = useState(1); // 1 for language selection, 2 for difficulty selection
	const router = useRouter();

	const languages = [
		
		"English",
	
		
	];

	const flagUrls = [
		"ac.svg",
		"ad.svg",
		"ae.svg",
		"af-emirate.svg",
		"af.svg",
		"ag.svg",
		"ai.svg",
		"al.svg",
		"am.svg",
		"an.svg",
		"ao.svg",
		"aq-true_south.svg",
		"aq.svg",
		"ar.svg",
		"as.svg",
		"at.svg",
		"au-aboriginal.svg",
		"au-act.svg",
		"au-nsw.svg",
		"au-nt.svg",
		"au-qld.svg",
		"au-sa.svg",
		"au-tas.svg",
		"au-torres_strait_islands.svg",
		"au-vic.svg",
		"au-wa.svg",
		"au.svg",
		"aw.svg",
		"ax.svg",
		"az.svg",
		"ba.svg",
		"bb.svg",
		"bd.svg",
		"be.svg",
		"bf.svg",
		"bg.svg",
		"bh.svg",
		"bi.svg",
		"bj.svg",
		"bl.svg",
		"bm.svg",
		"bn.svg",
		"bo.svg",
		"bq-bo.svg",
		"bq-sa.svg",
		"bq-se.svg",
		"bq.svg",
		"br.svg",
		"bs.svg",
		"bt.svg",
		"bv.svg",
		"bw.svg",
		"by.svg",
		"bz.svg",
		"ca-bc.svg",
		"ca-qc.svg",
		"ca.svg",
		"cc.svg",
		"cd.svg",
		"cf.svg",
		"cg.svg",
		"ch-gr.svg",
		"ch.svg",
		"ci.svg",
		"ck.svg",
		"cl.svg",
		"cm.svg",
		"cn-hk.svg",
		"cn-xj.svg",
		"cn.svg",
		"co.svg",
		"cp.svg",
		"cq.svg",
		"cr.svg",
		"cu.svg",
		"cv.svg",
		"cw.svg",
		"cx.svg",
		"cy.svg",
		"cz.svg",
		"de.svg",
		"dg.svg",
		"dj.svg",
		"dk.svg",
		"dm.svg",
		"do.svg",
		"dz.svg",
		"ea.svg",
		"east_african_federation.svg",
		"easter_island.svg",
		"ec-w.svg",
		"ec.svg",
		"ee.svg",
		"eg.svg",
		"eh.svg",
		"er.svg",
		"es-ar.svg",
		"es-ce.svg",
		"es-cn.svg",
		"es-ct.svg",
		"es-ga.svg",
		"es-ib.svg",
		"es-ml.svg",
		"es-pv.svg",
		"es-variant.svg",
		"es.svg",
		"et-af.svg",
		"et-am.svg",
		"et-be.svg",
		"et-ga.svg",
		"et-ha.svg",
		"et-or.svg",
		"et-si.svg",
		"et-sn.svg",
		"et-so.svg",
		"et-sw.svg",
		"et-ti.svg",
		"et.svg",
		"eu.svg",
		"european_union.svg",
		"ewe.svg",
		"fi.svg",
		"fj.svg",
		"fk.svg",
		"fm.svg",
		"fo.svg",
		"fr-20r.svg",
		"fr-bre.svg",
		"fr-cp.svg",
		"fr.svg",
		"fx.svg",
		"ga.svg",
		"gb-con.svg",
		"gb-eng.svg",
		"gb-nir.svg",
		"gb-ork.svg",
		"gb-sct.svg",
		"gb-wls.svg",
		"gb.svg",
		"gd.svg",
		"ge-ab.svg",
		"ge.svg",
		"gf.svg",
		"gg.svg",
		"gh.svg",
		"gi.svg",
		"gl.svg",
		"gm.svg",
		"gn.svg",
		"gp.svg",
		"gq.svg",
		"gr.svg",
		"gs.svg",
		"gt.svg",
		"gu.svg",
		"guarani.svg",
		"gw.svg",
		"gy.svg",
		"hausa.svg",
		"hk.svg",
		"hm.svg",
		"hmong.svg",
		"hn.svg",
		"hr.svg",
		"ht.svg",
		"hu.svg",
		"ic.svg",
		"id-jb.svg",
		"id-jt.svg",
		"id.svg",
		"ie.svg",
		"il.svg",
		"im.svg",
		"in-as.svg",
		"in-gj.svg",
		"in-ka.svg",
		"in-mn.svg",
		"in-mz.svg",
		"in-or.svg",
		"in-tg.svg",
		"in-tn.svg",
		"in.svg",
		"io.svg",
		"iq-kr.svg",
		"iq.svg",
		"ir.svg",
		"is.svg",
		"it-21.svg",
		"it-23.svg",
		"it-25.svg",
		"it-32.svg",
		"it-34.svg",
		"it-36.svg",
		"it-42.svg",
		"it-45.svg",
		"it-52.svg",
		"it-55.svg",
		"it-57.svg",
		"it-62.svg",
		"it-65.svg",
		"it-67.svg",
		"it-72.svg",
		"it-75.svg",
		"it-77.svg",
		"it-78.svg",
		"it-82.svg",
		"it-88.svg",
		"it.svg",
		"je.svg",
		"jm.svg",
		"jo.svg",
		"jp.svg",
		"kanuri.svg",
		"ke.svg",
		"kg.svg",
		"kh.svg",
		"ki.svg",
		"kikuyu.svg",
		"km.svg",
		"kn.svg",
		"kongo.svg",
		"kp.svg",
		"kr.svg",
		"kw.svg",
		"ky.svg",
		"kz.svg",
		"la.svg",
		"lb.svg",
		"lc.svg",
		"li.svg",
		"lk.svg",
		"lr.svg",
		"ls.svg",
		"lt.svg",
		"lu.svg",
		"lv.svg",
		"ly.svg",
		"ma.svg",
		"malayali.svg",
		"maori.svg",
		"mc.svg",
		"md.svg",
		"me.svg",
		"mf.svg",
		"mg.svg",
		"mh.svg",
		"mk.svg",
		"ml.svg",
		"mm.svg",
		"mn.svg",
		"mo.svg",
		"mp.svg",
		"mq-old.svg",
		"mq.svg",
		"mr.svg",
		"ms.svg",
		"mt.svg",
		"mu.svg",
		"mv.svg",
		"mw.svg",
		"mx.svg",
		"my.svg",
		"mz.svg",
		"na.svg",
		"nc.svg",
		"ne.svg",
		"nf.svg",
		"ng.svg",
		"ni.svg",
		"nl-fr.svg",
		"nl.svg",
		"no.svg",
		"northern_cyprus.svg",
		"np.svg",
		"nr.svg",
		"nu.svg",
		"nz.svg",
		"occitania.svg",
		"om.svg",
		"otomi.svg",
		"pa.svg",
		"pe.svg",
		"pf.svg",
		"pg.svg",
		"ph.svg",
		"pk-jk.svg",
		"pk-sd.svg",
		"pk.svg",
		"pl.svg",
		"pm.svg",
		"pn.svg",
		"pr.svg",
		"ps.svg",
		"pt-20.svg",
		"pt-30.svg",
		"pt.svg",
		"pw.svg",
		"py.svg",
		"qa.svg",
		"quechua.svg",
		"re.svg",
		"ro.svg",
		"rs.svg",
		"ru-ba.svg",
		"ru-ce.svg",
		"ru-cu.svg",
		"ru-da.svg",
		"ru-dpr.svg",
		"ru-ko.svg",
		"ru-lpr.svg",
		"ru-ta.svg",
		"ru-ud.svg",
		"ru.svg",
		"rw.svg",
		"sa.svg",
		"sami.svg",
		"sb.svg",
		"sc.svg",
		"sd.svg",
		"se.svg",
		"sg.svg",
		"sh-ac.svg",
		"sh-hl.svg",
		"sh-ta.svg",
		"sh.svg",
		"si.svg",
		"sj.svg",
		"sk.svg",
		"sl.svg",
		"sm.svg",
		"sn.svg",
		"so.svg",
		"somaliland.svg",
		"south_ossetia.svg",
		"soviet_union.svg",
		"sr.svg",
		"ss.svg",
		"st.svg",
		"su.svg",
		"sv.svg",
		"sx.svg",
		"sy.svg",
		"sz.svg",
		"ta.svg",
		"tc.svg",
		"td.svg",
		"tf.svg",
		"tg.svg",
		"th.svg",
		"tibet.svg",
		"tj.svg",
		"tk.svg",
		"tl.svg",
		"tm.svg",
		"tn.svg",
		"to.svg",
		"tr.svg",
		"transnistria.svg",
		"tt.svg",
		"tv.svg",
		"tw.svg",
		"tz.svg",
		"ua.svg",
		"ug.svg",
		"uk.svg",
		"um.svg",
		"un.svg",
		"us-ak.svg",
		"us-al.svg",
		"us-ar.svg",
		"us-as.svg",
		"us-az.svg",
		"us-betsy_ross.svg",
		"us-ca.svg",
		"us-co.svg",
		"us-dc.svg",
		"us-fl.svg",
		"us-ga.svg",
		"us-gu.svg",
		"us-hi.svg",
		"us-in.svg",
		"us-md.svg",
		"us-mo.svg",
		"us-mp.svg",
		"us-ms.svg",
		"us-nc.svg",
		"us-nm.svg",
		"us-or.svg",
		"us-pr.svg",
		"us-ri.svg",
		"us-sc.svg",
		"us-tn.svg",
		"us-tx.svg",
		"us-um.svg",
		"us-vi.svg",
		"us-wa.svg",
		"us-wi.svg",
		"us-wy.svg",
		"us.svg",
		"uy.svg",
		"uz.svg",
		"va.svg",
		"vc.svg",
		"ve.svg",
		"vg.svg",
		"vi.svg",
		"vn.svg",
		"vu.svg",
		"wf.svg",
		"wiphala.svg",
		"ws.svg",
		"xk.svg",
		"xx.svg",
		"ye.svg",
		"yorubaland.svg",
		"yt.svg",
		"yu.svg",
		"za.svg",
		"zm.svg",
		"zw.svg",
	];

	const handleLanguageSelect = (language) => {
		setLanguage(language);
		localStorage.setItem("selectedLanguage", language);
		console.log(`Selected language: ${language}`);
		setStep(2); // Move to difficulty selection
	};

	const handleDifficultySelect = (difficulty) => {
		setDifficulty(difficulty);
		localStorage.setItem("selectedDifficulty", difficulty);
		console.log(`Selected difficulty: ${difficulty}`);
	};

	const getConfigId = () => {
		switch (difficulty) {
			case "easy":
				return "4f6cde50-0d72-421e-85c8-ca746076817c";
			case "medium":
				return "cb509718-e9ed-43cb-be32-000ec95d1491";
			case "hard":
				return "d3d371bd-6c69-408b-8a6d-1768033e945e";
			default:
				return "4f6cde50-0d72-421e-85c8-ca746076817c";
		}
	};

	const filteredLanguages = languages.filter((lang) =>
		lang.toLowerCase().includes(searchTerm.toLowerCase())
	);

	useEffect(() => {
		const generateFlag = () => {
			const size = Math.random() * 50 + 30;
			const newFlag = {
				id: Math.random().toString(36).substr(2, 9),
				url: `https://hatscripts.github.io/circle-flags/flags/${
					flagUrls[Math.floor(Math.random() * flagUrls.length)]
				}`,
				size: size,
				top: Math.random() * 100 + "vh",
				animationDuration: Math.random() * 20 + 30 + "s", // Adjusting duration to be slower
				animationDelay: Math.random() * 10 + "s", // Adding delay to stagger animations
			};
			setFlags((prevFlags) => [...prevFlags, newFlag]);
		};

		// Generate an initial set of flags immediately
		for (let i = 0; i < 10; i++) {
			//generateFlag();
		}

		const intervalId = setInterval(generateFlag, 2000); // Generate a new flag every 2 seconds

		return () => clearInterval(intervalId); // Cleanup interval on component unmount
	}, []);

	return (
		<>
		<NavbarIn/>
			<div className='flex flex-col h-screen items-center justify-start p-4 mt-52'>
				{step === 1 ? (
					<>
						<h1 className='text-3xl font-bold text-black text-center mb-8 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md focus:outline-none'>
							Choose your native language!
						</h1>
						<div className='relative'>
							<button
								className='bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md focus:outline-none transform transition duration-300 ease-in-out hover:scale-105'
								onClick={() => setIsOpen(!isOpen)}
							>
								Select Language
							</button>

							{isOpen && (
								<div className='absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-md rounded-lg py-2'>
									<input
										type='text'
										placeholder='Search...'
										className='w-full px-4 py-2 border-b focus:outline-none'
										value={searchTerm}
										onChange={(e) => setSearchTerm(e.target.value)}
									/>
									<div className='max-h-64 overflow-y-auto'>
										<ul>
											{filteredLanguages.map((lang, index) => (
												<li
													key={index}
													className='cursor-pointer px-4 py-2 hover:bg-gray-100 text-black transform transition duration-300 ease-in-out hover:scale-105'
													onClick={() => handleLanguageSelect(lang)}
												>
													{lang}
												</li>
											))}
										</ul>
									</div>
								</div>
							)}
						</div>
					</>
				) : (
					<>
						<div className='w-full max-w-sm mx-auto'>
							<h1 className='text-3xl font-bold text-black text-center bg-white text-gray-800 px-4 py-2 rounded-t-lg shadow-md focus:outline-none'>
								Select Difficulty
							</h1>
							{language && (
								<div className='text-sm text-gray-800 mb-4 bg-white rounded-b-lg shadow-md px-4 py-2 text-center'>
									Your Native Language: <strong>{language}</strong>
								</div>
							)}
						</div>
						<div className='flex space-x-4 mt-2'>
							<button
								className={`px-4 py-2 rounded-lg shadow-md focus:outline-none transform transition duration-300 ease-in-out hover:scale-105 ${
									difficulty === "easy"
										? "bg-blue-500 text-white"
										: "bg-white text-gray-800"
								}`}
								onClick={() => handleDifficultySelect("easy")}
							>
								Easy
							</button>
							<button
								className={`px-4 py-2 rounded-lg shadow-md focus:outline-none transform transition duration-300 ease-in-out hover:scale-105 ${
									difficulty === "medium"
										? "bg-blue-500 text-white"
										: "bg-white text-gray-800"
								}`}
								onClick={() => handleDifficultySelect("medium")}
							>
								Medium
							</button>
							<button
								className={`px-4 py-2 rounded-lg shadow-md focus:outline-none transform transition duration-300 ease-in-out hover:scale-105 ${
									difficulty === "hard"
										? "bg-blue-500 text-white"
										: "bg-white text-gray-800"
								}`}
								onClick={() => handleDifficultySelect("hard")}
							>
								Hard
							</button>
						</div>
						<button
							className='mt-4 px-4 py-2 bg-white text-gray-800 rounded-lg shadow-md focus:outline-none transform transition duration-300 ease-in-out hover:scale-105'
							onClick={() => setStep(1)}
						>
							Back to Language Selection
						</button>
						<button
							className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md focus:outline-none transform transition duration-300 ease-in-out hover:scale-105'
							onClick={() => router.push("/dashboard")}
						>
							Proceed
						</button>
					</>
				)}

		</div>
		</>
	);
}

export default LanguageSelection;
