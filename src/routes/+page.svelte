<script>
    import {HeroSection,AboutMeSection,MyWorkSection,SkillsSection,ContactSection,Header,Footer} from "$components";
    const {data} = $props()
    let {workExperience,projects,skills} = data

    $inspect(data)
</script>
<Header/>
<HeroSection/>
<AboutMeSection {workExperience}/>
<MyWorkSection {projects}/>
<SkillsSection {skills}/>
<ContactSection/>
<Footer/>
